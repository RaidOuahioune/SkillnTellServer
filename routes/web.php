<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;




Route::get('/users', function () {

    $users = DB::table('users')->get();
    return $users;
});

