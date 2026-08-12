<?php

use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });




Route::get('/', function () {
    return view('portfolio.index');
})->name('portfolio');

Route::get('/conatct', function () {
    return view('sections.contact');
})->name('contact');