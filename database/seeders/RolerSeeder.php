<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RolerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $roles = [
            'Designer',
            'Developer',
            'Video Editor',
            'Communication Manager',
            // Add more roles here
        ];

        foreach ($roles as $role) {
            DB::table('roles')->insert([
                'name' => $role,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
