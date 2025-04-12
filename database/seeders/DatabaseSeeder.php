<?php

namespace Database\Seeders;

use App\Models\Applications;
use App\Models\Bank;
use App\Models\Blog;
use App\Models\Cibil;
use App\Models\Scheme;
use App\Models\User;
use Database\Factories\CibilFactory;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        Bank::factory(10)->create();

        Blog::factory(10)->create();

        Scheme::factory(10)->create();

        Cibil::factory(10)->create();

        Applications::factory(20)->create();
    }
}
