<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\ProductController;

// ACCOUNT ROUTE ///
// Route::post('login', [AccountController::class, 'login']);
// Route::get('account', [AccountController::class, 'index']);
// Route::post('/register', [AccountController::class, 'register']);
// Route::get('/editAccount/{id}', [AccountController::class, 'edit']);
// Route::put('/updateAccount/{id}', [AccountController::class, 'update']);
// Route::delete('/deleteAccount/{id}', [AccountController::class, 'delete']);


//AUTH CONTROLLER //
Route::post('/register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

Route::middleware(['auth:sanctum'])->group(function (){
    Route::post('logout', [AuthController::class, 'logout']);

});

// PRODUCT ROUTE //
Route::get('/editProduct/{id}', [ProductController::class, 'edit']);
Route::put('/updateProduct/{id}', [ProductController::class, 'update']);
Route::get('products', [ProductController::class, 'index']);
Route::post('/addProduct', [ProductController::class, 'create']);
Route::delete('/deleteproduct/{id}', [ProductController::class, 'delete']);
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
