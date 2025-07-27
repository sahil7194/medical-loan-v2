<?php

use App\Http\Controllers\Webhook\TelegramController;
use Illuminate\Support\Facades\Route;

Route::prefix('webhooks')->group(function () {

    Route::post('telegram', [TelegramController::class, 'listenWebhook']);
});


