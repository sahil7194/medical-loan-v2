<?php

namespace App\Http\Controllers;

use App\Models\Bank;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BankController extends Controller
{
    public function index()
    {
        $users = Bank::orderByDesc('created_at')->get();

        return Inertia::render('crm/bank/bank-list',["banks" => $users]);
    }
}
