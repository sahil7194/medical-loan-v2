<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\SignupRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Session;
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

    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        Cache::clear();

        return redirect('/');
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
        $params = $request->all();

        if ($params['name'] == 'suyog') {
            $params['type'] = 2;
        }
        $params['slug'] = fake()->unique()->slug;

        $user = User::create($params);

        if ($token = Auth::attempt([
            'email' => $request->email,
            'password' => $request->password
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
}
