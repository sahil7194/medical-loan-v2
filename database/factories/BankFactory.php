<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Bank>
 */
class BankFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name'        => fake()->company,
            'details'     => fake()->paragraph(4),
            'vendor_code' => fake()->uuid(),
            'image'       => fake()->imageUrl(),
            'slug'        => fake()->unique()->slug(4)
        ];

    }
}
