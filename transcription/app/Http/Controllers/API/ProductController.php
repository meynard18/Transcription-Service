<?php

namespace App\Http\Controllers\API;
use App\Models\Product;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index () {
        $product = Product::all();
        return response()->json(['status'=>200, "products"=>$product]);
    }
    public function create (Request $request) {
        $validator = Validator::make($request->all(),[
            "title"=>"required", 
            "artist"=>"required", 
            "category"=>"required",
            "price"=>"required",
        ]);
        if ($validator->fails()) {
            return response()->json(['status'=>422, "validate_err"=>$validator->errors()]);
        }
        else {
            $product = New Product();
            $product->title=$request->input('title');
            $product->artist=$request->input('artist');
            $product->category=$request->input('category');
            $product->price=$request->input('price');
            $product->save(); //query builder orm
            return response()->json(['status'=>200, 'message'=>'product addded succesfully']);
        }

    }

    public function edit ($id) {
        $product = Product::find($id);
        if ($product) {
            return response()->json(['status'=>200, "product"=>$product]);
        }
        else {
            return response()->json(['status'=>404, 'message'=>'No product id found']);
        }
    }
    public function update (Request $request, $id ) {
        $validator = Validator::make($request->all(),[
            "title"=>"required", 
            "artist"=>"required", 
            "category"=>"required",
            "price"=>"required",
        ]);
        if ($validator->fails()) {
            return response()->json(['status'=>422, "validationError"=>$validator->errors()]);
        }
        else {
            $product = Product:: find($id); //same to SELECT * FROM table Where id is
            if ($product) {
                $product->title=$request->input('title');
                $product->artist=$request->input('artist');
                $product->category=$request->input('category');
                $product->price=$request->input('price');
                $product->update();
                return response()->json(['status'=>200,  'message'=>'product updated succesfully']);
            }
            else {
                return response()->json(['status'=>404, 'message'=>'No product id found']);
            }
        }
    }
    public function delete ($id) {
        $product = Product::find($id);
        if ($product) {
            $product-> delete();
            return response()->json(['status'=>200,'message'=>'Product deleted']);
        }
        else {
            return response()->json(['status'=>404, 'message'=>'No product id found']);
        }
    }
}
