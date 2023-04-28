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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('username');
            $table->string('first_name');
            $table->string('last_name');
            $table->string('email')->unique();
            $table->string('password');
            // this last line will include 2 extra timestamp fields
            // the created_at
            // 2 updated_at
            $table->timestamps();
            $table->timestamp('email_verified_at')->nullable();
            $table->rememberToken();
            $table->string("profile_img")->nullable();
            $table->char("gender");
            $table->unsignedBigInteger("branch_id");
            $table->string("university");
            $table->unsignedBigInteger("year_id");
            $table->boolean("is_member");
            $table->boolean("is_admin");
            $table->unsignedBigInteger("role_id");

            $table->unsignedBigInteger("department_id");

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
