<?php


namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as FakerFactory;

class TutorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = FakerFactory::create();

        for ($i = 0; $i < 5; $i++) {
            $firstName = $faker->firstName;
            $lastName = $faker->lastName;
            $title = $faker->jobTitle;
            $description = $faker->paragraph;
            $profileImg = $faker->imageUrl(640, 480, 'people', true, 'Faker');

            DB::table('tutors')->insert([
                'first_name' => $firstName,
                'last_name' => $lastName,
                'title' => $title,
                'description' => $description,
                'profile_img' => $profileImg,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
