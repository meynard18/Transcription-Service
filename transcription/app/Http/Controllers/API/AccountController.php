<?php

namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Account;
use Illuminate\Support\Facades\Validator;

class AccountController extends Controller
{
    public function create(Request $request) {
        $validator = Validator::make($request->all(),[
            "firstName"=>"required", 
            "lastName"=>"required",
            "email"=>"required",
            "password"=>"required",
         ]);
         if ($validator->fails()) {
            return response()->json(['status'=>422, "validate_err"=>$validator->errors()]);
        }
        else {
            $account = New Account();
            $account->firstName=$request->input('firstName');
            $account->lastName=$request->input('lastName');
            $account->email=$request->input('email');
            $account->password=$request->input('password');
            $account->save(); //query builder orm
            return response()->json(['status'=>200, 'message'=>'Account added Successfully']);
        }
    }
}
