<?php

namespace App\Swagger;

use OpenApi\Attributes as OA;

#[OA\Info(title: "Simple Listing API", version: "1.0.0"), OA\Server(url: "http://localhost:8000", description: "Local Server")]
class OpenApi {}