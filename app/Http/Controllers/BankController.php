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
        $banks = Bank::orderByDesc('created_at')->get();

         return response()->json([
            "success" => true,
            "message" => "data found",
            "data" => $banks
        ], 200);
    }

    public function show($slug)
    {
        $banks = Bank::whereSlug($slug)->first();

         return response()->json([
            "success" => true,
            "message" => "data found",
            "data" => $banks
        ], 200);
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
        $request->validate([
            'name' => 'required|string'
        ]);

        $params = $request->all();

        $params['slug'] = fake()->unique()->slug;

        $id = rand(1, 100);

        $params['image'] = 'https://picsum.photos/id/' . $id . '/370/240';

        $params['vendor_code'] = fake()->unique()->lexify('??????');

        $bank = Bank::create($params);

         return response()->json([
            "success" => true,
            "message" => "bank create successfully",
            "data" => $bank
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $slug)
    {
        $banks = Bank::where('slug', $slug)->first();

        $params = $request->all();

        $banks->update($params);

         return response()->json([
            "success" => true,
            "message" => "data found",
            "data" => $banks
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $slug)
    {
        $user = Bank::where('slug', $slug)->first();

        $user->delete();

         return response()->json([
            "success" => true,
            "message" => "bank deleted successfully",
        ], 200);
    }

}
