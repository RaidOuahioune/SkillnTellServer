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
        // those need to be changed based on the sheet that the club has
        $isAdmin = false;
        $depId = 2;
        $roleId = 1;
        $isMember = true;
        $yearId = 1;
        $user = User::create([
            'username' => $data['username'],
            'first_name' => $data["first_name"],
            'last_name' => $data['last_name'],
            'gender' => $data['gender'],
            'branch_id' => $data['branch_id'],
            'university' => $data['university'],
            'year_id' => $yearId,
            'is_member' => $isMember,
            'is_admin' => $isAdmin,
            'role_id' => $roleId,
            'department_id' => $depId,
            'email' => $data['email'],
            'password' => bcrypt($data['password'])
        ]);
        $token = $user->createToken('main')->plainTextToken;
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
