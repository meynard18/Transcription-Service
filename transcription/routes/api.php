<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AccountController;
use App\Http\Controllers\API\ProductController;

// ACCOUNT ROUTE ///
Route::get('account', [AccountController::class, 'index']);
Route::post('/register', [AccountController::class, 'create']);
Route::get('/editAccount/{id}', [AccountController::class, 'edit']);
Route::put('/updateAccount/{id}', [AccountController::class, 'update']);
Route::delete('/deleteAccount/{id}', [AccountController::class, 'delete']);


// PRODUCT ROUTE //
Route::get('/editProduct/{id}', [ProductController::class, 'edit']);
Route::put('/updateProduct/{id}', [ProductController::class, 'update']);
Route::get('products', [ProductController::class, 'index']);
Route::post('/addProduct', [ProductController::class, 'create']);
Route::delete('/deleteproduct/{id}', [ProductController::class, 'delete']);
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
