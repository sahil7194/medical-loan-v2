<?php

use App\Http\Controllers\ApplicationsController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::middleware(['auth', 'user'])->group(function () {

    Route::get('user/home', function () {
        return Inertia::render('user/user-home');
    })->name('user.home');

    Route::post('user/apply', [ApplicationsController::class, 'apply'])->name('user.apply');

    Route::get('user/application-history', [ApplicationsController::class, 'userIndex']);

    Route::get('user/profile', [UserController::class,'showUserProfilePage']);

    Route::get('user/profile/update', [UserController::class, 'showUserProfileUpdatePage'])->name('user.profile.update.show');

    Route::put('user/profile/update', [UserController::class, 'update'])->name('user.update');
});
