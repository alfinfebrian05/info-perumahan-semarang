<?php

namespace App\Services;

use App\Models\User;

class AuthService
{
    public function handleGoogleLogin($googleUser)
    {
        $user = User::updateOrCreate(
            ['email' => $googleUser->email],
            [
                'name' => $googleUser->name,
                'google_id' => $googleUser?->id ?? $googleUser?->sub,
                'avatar' => $googleUser->picture,
                'email_verified_at' => now(),
                'password' => null,
            ]
        );

        $token = $user->createToken('auth_token')->plainTextToken;

        return [
            'user' => $user,
            'token' => $token,
        ];
    }
}