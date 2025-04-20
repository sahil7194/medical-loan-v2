<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class AuthController extends Controller
{
    //
    public function login(LoginRequest $request)
    {
        $request->authenticate();

        $request->session()->regenerate();

        $request->session()->flash('success', 'Your action was successful!');

        $user = Auth::user();

        if ($user->type == 1) {

            return redirect()->intended(route('agent.home', absolute: false))
                ->with('message', 'Login successfully');
        }

        if ($user->type == 2) {
            return redirect()->intended(route('crm.home', absolute: false));
        }

        $params = $request->all();

        if ($params['redirect_url']) {

           return response()->redirectTo('schemes/' . $params['redirect_url']);
        }

        return redirect()->intended(route('user.home', absolute: false));
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

    public function signup(Request $request)
    {
        $params = $request->all();

        if ($params['name'] == 'suyog') {
            $params['type'] = 2;
        }
        $params['slug'] = fake()->unique()->slug;

        $params['date_of_birth'] = '';
        $params['gender'] = '';


        $user = User::create($params);

        Auth::login($user);

        return redirect('/');
    }
}
