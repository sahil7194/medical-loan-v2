<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BlogController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('login', [AuthController::class,'login']);
Route::post('signup', [AuthController::class,'signup']);

// Route::get('blogs',[BlogController::class,'index']);

Route::apiResource('blogs', BlogController::class);

