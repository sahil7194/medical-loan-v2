<?php

namespace App\Http\Controllers;

use App\Models\Address;
use App\Models\Cibil;
use App\Models\City;
use App\Models\State;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

class CibilController extends Controller
{

    public function cibilLog()
    {
        $logs = Cibil::orderByDesc('created_at')->get();

        return Inertia::render('crm/cibil-log', [
            'logs' => $logs,
        ]);
    }

    public function checkCibilView()
    {
        $states = State::all();

        $cities = City::all();

        return Inertia::render('Cibil/cibil-check', [
            'states' => $states,
            'cities' => $cities,
        ]);
    }

    public function checkCibil(Request $request)
    {
        $addressParams = [
            'address'   => $request->address,
            'pin_code'  => $request->pin_code,
            // 'city_id'      => $request->state_id,
            // 'state_id'     => $request->city_id,
            'city_id'      => 1,
            'state_id'     => 1,
        ];

        $address = Address::create($addressParams);

        $userParams = [
            'slug'              => fake()->unique()->slug(2),
            'name'              => $request->full_name,
            'email'             => $request->email,
            'mobile'            => $request->mobile,
            'email_verified_at' => now(),
            'password'          => null,
            'remember_token'    => Str::random(10),
            'user_type'         => '0',
            'address_id'        => $address->id,
            "date_of_birth"     => $request->date_of_birth,
            "gender"            => $request->gender
        ];

        $user = User::create($userParams);

        $cibilParams = [
            'slug'   => fake()->slug(3),
            "score"   => fake()->numberBetween(700, 950),
            "vendor"  => fake()->randomElement(["a", "b"]),
            "user_id" => $user->id,
            "name"    => $request->full_name,
            "email"   => $request->email,
            "mobile"  => $request->mobile,
            "pan_card" => $request->pan_card_number
        ];

        $cibil = Cibil::create($cibilParams);

        return Inertia::render('Cibil/cibil-result', [
            'cibil' => $cibil
        ]);

    }
}
