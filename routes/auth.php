<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('login', [AuthController::class, 'showLoginPage'])
->name('login');

Route::post('login', [AuthController::class, 'login']);

Route::post('logout', [AuthController::class, 'destroy'])
        ->name('logout');


Route::get('signup', [AuthController::class, 'showSignupPage'])
->name('signup');

Route::get('agent/signup', [AuthController::class, 'showAgentSignupPage'])
->name('agent.signup');

Route::post('signup', [AuthController::class, 'signup']);


Route::get('/forget-password', function (){
    return Inertia::render('auth/forget-password');
});

Route::get('/reset-password', function (){
    return Inertia::render('auth/reset-password');
});
