<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Laravel\Socialite\Facades\Socialite;
use App\Services\AuthService;
use OpenApi\Attributes as OA;

class AuthController extends Controller
{
    public function __construct(private AuthService $authService) {}

    // 1️⃣ Get Google OAuth URL
    #[OA\Get(
        path: "/api/auth/google/redirect",
        summary: "Get Google OAuth redirect URL",
        operationId: "redirectGoogle",
        tags: ["Auth"],
        responses: [
            new OA\Response(
                response: 200,
                description: "Returns Google OAuth URL and client_id",
                content: new OA\JsonContent(
                    properties: [
                        new OA\Property(property: "url", type: "string"),
                        new OA\Property(property: "client_id", type: "string"),
                    ]
                )
            )
        ]
    )]
    public function redirect(Request $request)
    {
        try {
            $params = http_build_query([
                'client_id' => config('services.google.client_id'),
                'redirect_uri' => config('services.google.redirect'),
                'response_type' => 'code',
                'scope' => 'openid profile email',
                'access_type' => 'offline', // for refresh_token
                'prompt' => 'consent',      // force refresh_token
            ]);

            return response()->json([
                'url' => 'https://accounts.google.com/o/oauth2/auth?' . $params,
                'client_id' => config('services.google.client_id'),
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Failed to generate Google OAuth URL',
                'error' => $e->getMessage()
            ], 400);
        }
    }

    // 2️⃣ Handle Google callback
    #[OA\Get(
        path: "/api/auth/google/callback",
        summary: "Handle Google OAuth callback",
        operationId: "handleGoogleCallback",
        tags: ["Auth"],
        responses: [
            new OA\Response(
                response: 200,
                description: "Returns user data, auth token, and Google tokens",
                content: new OA\JsonContent(
                    properties: [
                        new OA\Property(property: "user", type: "object"),
                        new OA\Property(property: "token", type: "string"),
                        new OA\Property(property: "google_access_token", type: "string"),
                        new OA\Property(property: "google_refresh_token", type: "string"),
                        new OA\Property(property: "google_id_token", type: "string"),
                    ]
                )
            ),
            new OA\Response(
                response: 401,
                description: "Failed to login",
                content: new OA\JsonContent(
                    properties: [
                        new OA\Property(property: "message", type: "string"),
                        new OA\Property(property: "error", type: "string"),
                    ]
                )
            )
        ]
    )]
    public function handleGoogleCallback(Request $request)
    {
        $code = $request->query('code');

        if (!$code) {
            return response()->json([
                'message' => 'Authorization code missing'
            ], 400);
        }

        $response = Http::asForm()->post('https://oauth2.googleapis.com/token', [
            'client_id' => config('services.google.client_id'),
            'client_secret' => config('services.google.client_secret'),
            'redirect_uri' => config('services.google.redirect'),
            'grant_type' => 'authorization_code',
            'code' => $code,
        ]);

        $tokens = $response->json();

        // tokens include:
        // access_token, expires_in, refresh_token, scope, token_type, id_token
        $idToken = $tokens['id_token'] ?? null;

        // Use access_token to fetch user info
        $googleUserResponse = Http::withToken($tokens['access_token'])
            ->get('https://www.googleapis.com/oauth2/v2/userinfo');

        $googleUser = $googleUserResponse->json();

        $data = $this->authService->handleGoogleLogin((object) $googleUser);

        return response()->json([
            'user' => $data['user'],
            'token' => $data['token'],
            'google_access_token' => $tokens['access_token'],
            'google_refresh_token' => $tokens['refresh_token'] ?? null,
            'google_id_token' => $idToken,
        ])->cookie('auth_token', $data['token'], 60 * 24);
    }
    // 3️⃣ Login with Google token (for mobile apps)
    #[OA\Post(
        path: "/api/auth/google",
        operationId: "loginWithGoogle",
        tags: ["Auth"],
        summary: "Login with Google token",
        requestBody: new OA\RequestBody(
            required: true,
            content: new OA\JsonContent(
                required: ["token"],
                properties: [
                    new OA\Property(property: "token", type: "string")
                ]
            )
        ),
        responses: [
            new OA\Response(
                response: 200,
                description: "Success",
                content: new OA\JsonContent(
                    properties: [
                        new OA\Property(property: "user", type: "object"),
                        new OA\Property(property: "token", type: "string")
                    ]
                )
            ),
            new OA\Response(
                response: 401,
                description: "Invalid token",
                content: new OA\JsonContent(
                    properties: [
                        new OA\Property(property: "message", type: "string")
                    ]
                )
            )
        ]
    )]
    public function googleLogin(Request $request)
    {
        $request->validate(['token' => 'required|string']);

        // Verify ID token
        $googleResponse = Http::get('https://oauth2.googleapis.com/tokeninfo', [
            'id_token' => $request->token
        ]);

        if (!$googleResponse->ok()) {
            return response()->json(['message' => 'Invalid Google token'], 401);
        }

        $googleUser = (object) $googleResponse->json();

        // If access_token expired, refresh automatically
        if (isset($googleUser->exp) && $googleUser->exp < time() && isset($googleUser->refresh_token)) {
            $refreshResponse = Http::asForm()->post('https://oauth2.googleapis.com/token', [
                'client_id' => config('services.google.client_id'),
                'client_secret' => config('services.google.client_secret'),
                'grant_type' => 'refresh_token',
                'refresh_token' => $googleUser->refresh_token,
            ]);

            $refreshed = $refreshResponse->json();
            $googleUser->access_token = $refreshed['access_token'] ?? null;
            $googleUser->id_token = $refreshed['id_token'] ?? null;
        }

        $data = $this->authService->handleGoogleLogin($googleUser);

        return response()->json($data)
            ->cookie('auth_token', $data['token'], 60 * 24);
    }
}