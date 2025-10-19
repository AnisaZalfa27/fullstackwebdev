<?php

namespace App\Models;

class Genre
{
    public static function all()
    {
        return [
            ['id' => 1, 'name' => 'Fiction'],
            ['id' => 2, 'name' => 'Mystery'],
            ['id' => 3, 'name' => 'Romance'],
            ['id' => 4, 'name' => 'Fantasy'],
            ['id' => 5, 'name' => 'Horror'],
        ];
    }
}
