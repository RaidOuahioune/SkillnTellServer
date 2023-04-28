<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Sanctum\HasApiTokens;

class AuthController extends Controller
{
    //this controller is resposible for the authentication    /*Check the Login Request class to check the rules defined*/
    public function login(LoginRequest $request)
    {
        $data = $request->validated();
        // data must be an array that contains email and password
        if (!Auth::attempt($data)) {
            return response('Email or Password incorrect', 401);
        }
        // this line returns a UserModel instance

        $user = Auth::user();
        $token = $user->createToken("main")->plainTextToken;;
        return response(['user' => $user, 'token' => $token]);
    }
    public function signup(SignupRequest $request)
    {
        $data = $request->validated();
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password'])
        ]);
        $token = $user->createToken('main')->planTextToken;
        return response(['user' => $user, 'token' => $token]);
    }

    public function logout(Request $request)
    {
        // get the user making the request
        $user = $request->user();
        $user->currentAccessToken()->delete();
        return response('', 204); // saying ok but no data is sent
    }
}
