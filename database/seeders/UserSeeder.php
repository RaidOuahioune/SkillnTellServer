<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Factory::create();

        for ($i = 0; $i < 10; $i++) {
            $username = $faker->userName;
            $firstName = $faker->firstName;
            $lastName = $faker->lastName;
            $email = $faker->email;
            $password = bcrypt('password');
            $avatar = "https://i.pravatar.cc/150?u=" . $email;
            $gender = $faker->randomElement(['M', 'F']);
            $branchId = $faker->numberBetween(1, 5);
            $university = $faker->company;
            $yearId = $faker->numberBetween(1, 4);
            $isMember = $faker->boolean;
            $isAdmin = $faker->boolean;
            $roleId = $faker->numberBetween(1, 3);
            $departmentId = $faker->numberBetween(1, 3);

            DB::table('users')->insert([
                'username' => $username,
                'first_name' => $firstName,
                'last_name' => $lastName,
                'email' => $email,
                'password' => $password,
                'email_verified_at' => now(),
                'profile_img' => $avatar,
                'gender' => $gender,
                'branch_id' => $branchId,
                'university' => $university,
                'year_id' => $yearId,
                'is_member' => $isMember,
                'is_admin' => $isAdmin,
                'role_id' => $roleId,
                'department_id' => $departmentId,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
