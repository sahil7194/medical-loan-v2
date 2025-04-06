<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

require __DIR__ . '/auth.php';
require __DIR__ . '/user.php';
require __DIR__ . '/agent.php';
require __DIR__ . '/crm.php';



Route::get('/', function () {
    return Inertia::render('home');
});

Route::get('/about-us', function () {
    return Inertia::render('about-us');
});

Route::get('/privacy-policy', function () {
    return Inertia::render('privacy-policy');
});

Route::get('terms-condition', function () {
    return Inertia::render('terms-condition');
});

Route::get('blogs', function () {
    return Inertia::render('Blogs/blogs');
});

Route::get('blogs/{slug}', function () {
    return Inertia::render('Blogs/blog');
});

Route::get('schemes', function () {
    return Inertia::render('schemes/schemes');
});

Route::get('schemes/{slug}', function () {
    return Inertia::render('schemes/scheme');
});

Route::get('cibil-check', function () {
    return Inertia::render('Cibil/cibil-check');
});

Route::get('cibil-result/{slug}', function () {
    return Inertia::render('Cibil/cibil-result');
});
