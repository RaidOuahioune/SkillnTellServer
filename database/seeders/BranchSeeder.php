<?php

namespace Database\Seeders;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as FakerFactory;
class BranchSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $faker = FakerFactory::create();

        $branches = ['Computer Science', 'Electrical Engineering', 'Mechanical Engineering', 'Civil Engineering', 'Chemical Engineering'];

        foreach ($branches as $branch) {
            DB::table('branches')->insert([
                'name' => $branch,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
