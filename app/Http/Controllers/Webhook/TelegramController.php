<?php

namespace App\Http\Controllers\Webhook;

use App\Http\Controllers\Controller;
use App\Http\Services\Telegram\TelegramService;
use Illuminate\Http\Request;
class TelegramController extends Controller
{
    public function listenWebhook(Request $request)
    {

        $parmas = $request->all();

        $parmas = $parmas['message'];

        $firstName = $parmas['from']['first_name'];
        $lastName = $parmas['from']['last_name'];
        $cmd = $parmas['text'];
        $userId = $parmas['chat']['id'];

        $tel = new TelegramService;

        $tel->handleCammand($userId, $cmd, $firstName, $lastName);

        return response()->json([
            "message" => 'ok'
        ], 200);
    }
}
