<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\BranchController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\MessageController;
use App\Http\Requests\BookRequest;
use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:sanctum')->group(function () {
    // those routes only accessed for loged in users
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/logout', [AuthController::class, 'logout']);

    Route::get("/messages", [MessageController::class, 'all']);
    Route::post("/messages/add", [MessageController::class, "addMessage"]);
});
Route::get("/branches", [BranchController::class, 'all']);

// authentication routes
Route::post('/AddAdmin', [AuthController::class, 'signup']);
Route::post('/UserLogin', [AuthController::class, 'login']);
Route::post("/events/add", [EventController::class, 'addEvent']);
Route::get("/events/users", [EventController::class, 'getUsers']);
Route::get("/events/users/admins", [EventController::class, 'getUsersAdmins']);
Route::delete("/events/delete/{id}", [EventController::class, 'deleteEvent']);

Route::get("/events", [EventController::class, 'all']);