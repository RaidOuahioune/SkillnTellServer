<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BranchController;
use App\Http\Controllers\MessageController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:sanctum')->group(function () {
    // those routes only accessed for loged in users
    // this is done by the auth:sanctum middleware  that checks  if the user is logged in or not via the token sent in the request header
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/logout', [AuthController::class, 'logout']);

    Route::get("/messages", [MessageController::class, 'all']);
    Route::post("/messages/add", [MessageController::class, "addMessage"]);
});
Route::get("/branches", [BranchController::class, 'all']);

// authentication routes
Route::post('/AddUser', [AuthController::class, 'signup']);
Route::post('/UserLogin', [AuthController::class, 'login']);

// Mesagges routes
