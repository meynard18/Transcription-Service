<?php

namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Account;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;


class AccountController extends Controller
{
    public function index () {
        $account = Account::all();
        return response()->json(['status'=>200, "accounts"=>$account]);
    }

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
            $account->password=Hash::make($request->input('password'));
            $account->save(); //query builder orm
            return response()->json(['status'=>200, 'message'=>'Account added Successfully']);
        }
    }

    public function logIn (Request $request) {
        $validator = Validator::make($request->all(),[
            "email"=>"required|max:191",
            "password"=>"required",
         ]);
         if ($validator->fails()) {
            return response()->json(['status'=>422, "validate_err"=>$validator->errors()]);
        }
        else {
            $account = Account::where('email', $request->email)->first();

            if (! $account || ! Hash::check($request->password, $account->password)) {
                return response()->json([
                    'status'=>401,
                    'message'=>'Invalid Credentials',
                ]);
            }
        }

    }

    public function edit ($id) {
        $account = Account::find($id);
        if ($account) {
            return response()->json(['status'=>200, "account"=>$account]);
        }
        else {
            return response()->json(['status'=>404, 'message'=>'No account id found']);
        } 
    }

    public function update (Request $request, $id ) {
        $validator = Validator::make($request->all(),[
            "firstName"=>"required", 
            "lastName"=>"required", 
            "email"=>"required",
            "password"=>"required",
        ]);
        if ($validator->fails()) {
            return response()->json(['status'=>422, "validationError"=>$validator->errors()]);
        }
        else {
            $account = Account:: find($id); //same to SELECT * FROM table Where id is
            if ($account) {
                $account->firstName = $request->input('firstName');
                $account->lastName = $request->input('lastName');
                $account->email = $request->input('email');
                $account->password = $request->input('password');
                $account->update();
                return response()->json(['status'=>200,  'message'=>'account updated succesfully']);
            }
            else {
                return response()->json(['status'=>404, 'message'=>'No account id found']);
            }
        }
    }




    public function delete ($id) {
        $account = Account::find($id);
        if ($account) {
            $account-> delete();
            return response()->json(['status'=>200,'message'=>'account deleted']);
        }
        else {
            return response()->json(['status'=>404, 'message'=>'No account id found']);
        }
    }
}
