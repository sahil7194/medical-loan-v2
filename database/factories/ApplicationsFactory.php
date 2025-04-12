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
        $bankName = strtoupper(substr($scheme->bank->name, 0, 3));
        $userId = User::inRandomOrder()->first()->id;
        $today = now()->format('Ymd');

        $applicationNumber = 'AP' . $today . '' . $bankName . '' . $userId;

        return [
            'application_id' => $applicationNumber,
            'status' => fake()->numberBetween(0, 3),
            'remarks' => fake()->text(),
            'scheme_id' => $scheme->id,
            'user_id' => $userId,
            'agent_id' => User::inRandomOrder()->first()->id,
        ];
    }
}
