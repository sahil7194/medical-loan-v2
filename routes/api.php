<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\CibilController;
use App\Http\Controllers\SchemeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('login', [AuthController::class,'login']);
Route::post('signup', [AuthController::class,'signup']);

Route::middleware(['auth:api'])->group(function () {

    Route::post('logout', [AuthController::class, 'destroy'])
            ->name('logout');

    Route::get('profile', [AuthController::class, 'profile']);
});


Route::apiResource('blogs', BlogController::class);
Route::apiResource('schemes', SchemeController::class);

Route::post('check-cibil/user',[CibilController::class,'saveUserInfo']);

Route::post('check-cibil/user/{slug}/mobile-otp',[CibilController::class,'sendMobileOtp']);
Route::post('check-cibil/user/{slug}/mobile-otp/verify',[CibilController::class,'verifyMobileOtp']);

Route::post('check-cibil/user/{slug}/email-otp',[CibilController::class,'sendEmailOtp']);
Route::post('check-cibil/user/{slug}/email-otp/verify',[CibilController::class,'verifyEmailOtp']);

Route::post('check-cibil/user/{slug}/address-info',[CibilController::class,'saveAddressInfo']);

