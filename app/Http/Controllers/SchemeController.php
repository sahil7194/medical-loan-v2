<?php

namespace App\Http\Controllers;

use App\Http\Requests\Scheme\StoreSchemeRequest;
use App\Http\Requests\Scheme\UpdateSchemeRequest;
use App\Http\Resources\Scheme\SchemeInfoResource;
use App\Http\Resources\Scheme\SchemeListItemResource;
use App\Models\Bank;
use App\Models\Scheme;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;

class SchemeController extends Controller
{
    public function index()
    {
        $schemes = Scheme::orderByDesc('created_at')->with('user', 'bank')->paginate(4);


    return SchemeListItemResource::collection($schemes)
        ->additional([
            "message" => "scheme list",
            "success" => true
        ]);

    }

    public function show(Request $request, string $slug)
    {
        if ($request->vendor_code) {

            Cache::put('vendor_slug', $request->vendor_code);
        }

        $scheme = Scheme::where('slug', $slug)->with('user', 'bank')->first();

        if (!$scheme) {
            return response()->json([
                "message" => "scheme not found",
                "success" => false,
                "data" => null
            ]);
        }

        return response()->json([
            "message" => "scheme data",
            "success" => true,
            "data" => SchemeInfoResource::make($scheme)
        ]);
    }

    public function crmIndex()
    {
        $schemes = Scheme::orderByDesc('created_at')->with('user', 'bank')->get();

        return response()->json([
            "message" => "scheme data",
            "success" => true,
            "data" => $schemes
        ]);
    }

    public function crmShow(string $slug)
    {
        $scheme = Scheme::where('slug', $slug)->with('user')->first();

        return response()->json([
            "message" => "scheme data",
            "success" => true,
            "data" => $scheme
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function create(Request $request)
    {
        $banks = Bank::orderByDesc('created_at')->get(['id', 'name']);

        return Inertia::render('crm/schemes/scheme-create', ['banks' => $banks]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSchemeRequest $request)
    {
        $params = $request->validated();

        $params['slug'] = fake()->unique()->slug;

        $id = fake()->numberBetween(1, 1000);

        $params['image'] = 'https://picsum.photos/id/' . $id . '/370/240';

        $params['status'] = '1';

        $scheme = Scheme::create($params);

        return response()->json([
            "message" => "scheme data",
            "success" => true,
            "data" => SchemeInfoResource::make($scheme)
        ]);
    }

    public function edit(string $slug)
    {
        $scheme = Scheme::where('slug', $slug)->first();

        $banks = Bank::orderByDesc('created_at')->get(['id', 'name']);

        return Inertia::render('crm/schemes/scheme-edit', ['scheme' => $scheme, 'banks' => $banks]);
    }
    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSchemeRequest $request, string $slug)
    {
        $scheme = Scheme::where('slug', $slug)->first();

        $params = $request->validated();

        if (!$scheme) {
            return response()->json([
                "message" => "scheme not found",
                "success" => false,
                "data" => null
            ]);
        }

        $scheme->update($params);

        return response()->json([
            "message" => "scheme data",
            "success" => true,
            "data" => SchemeInfoResource::make($scheme)
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $slug)
    {
        $scheme = Scheme::where('slug', $slug)->first();

        if (!$scheme) {
            return response()->json([
                "message" => "scheme not found",
                "success" => false,
                "data" => null
            ]);
        }

        $scheme->delete();

        return response()->json([
            "message" => "scheme delete successfully",
            "success" => true,
            "data" => null
        ]);
    }
}
