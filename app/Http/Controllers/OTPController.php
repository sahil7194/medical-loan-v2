<?php

namespace App\Http\Controllers;

use App\Models\OTP;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OTPController extends Controller
{

    public function requestOtp(Request $request)
    {

        $request->validate([
            'user_identifier' => 'required'
        ]);

        $otp = rand(100000, 999999);

        $type = $this->isEmail($request->user_identifier) ? 'email' : 'mobile';

        OTP::create([
            'type' => $type,
            'value' => $request->user_identifier,
            'otp' => $otp
        ]);

        return response()->json([
            "success" => true,
            "message" => "opt has been sent to $type ",
            // this only for testing purpose
            "otp" => $otp
        ], 200);

    }

    public function verifyOtp(Request $request)
    {
        $params = $request->validate([
            'user_identifier' => 'required',
            'otp' => 'required'
        ]);

        $type = $this->isEmail($request->user_identifier) ? 'email' : 'mobile';

        $otp = OTP::where('otp', $params['otp'])
            ->where('value', $params['user_identifier'])
            ->where('created_at', '>=', Carbon::now()->subMinutes(5))
            ->count();



        if ($otp == 1) {

            return response()->json([
                "success" => true,
                "message" => "otp successfully verified"
            ], 200);
        }

        return response()->json([
            "success" => false,
            "message" => "invalid opt"
        ], 200);
    }

    private function isEmail($input)
    {
        return filter_var($input, FILTER_VALIDATE_EMAIL) !== false;
    }
}
