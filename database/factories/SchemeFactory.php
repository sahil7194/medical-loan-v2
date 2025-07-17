<?php

namespace Database\Factories;

use App\Models\Bank;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Scheme>
 */
class SchemeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $user = User::inRandomOrder()->first();

        $imageUrl = 'https://picsum.photos/id/'.$user->id.'/370/240';

        return [
            'slug'              =>  Str::random(4),
            'title'             => fake()->sentence,
            'description'       => fake()->paragraphs(10, true),
            'summary' => fake()->sentence(3),
            'image'             => $imageUrl,
            'redirection_link'  => fake()->url,
            'min_interest_rate' => fake()->randomFloat(2, 5, 15),
            'max_interest_rate' => fake()->randomFloat(2, 15, 30),
            'min_cibil'         => fake()->numberBetween(300, 700),
            'max_cibil'         => fake()->numberBetween(700, 900),
            'bank_id'           => Bank::inRandomOrder()->first()->id,
            'user_id'           => $user->id,
            'min_tenure'        => fake()->numberBetween(300, 700),
            'max_tenure'        => fake()->numberBetween(300, 700),
            'min_amount'        => fake()->numberBetween(300, 700),
            'max_amount'        => fake()->numberBetween(300, 700),
            'status'            => fake()->numberBetween(0,3)
        ];
    }
}
