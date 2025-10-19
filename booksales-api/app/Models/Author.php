<?php

namespace App\Models;

class Author
{
    public static function all()
    {
        return [
            ['id' => 1, 'name' => 'J.K. Rowling'],
            ['id' => 2, 'name' => 'Agatha Christie'],
            ['id' => 3, 'name' => 'Stephen King'],
            ['id' => 4, 'name' => 'Jane Austen'],
            ['id' => 5, 'name' => 'George R.R. Martin'],
        ];
    }
}
