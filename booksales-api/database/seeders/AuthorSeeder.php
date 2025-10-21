<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AuthorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
   public function run()
{
    DB::table('authors')->insert([
        ['name' => 'Andrea Hirata', 'email' => 'andrea@mail.com', 'bio' => 'Penulis novel Laskar Pelangi'],
        ['name' => 'Tere Liye', 'email' => 'tere@mail.com', 'bio' => 'Penulis novel best-seller Indonesia'],
        ['name' => 'Dee Lestari', 'email' => 'dee@mail.com', 'bio' => 'Penulis dan penyanyi Indonesia'],
        ['name' => 'Pramoedya Ananta Toer', 'email' => 'pram@mail.com', 'bio' => 'Sastrawan Indonesia legendaris'],
        ['name' => 'Ahmad Fuadi', 'email' => 'fuadi@mail.com', 'bio' => 'Penulis novel Negeri 5 Menara'],
    ]);
}
}
