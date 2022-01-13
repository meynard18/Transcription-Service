 <?php

// namespace App\Http\Controllers\API;
// use App\Http\Controllers\Controller;
// use Illuminate\Http\Request;
// use App\Models\User;
// use Illuminate\Support\Facades\Validator;
// use Illuminate\Support\Facades\Hash;


// class AccountController extends Controller
// {
   

//     public function index () {
//         $account = User::all();
//         return response()->json(['status'=>200, "accounts"=>$account]);
//     }

//     public function register(Request $request) {
//         $validator = Validator::make($request->all(),[
//             "name"=>"required|max:191",
//             "email"=>"required|email|max:191|unique:users,email",
//             "password"=>"required",
//          ]);

        
//          if ($validator->fails()) {
//             return response()->json(['status'=>422, "validate_err"=>$validator->errors()]);
//         }
//         else 
//         {
//             $user = User::create([
//                 'name'=>$request->name,
//                 'email'=>$request->email,
//                 'password'=>Hash::make($request->password),
//             ]);

//             $token = $user->createToken($user->email.'_Token')->plainTextToken;
//             return response()->json(['status'=>200,
//             'username'=>$user->name,
//             'token'=>$token,
//             'message'=>'user added Successfully']);
//         }
//     } -->

    // public function logIn (Request $request) {
    //     $validator = Validator::make($request->all(),[
    //         "email"=>"required|max:191",
    //         "password"=>"required",
    //      ]);
    //      if ($validator->fails()) {
    //         return response()->json(['status'=>422, "validate_err"=>$validator->errors()]);
    //     }
    //     else {
    //         $account = User::where('email', $request->email)->first();

    //         if (! $account || ! Hash::check($request->password, $account->password)) {
    //             return response()->json([
    //                 'status'=>401,
    //                 'message'=>'Invalid Credentials',
    //             ]);
    //         }
    //     }

    // }

    // public function edit ($id) {
    //     $account = User::find($id);
    //     if ($account) {
    //         return response()->json(['status'=>200, "account"=>$account]);
    //     }
    //     else {
    //         return response()->json(['status'=>404, 'message'=>'No account id found']);
    //     } 
    // }

    // public function update (Request $request, $id ) {
    //     $validator = Validator::make($request->all(),[
    //         "firstName"=>"required", 
    //         "lastName"=>"required", 
    //         "email"=>"required",
    //         "password"=>"required",
    //     ]);
    //     if ($validator->fails()) {
    //         return response()->json(['status'=>422, "validationError"=>$validator->errors()]);
    //     }
    //     else {
    //         $account = User:: find($id); //same to SELECT * FROM table Where id is
    //         if ($account) {
    //             $account->firstName = $request->input('firstName');
    //             $account->lastName = $request->input('lastName');
    //             $account->email = $request->input('email');
    //             $account->password = $request->input('password');
    //             $account->update();
    //             return response()->json(['status'=>200,  'message'=>'account updated succesfully']);
    //         }
    //         else {
    //             return response()->json(['status'=>404, 'message'=>'No account id found']);
    //         }
    //     }
    // }




    // public function delete ($id) {
    //     $account = User::find($id);
    //     if ($account) {
    //         $account-> delete();
    //         return response()->json(['status'=>200,'message'=>'account deleted']);
    //     }
    //     else {
    //         return response()->json(['status'=>404, 'message'=>'No account id found']);
    //     }
    // }
// }
