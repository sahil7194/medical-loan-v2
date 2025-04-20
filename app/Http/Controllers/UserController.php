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

        if ($user->type == 1) {

            return Inertia::render('agent/agent-profile', [
                'user' => $user
            ]);
        }

        if ($user->type == 2) {

            return Inertia::render('crm/crm-profile', [
                'user' => $user
            ]);
        }

        return Inertia::render('user/user-profile', [
            'user' => $user
        ]);
    }

    public function showUserProfileUpdatePage()
    {
        $user = User::where('id', Auth::user()->id)
            ->with('address', 'address.state', 'address.city')
            ->first();

        $states = State::orderBy('name')->get();

        $cities = City::orderBy('name')->get();

        if ($user->type == 1) {
            return Inertia::render('agent/agent-update-profile', [
                'user' => $user,
                'states' => $states,
                'cities' => $cities,
            ]);
        }

        if ($user->type == 2) {
            return Inertia::render('crm/crm-update-profile', [
                'user' => $user,
                'states' => $states,
                'cities' => $cities,
            ]);
        }

        return Inertia::render('user/user-update-profile', [
            'user' => $user,
            'states' => $states,
            'cities' => $cities,
        ]);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {

        $user = User::where('id', Auth::user()->id)->first();

        $params = $request->all();

        if (empty($params['password'])) {
            unset($params['password']);
        }

        $userParams =  [
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

        if ($user->type == 1) {
            return response()->redirectTo('/agent/profile');
        }

        if ($user->type == 2) {
            return response()->redirectTo('/crm/profile');
        }

        return response()->redirectTo('/user/profile');
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
