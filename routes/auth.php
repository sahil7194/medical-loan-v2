<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/login', function (){
    return Inertia::render('auth/login');
});

Route::get('/signup', function (){
    return Inertia::render('auth/singup');
});

Route::get('/forget-password', function (){
    return Inertia::render('auth/forget-password');
});

Route::get('/reset-password', function (){
    return Inertia::render('auth/reset-password');
});
