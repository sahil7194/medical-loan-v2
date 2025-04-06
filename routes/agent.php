<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('agent/home', function (){
    return Inertia::render('agent/agent-home');
});

Route::get('agent/profile', function (){
    return Inertia::render('agent/agent-profile');
});

Route::get('agent/profile/update', function (){
    return Inertia::render('agent/agent-update-profile');
});

Route::get('agent/reference-history', function (){
    return Inertia::render('agent/reference-history');
});
