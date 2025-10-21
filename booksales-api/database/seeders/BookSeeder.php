<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
   public function run()
{
    DB::table('books')->insert([
        ['title' => 'Laskar Pelangi', 'genre' => 'Drama', 'year' => 2005, 'author_id' => 1],
        ['title' => 'Hujan', 'genre' => 'Romansa', 'year' => 2016, 'author_id' => 2],
        ['title' => 'Supernova', 'genre' => 'Fiksi Ilmiah', 'year' => 2001, 'author_id' => 3],
        ['title' => 'Bumi Manusia', 'genre' => 'Sejarah', 'year' => 1980, 'author_id' => 4],
        ['title' => 'Negeri 5 Menara', 'genre' => 'Inspirasi', 'year' => 2009, 'author_id' => 5],
    ]);
}

}
