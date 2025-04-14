<?php

use App\Http\Controllers\AgentController;
use App\Http\Controllers\ApplicationsController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('agent/home', function (){
    return Inertia::render('agent/agent-home');
})->name('agent.home');

Route::get('agent/profile', function (){
    return Inertia::render('agent/agent-profile');
});

Route::get('agent/profile/update', function (){
    return Inertia::render('agent/agent-update-profile');
});

Route::get('agent/reference-history', [ApplicationsController::class,'agentIndex']);

Route::get('/agent/refer/schemes', [AgentController::class,'referSchemeList']);
