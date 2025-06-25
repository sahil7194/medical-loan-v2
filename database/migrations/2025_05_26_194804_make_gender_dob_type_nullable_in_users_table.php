<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('date_of_birth')->nullable()->change();
            $table->string('gender')->nullable()->change();
            $table->string('type')->nullable()->change();
        });
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('date_of_birth')->nullable(false)->change();
            $table->string('gender')->nullable(false)->change();
            $table->string('type')->nullable(false)->change();
        });
    }
};
