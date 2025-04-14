<?php

namespace Database\Factories;

use App\Models\Scheme;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Applications>
 */
class ApplicationsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $scheme = Scheme::inRandomOrder()->first();
        $userId = User::inRandomOrder()->first()->id;

        return [
            'application_id' => generateApplicationNumber($scheme->bank->name, $userId),
            'status' => fake()->numberBetween(0, 3),
            'remarks' => fake()->text(),
            'scheme_id' => $scheme->id,
            'user_id' => $userId,
            'agent_id' => User::inRandomOrder()->first()->id,
        ];
    }
}
