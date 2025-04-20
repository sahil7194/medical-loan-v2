<?php

use App\Http\Controllers\ApplicationsController;
use App\Http\Controllers\BankController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\CibilController;
use App\Http\Controllers\SchemeController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::middleware('agent')->group(function(){


Route::get('/crm/home', function () {
    return Inertia::render('crm/crm-home');
})->name('crm.home');


Route::get('/crm/cibil-log',[CibilController::class,'cibilLog']);

Route::get('/crm/application-history', [ApplicationsController::class,'crmIndex']);


// bank
Route::get('crm/bank/', [BankController::class, 'index']);
Route::get('crm/bank/create', [BankController::class, 'create']);
Route::post('crm/bank/create', [BankController::class, 'store'])->name('crm.bank.create');
Route::get('crm/bank/{slug}/edit', [BankController::class, 'edit'])->name('crm.bank.edit');
Route::post('crm/bank/{slug}/edit', [BankController::class, 'update'])->name('crm.bank.update');
Route::get('crm/bank/{slug}/delete', [BankController::class, 'destroy'])->name('crm.bank.delete');

// blog
Route::get('crm/blog/', [BlogController::class, 'crmIndex']);
Route::get('crm/blog/create', [BlogController::class, 'create']);
Route::post('crm/blog/create', [BlogController::class, 'store'])->name('crm.blog.create');
Route::get('crm/blog/{slug}', [BlogController::class, 'crmShow']);
Route::get('crm/blog/{slug}/edit', [BlogController::class, 'edit'])->name('crm.blog.edit');
Route::post('crm/blog/{slug}/edit', [BlogController::class, 'update'])->name('crm.blog.update');
Route::get('crm/blog/{slug}/delete', [BlogController::class, 'destroy'])->name('crm.blog.delete');

// schemes
Route::get('crm/schemes', [SchemeController::class, 'crmIndex']);
Route::get('crm/schemes/create', [SchemeController::class, 'create']);
Route::post('crm/schemes/create', [SchemeController::class, 'store'])->name('crm.schemes.create');

Route::get('crm/schemes/{slug}', [SchemeController::class, 'crmShow']);

Route::get('crm/schemes/{slug}/edit', [SchemeController::class, 'edit'])->name('crm.schemes.edit');
Route::put('crm/schemes/{slug}', [SchemeController::class, 'update'])->name('crm.schemes.update');
Route::get('crm/schemes/{slug}/delete', [SchemeController::class, 'destroy'])->name('crm.schemes.delete');


// user
Route::get('crm/users/', [UserController::class, 'index']);
Route::get('crm/users/create', [UserController::class, 'create']);
Route::post('crm/users/create', [UserController::class, 'store'])->name('crm.users.create');
Route::get('crm/users/{slug}/edit', [UserController::class, 'edit']);
Route::put('crm/users/{slug}/edit', [UserController::class, 'update'])->name('crm.users.edit');
Route::get('crm/users/{slug}/delete', [UserController::class, 'destroy']);


});
