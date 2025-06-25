<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\SignupRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AuthController extends Controller
{
    //
    public function login(LoginRequest $request)
    {
        $params = $request->validated();

        if ($token = Auth::attempt($params)) {

            return response()->json([
                "message" => 'login successfully done',
                "success" => true,
                "user"    =>  UserResource::make(Auth::user()),
                "token"   => $token
            ], 200);
        }

        return response()->json([
            "message" => 'user name or password invalid',
            "success" => false
        ]);
    }

    public function showLoginPage()
    {
        return Inertia::render('auth/login');
    }

    public function destroy(Request $request): JsonResponse
    {
        Auth::guard('api')->logout();

         return response()->json([
                "message" => 'successfully logout',
                "success" => true,
            ], 200);
    }

    public function showSignupPage()
    {
        return Inertia::render('auth/singup');
    }

    public function showAgentSignupPage()
    {
        return Inertia::render('auth/singup');
    }

public function signup(SignupRequest $request)
{
    $params = $request->validated();

    // Use the type provided in the request or default it to 1 if not set
    $params['type'] = $params['type'] ?? 1;

    $params['slug'] = fake()->unique()->slug;

    $user = User::create($params);

    if ($token = Auth::guard('api')->attempt([
        'email' => $request['email'],
        'password' => $request['password']
    ])) {
        return response()->json([
            "message" => 'login successfully done',
            "success" => true,
            "user"    => UserResource::make(Auth::user()),
            "token"   => $token
        ], 200);
    }

    return response()->json([
        "message" => 'user name or password invalid',
        "success" => false
    ]);
}


 public function profile()
{
    return Auth::user()->load('address','address.state', 'address.city');
}

}
