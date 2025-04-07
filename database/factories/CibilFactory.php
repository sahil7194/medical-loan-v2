<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Cibil>
 */
class CibilFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $user = User::where('user_type' ,0)->inRandomOrder()->first();

        return [
            "score"   => fake()->numberBetween(700,950),
            "vendor"  => fake()->randomElement(["a","b"]),
            "user_id" => $user->id,
            "name"    => $user->id % 2 == 0 ? '': fake()->name(),
            "email"   => $user->id % 2 == 0 ? '': fake()->unique()->safeEmail(),
            "mobile"  => $user->id % 2 == 0 ? '': fake()->phoneNumber(),
            "pan_card" => fake()->unique()->word()
        ];
    }
}
