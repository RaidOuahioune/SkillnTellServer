<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->foreign("branch_id")->references("id")->on("branches");
            $table->foreign("year_id")->references("id")->on("years");
            $table->foreign("role_id")->references("id")->on("roles");
            $table->foreign("department_id")->references("id")->on("departments");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            //
        });
    }
};
