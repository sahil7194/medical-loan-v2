<?php

use App\Http\Controllers\BlogController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('blogs',function(){
//     return Inertia::render('blogs');
// });


Route::get('blogs', [BlogController::class, 'index'])->name('blogs');
