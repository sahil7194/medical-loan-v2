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
        Schema::create('schemes', function (Blueprint $table) {
            $table->increments('id');
            $table->longText('summary');
            $table->string('slug')->unique();
            $table->string('title');
            $table->longText('description');
            $table->string('image')->nullable();
            $table->text("redirection_link");
            $table->string('min_interest_rate');
            $table->string('max_interest_rate');
            $table->string('min_cibil');
            $table->string('max_cibil');
            $table->string('min_tenure');
            $table->string('max_tenure');
            $table->string('min_amount');
            $table->string('max_amount');
            $table->string('status');
            $table->unsignedInteger('bank_id')->nullable();
            $table->foreign('bank_id')->references('id')->on('banks');
            $table->unsignedInteger('user_id')->nullable();
            $table->foreign('user_id')->references('id')->on('users');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('schemes');
    }
};
