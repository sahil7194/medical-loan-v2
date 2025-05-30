<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\CibilController;
use App\Http\Controllers\CityController;
use App\Http\Controllers\OTPController;
use App\Http\Controllers\SchemeController;
use App\Http\Controllers\StateController;
use Illuminate\Support\Facades\Route;

Route::post('login', [AuthController::class, 'login']);
Route::post('signup', [AuthController::class, 'signup']);

Route::middleware(['auth:api'])->group(function () {

    Route::post('logout', [AuthController::class, 'destroy'])
        ->name('logout');
});

Route::controller(OTPController::class)->group(function () {

    Route::post('request-opt', 'requestOtp');
    Route::post('verify-opt', 'verifyOtp');

});

Route::apiResource('blogs', BlogController::class);

Route::apiResource('schemes', SchemeController::class);

Route::post('check-cibil/user', [CibilController::class, 'saveUserInfo']);

Route::post('check-cibil/user/{slug}/address-info', [CibilController::class, 'saveAddressInfo']);


Route::post('cibil-check', [CibilController::class,'checkCibil'])->name('cibil.check');

Route::get('states', [StateController::class, 'index']);

Route::get('cities', [CityController::class, 'filterByState']);

require __DIR__ . '/user.php';
