<?php

namespace App\Http\Controllers;

use App\Models\Scheme;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;

class SchemeController extends Controller
{
    public function index()
    {
        $schemes = Scheme::orderByDesc('created_at')->with('user')->get();

        return Inertia::render('schemes/schemes', ['schemes' => $schemes]);
    }

    public function show(Request $request, string $slug)
    {
        if ($request->v_slug) {

            Cache::put('vendor_slug', $request->v_slug);

        }

        $scheme = Scheme::where('slug', $slug)->with('user')->first();

        return Inertia::render('schemes/scheme', ['scheme' => $scheme]);
    }

    public function crmIndex()
    {
        $schemes = Scheme::orderByDesc('created_at')->with('user')->get();

        return Inertia::render('crm/schemes/scheme-list', ['schemes' => $schemes]);
    }
}
