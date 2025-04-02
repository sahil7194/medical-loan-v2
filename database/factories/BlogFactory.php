<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Blog>
 */
class BlogFactory extends Factory
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
            'title'   => fake()->sentence(7),
            'content' => implode("\n\n", fake()->paragraphs(13)),
            'slug'    => fake()->unique()->slug(4),
            'image'   => $imageUrl,
            'status'  => fake()->numberBetween(0,2),
            'user_id' => $user->id
        ];
    }
}
