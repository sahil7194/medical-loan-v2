<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class OTP extends Model
{
    /** @use HasFactory<\Database\Factories\OTPFactory> */
    use HasFactory, SoftDeletes;

    protected $guarded = ['id'];


}
