<?php

namespace App\Http\Controllers\Webhook;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;

class TelegramController extends Controller
{
    public function listenWebhook(Request $request)
    {
        Log::info('telegram', [
            'request' => $request->all(),
        ]);

        return response()->json([
            "message" => 'ok'
        ], 200);
    }
}
