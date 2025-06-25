<?php

use App\Http\Controllers\AgentController;
use App\Http\Controllers\ApplicationsController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::middleware(['auth','agent'])->group(function () {

    Route::get('agent/reference-history', [ApplicationsController::class, 'agentIndex']);

    Route::get('/agent/refer/schemes', [AgentController::class, 'referSchemeList']);

});
