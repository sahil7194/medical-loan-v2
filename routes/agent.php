<?php

use App\Http\Controllers\AgentController;
use App\Http\Controllers\ApplicationsController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::middleware(['auth','agent'])->group(function () {

    Route::get('agent/home', function () {
        return Inertia::render('agent/agent-home');
    })->name('agent.home');

    Route::get('agent/profile', [UserController::class,'showUserProfilePage']);

    Route::get('agent/profile/update', [UserController::class, 'showUserProfileUpdatePage'])->name('agent.profile.update.show');

    Route::get('agent/reference-history', [ApplicationsController::class, 'agentIndex']);

    Route::get('/agent/refer/schemes', [AgentController::class, 'referSchemeList']);

    Route::put('agent/profile/update', [UserController::class, 'update'])->name('agent.update');

});
