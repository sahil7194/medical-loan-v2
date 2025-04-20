<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class City extends Model
{
    /** @use HasFactory<\Database\Factories\CityFactory> */
    use HasFactory, SoftDeletes;

    protected $guarded = ['id'];

    public function address(){
        return $this->hasMany(Address::class);
    }

    public function state(){
        return $this->belongsTo(State::class);
    }
}
