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

    public function create()
    {
        return Inertia::render('crm/bank/bank-create');
    }

        /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $params = $request->all();

        $params['slug'] = fake()->unique()->slug;

        $id = rand(1, 100);

        $params['image'] = 'https://picsum.photos/id/' . $id . '/370/240';

        $params['vendor_code'] = fake()->unique()->lexify('??????');

        Bank::create($params);

        return response()->redirectTo('/crm/bank/');
    }

    public function edit(string $slug)
    {
        $bank = Bank::where('slug', $slug)->first();

        return Inertia::render('crm/bank/bank-edit', ['bank' => $bank]);
    }
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $slug)
    {
        $user = Bank::where('slug', $slug)->first();

        $params = $request->all();

        $user->update($params);

        return response()->redirectTo('/crm/bank/');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $slug)
    {
        $user = Bank::where('slug', $slug)->first();

        $user->delete();

        return response()->redirectTo('/crm/bank/');
    }

}
