<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\BranchController;
use App\Http\Controllers\MessageController;
use App\Http\Requests\BookRequest;
use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
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
    // those routes only accessed for loged in users
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/logout', [AuthController::class, 'logout']);
});

// authentication routes
Route::post('/AddUser', [AuthController::class, 'signup']);
Route::post('/UserLogin', [AuthController::class, 'login']);

// Mesagges routes

Route::get("/messages",[MessageController::class,'all']);
Route::post("/messages/add",[MessageController::class,"addMessage"]);


Route::get("/branches",[BranchController::class,'all']);
