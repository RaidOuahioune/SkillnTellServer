<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;
    protected $table = 'books';

    protected $fillable = [
        'title',
        'ISBN',
        'desc',
        'keywords',
        'Quantity',
        'lang_id',
        'location_id',
        'field_id',
        'vendor_id',
        'publish_date',
        'edition',
    ];
}
