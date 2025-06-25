<?php

namespace Database\Factories;

use App\Models\City;
use App\Models\State;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Address>
 */
class AddressFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'address'   => fake()->address(),
            'pin_code'  => fake()->postcode(),
            'city_id'   => City::inRandomOrder()->first()->id,
            'state_id'  => State::inRandomOrder()->first()->id,
            'user_id'   => User::inRandomOrder()->first()->id,
        ];
    }
}
