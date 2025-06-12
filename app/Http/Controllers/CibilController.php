<?php

namespace App\Http\Controllers;

use App\Http\Requests\CibilCheck\CibilCheckEmailSendOtpRequest;
use App\Http\Requests\CibilCheck\CibilCheckMobileSendOtpRequest;
use App\Http\Requests\CibilCheck\CibilCheckStoreAddressRequest;
use App\Http\Requests\CibilCheck\CibilCheckUserRequest;
use App\Http\Resources\UserResource;
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

         return response()->json([
            "success" => true,
            "message" => "data found",
            "data" => $logs
        ], 200);
    }

    public function checkCibil(Request $request)
    {
        $request->validate([
            'slug' => 'required|exists:users,slug'
        ]);

        $user = User::whereSlug($request->slug)->first();

        $cibil = $this->createCibil($request->all(), $user);

        return response()->json([
            "success" => true,
            "message" => "data found successfully",
            "cibil" => $cibil
        ]);
    }

    public function cibilResult(string $slug)
    {
        $cibil = Cibil::where('slug', $slug)->first();

        return Inertia::render('Cibil/cibil-result', [
            'cibil' => $cibil
        ]);
    }

    private function createCibil(array $data, User $user): Cibil
    {
        $cibilParams = [
            'slug'   => fake()->slug(3),
            "score"   => fake()->numberBetween(700, 950),
            "vendor"  => fake()->randomElement(["a", "b"]),
            "user_id" => $user->id,
            "name"    => $user->name,
            "email"   => $user->email,
            "mobile"  => $user->mobile,
            "pan_card" => $user->pan
        ];

        return Cibil::create($cibilParams);
    }

    public function saveUserInfo(CibilCheckUserRequest $request)
    {
        $params = $request->validated();

        $params['name'] = $request['full_name'];
        $params['email'] = rand(11111,99999);
        $params['mobile'] = rand(11111,99999);
        $params['pan'] = $request['pan_card_number'];
        $params['slug']  = fake()->unique()->slug(2);
        $params['type']  = '0';

        $user = User::create($params);

        return response()->json([
            "message" => "user saved",
            "success" => true,
            "data" => UserResource::make($user)
        ]);
    }

    public function saveAddressInfo(CibilCheckStoreAddressRequest $request,string $slug)
    {
        $user = User::where('slug', $slug)->with(
            'address',
            // 'address.state',
            'address.city.state'
            )->first();

        if (!$user) {
            return response()->json([
                "message" => "user not found",
                "success" => false,
                "data" => null
            ]);
        }


        $user->address()->create($request->validated());

        $user->save();

        return response()->json([
            "message" => "address saved success fully",
            "success" => true,
            "data" => [
                "user" => $user,
            ]
        ]);
    }
}
