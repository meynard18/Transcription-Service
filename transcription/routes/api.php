<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AccountController;

Route::get('account', [AccountController::class, 'index']);
Route::post('/register', [AccountController::class, 'create']);
Route::get('/editAccount/{id}', [AccountController::class, 'edit']);
// Route::put('/updateAccount/{id}', [AccountController::class, 'update']);

Route::delete('/deleteAccount/{id}', [AccountController::class, 'delete']);
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
