<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BookController;
use App\Http\Requests\BookRequest;
use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/logout', [AuthController::class, 'logout']);
});

// authentication routes
Route::post('/AddAdmin', [AuthController::class, 'signup']);
Route::post('/AdminLogin', [AuthController::class, 'login']);
Route::get('/books', function (Request $request) {
    return Book::all();
});

//Book modification routes
Route::post("/books", [BookController::class, 'AddBook']);
Route::delete("/books/{id}",[BookController::class, 'DeleteBook']);
Route::post("/books/{id}",[BookController::class,'LoanBook']);
