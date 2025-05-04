<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\SchemeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('login', [AuthController::class,'login']);
Route::post('signup', [AuthController::class,'signup']);


Route::apiResource('blogs', BlogController::class);
Route::apiResource('schemes', SchemeController::class);
