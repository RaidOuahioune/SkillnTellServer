<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory;
use Illuminate\Support\Facades\DB;

class DepartmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */

    public function run()
    {
        $faker = Factory::create();
        $dep = ["Design", "Development", "External Relations", "Communication", "Logistics", "Events"];

        foreach ($dep as $n) {
            $name = $n;
            $headId = $faker->numberBetween(1, 10);

            DB::table('departments')->insert([
                'name' => $name,
                'head_id' => $headId,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
