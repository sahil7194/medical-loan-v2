<?php

namespace App\Http\Controllers;

use App\Models\Scheme;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AgentController extends Controller
{
    //

    public function referSchemeList()
    {
        $user = User::find(Auth::user()->id);

        $schemes = Scheme::orderByDesc('created_at')->with('bank')->get();

        return Inertia::render('agent/agent-refer-scheme',[
            'schemes' => $schemes,
            'vendor_code' => $user->slug
        ]);
    }
}
