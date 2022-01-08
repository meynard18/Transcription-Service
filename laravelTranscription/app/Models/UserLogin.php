<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserLogin extends Model
{   
    protected $table = "userInfo";
    protected $fillable = ["firstName", "lastName", "email", "password"];
    use HasFactory;
}
