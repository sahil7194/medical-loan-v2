<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Casts\Attribute;

class Scheme extends Model
{
    /** @use HasFactory<\Database\Factories\SchemeFactory> */
    use HasFactory , SoftDeletes;

    protected $appends = ['app_url'];
    protected $guarded = ['id'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function bank()
    {
        return $this->belongsTo(Bank::class);
    }

    protected function appUrl(): Attribute
    {
        return Attribute::get(
            fn () => url('schemes/').'/'.$this->slug
        );
    }
}
