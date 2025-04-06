<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('user/home', function (){
    return Inertia::render('user/user-home');
})->name('user.home');

Route::get('user/application-history', function (){
    return Inertia::render('user/application-history');
});

Route::get('user/profile', function (){
    return Inertia::render('user/user-profile');
});

Route::get('user/profile/update', function (){
    return Inertia::render('user/user-update-profile');
});
