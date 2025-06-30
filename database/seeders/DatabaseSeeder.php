<?php

namespace Database\Seeders;

use App\Models\Address;
use App\Models\Applications;
use App\Models\Bank;
use App\Models\Blog;
use App\Models\Cibil;
use App\Models\City;
use App\Models\Scheme;
use App\Models\State;
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
        $states = State::factory(10)->create();

        foreach ($states as $state) {

            City::factory(20)->create(
                ['state_id' => $state->id]
            );
        }


        User::factory(10)->create();

        Address::factory(10)->create();

        User::factory()->createMany([
            //normal user
            [
                'name' => 'Test User',
                'email' => 'test@example.com',
                'type' => '0'
            ],
            //normal agent
            [
                'name' => 'Test Agent User',
                'email' => 'testone@example.com',
                'type' => '1'
            ],
            //normal crm user
            [
                'name' => 'Test Crm User',
                'email' => 'testtwo@example.com',
                'type' => '2'
            ],
        ]);

        Bank::factory(10)->create();

        Blog::factory(10)->create();

        Scheme::factory(10)->create();

        Cibil::factory(10)->create();

        Applications::factory(20)->create();
    }
}
