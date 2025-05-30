<?php

namespace App\Http\Controllers;

use App\Models\City;
use App\Models\State;
use App\Models\User;
use Inertia\Inertia;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::orderByDesc('created_at')->get();

        return Inertia::render('crm/user/user-list', ["users" => $users]);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function create(Request $request)
    {
        return Inertia::render('crm/user/user-create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $params = $request->all();

        $params['slug'] = fake()->unique()->slug;

        User::create($params);

        return response()->redirectTo('/crm/users');
    }

    public function edit(string $slug)
    {
        $user = User::where('slug', $slug)->first();

        return Inertia::render('crm/user/user-edit', ['user' => $user]);
    }

    public function showUserProfilePage()
    {
        $user = User::where('id', Auth::user()->id)
            ->with('address', 'address.state', 'address.city')
            ->first();


        return response()->json([
            "message" => "applied successfully",
            "success" => true,
            "data" => $user
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
         $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:users,email', // adjust table name
            'mobile' => 'required|unique:users,mobile',
            'gender' => 'required|in:male,female,other',
            'date_of_birth' => 'required|date|before:today',

            'address' => 'required|string|max:255',
            'city_id' => 'required|integer|exists:cities,id',
            'state_id' => 'required|integer|exists:states,id',
            'pin_code' => 'required|digits:6'
        ]);

        $user = User::where('id', Auth::user()->id)->first();

        $params = $request->all();

        if (empty($params['password'])) {
            unset($params['password']);
        }

        $userParams = [
            "name" => $request->name,
            "email" => $request->email,
            "mobile" => $request->mobile,
            "gender" => $request->gender,
            "date_of_birth" => $request->date_of_birth
        ];

        $addresParmas = [
            "address" => $request->address,
            "city_id" => $request->city_id,
            "state_id" => $request->state_id,
            "pin_code" => $request->pin_code,
        ];

        $user->update($userParams);

        $user->address()->update($addresParmas);

        $user->save();

        return response()->json([
            "message" => "user updated successfully",
            "success" => true,
            "data" => $user
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $slug)
    {
        $user = User::where('slug', $slug)->first();

        $user->delete();

        return response()->redirectTo('/crm/users');
    }
}
