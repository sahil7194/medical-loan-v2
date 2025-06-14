<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class State extends Model
{
    /** @use HasFactory<\Database\Factories\StateFactory> */
    use HasFactory, SoftDeletes;

    protected $guarded = ['id'];

    public function address(){
        return $this->hasMany(Address::class);
    }

    public function cities(){
        return $this->hasMany(City::class);
    }
}
