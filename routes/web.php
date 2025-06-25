<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\CibilController;
use App\Http\Controllers\CityController;
use App\Http\Controllers\SchemeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

require __DIR__ . '/auth.php';
require __DIR__ . '/user.php';
require __DIR__ . '/agent.php';
require __DIR__ . '/crm.php';



Route::get('/', function () {
    return Inertia::render('home');
})->name('home');

Route::get('/about-us', function () {
    return Inertia::render('about-us');
});

Route::get('/contact', function () {
    return Inertia::render('contact');
});

Route::get('/privacy', function () {
    return Inertia::render('privacy-policy');
});

Route::get('terms', function () {
    return Inertia::render('terms-condition');
});

Route::get('blogs', [BlogController::class,'index']);

Route::get('blogs/{slug}', [BlogController::class,'show']);

Route::get('schemes', [SchemeController::class,'index']);

Route::get('schemes/{slug}', [SchemeController::class,'show']);

Route::get('cibil-check', [CibilController::class,'checkCibilView']);

Route::post('cibil-check', [CibilController::class,'checkCibil'])->name('cibil.check');

Route::get('cibil-result/{slug}', [CibilController::class,'cibilResult']);

Route::get('cities', [CityController::class,'filterByState']);
