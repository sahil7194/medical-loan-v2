<?php

use App\Models\Scheme;
use App\Models\User;
use Illuminate\Support\Str;

if (!function_exists('generate_slug')) {
    function generate_slug($string)
    {
        return Str::slug($string);
    }

    function generateApplicationNumber(string $bankName , int $userId)
    {

        $today = now()->format('YmdHis');

        $bankName = strtoupper(substr($bankName, 0, 3));

        return 'AP' . $today . '' . $bankName . '' . $userId;
    }
}
