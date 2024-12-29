<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Helpers\APIResponse;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules;

class AuthController extends Controller
{
    public function register(Request $request){

        // apply the validation
        $vaild_data = Validator::make($request->all(),[
            'name' => "required",
            'email' => "required|email|unique:users,email",
            'gender' => "required|in:male,female",
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);


        // check if the data is vaild or not
        if($vaild_data->fails())
            return APIResponse::api_response(422, $vaild_data->messages(), []);


        // create a new record
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'gender' => $request->gender,
            'password' => Hash::make($request->password),
        ]);

        // create a token to ensure the user is authenticated.
        $data['token'] = $user->createToken('auth_token')->plainTextToken;
        $data['user'] = json_encode($user);

        return APIResponse::api_response(200 , "Registed Successfully", $data);
    }


    public function login(Request $request){
        
        // apply the validation
        $vaild_data = Validator::make($request->all(),[
            'email' => "required|email",
            'password' => ['required'],
        ]);


        // check if the data is vaild or not
        if($vaild_data->fails())
        return APIResponse::api_response(422, $vaild_data->messages(), []);




        // check if the credentials correct of not.
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            
            // create a token to ensure the user is authenticated.
            $data['token'] = Auth::user()->createToken('auth_token')->plainTextToken;
            $data['user'] = json_encode(Auth::user());
            $data['is_auth'] = json_encode(Auth::check());

            return APIResponse::api_response(200 , "Logged in successfully", $data);
        }

        return APIResponse::api_response(422 , "Error While Logged in.", []);
    }


    public function logout(){

        Auth::user()->currentAccessToken()->delete();
        return APIResponse::api_response(200 , "Logged out successfully", []);
    }
}
