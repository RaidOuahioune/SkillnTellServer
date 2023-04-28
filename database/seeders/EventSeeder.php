<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory;
use Illuminate\Support\Facades\DB;

class EventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
         //
         $faker = Factory::create();

         for ($i = 0; $i < 5; $i++) {
             $title = $faker->sentence;
             $description = $faker->paragraph;
             $tags = $faker->words(3, true);
             $date = $faker->date();
             $location = $faker->address;
             $monitorId = $faker->numberBetween(1, 10);
             $responsibleId = $faker->numberBetween(1, 10);

             DB::table('events')->insert([
                 'title' => $title,
                 'description' => $description,
                 'tages' => $tags,
                 'date' => $date,
                 'location' => $location,
                 'monitor_id' => $monitorId,
                 'responsible_id' => $responsibleId,
                 'created_at' => now(),
                 'updated_at' => now(),
             ]);
         }
        //
    }
}
