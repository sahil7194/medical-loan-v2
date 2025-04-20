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
        $states = State::orderBy('name')->get();

        $cities = City::orderBy('name')->get();

        return Inertia::render('Cibil/cibil-check', [
            'states' => $states,
            'cities' => $cities,
        ]);
    }

    public function checkCibil(Request $request)
    {

        $user = $this->createUser($request->all());

        $address = $this->createAddress($request->all(), $user);

        $cibil = $this->createCibil($request->all(), $user);

        return response()->redirectTo('cibil-result/' . $cibil->slug);
    }

    public function cibilResult(string $slug)
    {
        $cibil = Cibil::where('slug', $slug)->first();

        return Inertia::render('Cibil/cibil-result', [
            'cibil' => $cibil
        ]);
    }

    private function createUser(array $data): User
    {
        $userParams = [
            'slug'              => fake()->unique()->slug(2),
            'name'              => $data['full_name'],
            'email'             => $data['email'],
            'mobile'            => $data['mobile'],
            'email_verified_at' => now(),
            'password'          => null,
            'remember_token'    => Str::random(10),
            'type'         => '0',
            "date_of_birth"     => $data['date_of_birth'],
            "gender"            => $data['gender']
        ];

        return User::create($userParams);
    }

    private function createAddress(array $data, $user): Address
    {
        // need to update on front
        $city = City::where('state_id',$data['state_id'])->first();

        $addressParams = [
            'address'   => $data['address'],
            'pin_code'  => $data['pin_code'],
            'city_id'   => $city->id,
            'state_id'  => $data['state_id'],
            'user_id'   => $user->id
        ];

        return Address::create($addressParams);
    }

    private function createCibil(array $data, User $user): Cibil
    {
        $cibilParams = [
            'slug'   => fake()->slug(3),
            "score"   => fake()->numberBetween(700, 950),
            "vendor"  => fake()->randomElement(["a", "b"]),
            "user_id" => $user->id,
            "name"    => $data['full_name'],
            "email"   => $data['email'],
            "mobile"  => $data['mobile'],
            "pan_card" => $data['pan_card_number']
        ];

        return Cibil::create($cibilParams);
    }
}
