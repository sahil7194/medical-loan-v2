<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Cibil extends Model
{
    /** @use HasFactory<\Database\Factories\CibilFactory> */
    use HasFactory, SoftDeletes;

    protected $guarded = ['id'];

}
