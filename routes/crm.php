<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/crm/home', function () {
    return Inertia::render('crm/crm-home');
});

Route::get('/crm/cibil-log', function () {
    return Inertia::render('crm/cibil-log');
});

Route::get('/crm/history', function () {
    return Inertia::render('crm/application-history');
});


// bank
Route::get('crm/bank/', function () {
    return Inertia::render('crm/bank/bank-list');
});

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
Route::get('crm/schemes/', function () {
    return Inertia::render('crm/schemes/scheme-list');
});

Route::get('crm/schemes/create', function () {
    return Inertia::render('crm/schemes/scheme-create');
});

Route::get('crm/schemes/{slug}', function () {
    return Inertia::render('crm/schemes/scheme-show');
});

Route::get('crm/schemes/{slug}/edit', function () {
    return Inertia::render('crm/schemes/scheme-edit');
});


// user
Route::get('crm/users/', function () {
    return Inertia::render('crm/user/user-list');
});

Route::get('crm/users/create', function () {
    return Inertia::render('crm/user/user-create');
});

Route::get('crm/users/{slug}', function () {
    return Inertia::render('crm/user/user-show');
});

Route::get('crm/users/{slug}/edit', function () {
    return Inertia::render('crm/user/user-edit');
});
