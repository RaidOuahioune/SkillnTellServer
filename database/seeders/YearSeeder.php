<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class YearSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $years = [
            'First Year',
            'Second Year',
            'Third Year',
            'Fourth Year',
            'Fifth Year',

            // Add more years here
        ];

        foreach ($years as $year) {
            DB::table('years')->insert([
                'name' => $year,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

    }
}
