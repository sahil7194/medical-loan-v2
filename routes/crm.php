<?php

use App\Http\Controllers\ApplicationsController;
use App\Http\Controllers\BankController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\CibilController;
use App\Http\Controllers\SchemeController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::middleware(['auth','staff'])->group(function(){


// Route::get('/crm/home', function () {
//     return Inertia::render('crm/crm-home');
// })->name('crm.home');

Route::get('/crm/cibil-log',[CibilController::class,'cibilLog']);

Route::get('/crm/application-history', [ApplicationsController::class,'crmIndex']);

// bank
Route::get('crm/bank/', [BankController::class, 'index']);
Route::get('crm/bank/{slug}', [BankController::class, 'show']);
Route::post('crm/bank/', [BankController::class, 'store'])->name('crm.bank.create');
Route::put('crm/bank/{slug}' ,[BankController::class, 'update'])->name('crm.bank.update');
Route::delete('crm/bank/{slug}', [BankController::class, 'destroy'])->name('crm.bank.delete');

// blog
Route::get('crm/blogs/', [BlogController::class, 'crmIndex']);
Route::get('crm/blogs/{slug}', [BlogController::class, 'show']);
Route::post('crm/blogs', [BlogController::class, 'store'])->name('crm.blog.create');
Route::put('crm/blogs/{slug}', [BlogController::class, 'update'])->name('crm.blog.update');
Route::delete('crm/blogs/{slug}', [BlogController::class, 'destroy'])->name('crm.blog.delete');

// schemes
Route::get('crm/schemes', [SchemeController::class, 'crmIndex']);
Route::get('crm/schemes/{slug}', [SchemeController::class, 'crmShow']);
Route::post('crm/schemes/', [SchemeController::class, 'store'])->name('crm.schemes.create');
Route::put('crm/schemes/{slug}', [SchemeController::class, 'update'])->name('crm.schemes.update');
Route::delete('crm/schemes/{slug}', [SchemeController::class, 'destroy'])->name('crm.schemes.delete');


// user
Route::get('crm/users/', [UserController::class, 'index']);
Route::get('crm/users/{slug}', [UserController::class, 'show']);
Route::post('crm/users/', [UserController::class, 'store'])->name('crm.users.create');
Route::put('crm/users/{slug}', [UserController::class, 'update'])->name('crm.users.edit');
Route::delete('crm/users/{slug}', [UserController::class, 'destroy']);

// Route::get('/crm/profile', [UserController::class,'showUserProfilePage']);

// Route::get('user/profile/update', [UserController::class, 'showUserProfileUpdatePage'])->name('crm.profile.update.show');

// Route::put('crm/profile/update', [UserController::class, 'update'])->name('crm.update');

});
