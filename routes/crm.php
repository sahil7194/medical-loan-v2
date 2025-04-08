<?php

use App\Http\Controllers\BankController;
use App\Http\Controllers\SchemeController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/crm/home', function () {
    return Inertia::render('crm/crm-home');
})->name('crm.home');

Route::get('/crm/cibil-log', function () {
    return Inertia::render('crm/cibil-log');
});

Route::get('/crm/application-history', function () {
    return Inertia::render('crm/application-history');
});


// bank
Route::get('crm/bank/', [BankController::class, 'index']);
// Route::get('crm/bank/', function () {
//     return Inertia::render('crm/bank/bank-list');
// });

Route::get('crm/bank/create', function () {
    return Inertia::render('crm/bank/bank-create');
});

Route::get('crm/bank/{slug}', function () {
    return Inertia::render('crm/bank/bank-show');
});

Route::get('crm/bank/{slug}/edit', function () {
    return Inertia::render('crm/bank/bank-edit');
});


// blog
Route::get('crm/blog/', function () {
    return Inertia::render('crm/blog/blog-list');
});

Route::get('crm/blog/create', function () {
    return Inertia::render('crm/blog/blog-create');
});

Route::get('crm/blog/{slug}', function () {
    return Inertia::render('crm/blog/blog-show');
});

Route::get('crm/blog/{slug}/edit', function () {
    return Inertia::render('crm/blog/blog-edit');
});

// schemes

Route::get('crm/schemes', [SchemeController::class, 'crmIndex']);
Route::get('crm/schemes/create', [SchemeController::class, 'create']);
Route::post('crm/schemes/create', [SchemeController::class, 'store'])->name('crm.schemes.create');

Route::get('crm/schemes/{slug}', [SchemeController::class, 'crmShow']);

Route::get('crm/schemes/{slug}/edit', [SchemeController::class, 'edit']);
Route::put('crm/schemes/{slug}', [SchemeController::class, 'update']);
Route::get('crm/schemes/{slug}/delete', [SchemeController::class, 'destroy']);


// user
Route::get('crm/users/', [UserController::class, 'index']);
Route::get('crm/users/create', [UserController::class, 'create']);
Route::post('crm/users/create', [UserController::class, 'store'])->name('crm.users.create');
Route::get('crm/users/{slug}/edit', [UserController::class, 'edit']);
Route::put('crm/users/{slug}/show', [UserController::class, 'update'])->name('crm.users.edit');
Route::get('crm/users/{slug}/delete', [UserController::class, 'destroy']);



Route::get('crm/users/{slug}', function () {
    return Inertia::render('crm/user/user-show');
});
