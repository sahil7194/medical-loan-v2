<?php

namespace App\Http\Controllers;

use App\Models\Bank;
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
        $schemes = Scheme::orderByDesc('created_at')->with('user','bank')->get();

        return Inertia::render('crm/schemes/scheme-list', ['schemes' => $schemes]);
    }

    public function crmShow(string $slug)
    {
        $scheme = Scheme::where('slug', $slug)->with('user')->first();

        return Inertia::render('crm/schemes/scheme-show', ['scheme' => $scheme]);

    }

     /**
     * Store a newly created resource in storage.
     */
    public function create(Request $request)
    {
        $banks = Bank::orderByDesc('created_at')->get(['id','name']);

        return Inertia::render('crm/schemes/scheme-create',['banks' => $banks]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $params = $request->all();

        $params['slug'] = fake()->unique()->slug;

        $id = fake()->numberBetween(1,1000);

        $params['image'] = 'https://picsum.photos/id/'.$id.'/370/240';

        $params['status'] ='1';

        Scheme::create($params);

        return response()->redirectTo('/crm/schemes');
    }

    public function edit(string $slug)
    {
        $scheme = Scheme::where('slug', $slug)->first();

        $banks = Bank::orderByDesc('created_at')->get(['id','name']);

        return Inertia::render('crm/schemes/scheme-edit', ['scheme' => $scheme , 'banks' => $banks]);
    }
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $slug)
    {
        $user = Scheme::where('slug', $slug)->first();

        $params = $request->all();

        if (empty($params['password'])) {
            unset($params['password']);
        }

        $user->update($params);

        return response()->redirectTo('/crm/schemes');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $slug)
    {
        $user = Scheme::where('slug', $slug)->first();

        $user->delete();

        return response()->redirectTo('/crm/schemes');
    }
}
