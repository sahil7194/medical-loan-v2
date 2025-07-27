<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Casts\Attribute;

/**
 * @property int $id
 * @property string $summary
 * @property string $slug
 * @property string $title
 * @property string $description
 * @property string|null $image
 * @property string $redirection_link
 * @property string $min_interest_rate
 * @property string $max_interest_rate
 * @property string $min_cibil
 * @property string $max_cibil
 * @property string $min_tenure
 * @property string $max_tenure
 * @property string $min_amount
 * @property string $max_amount
 * @property string $status
 * @property int|null $bank_id
 * @property int|null $user_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property \Illuminate\Support\Carbon|null $deleted_at
 *
 * @property-read \App\Models\Bank|null $bank
 * @property-read \App\Models\User|null $user
 */
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
            fn () => env('FRONTEND_APP_URL').'schemes/'.$this->slug
        );
    }
}
