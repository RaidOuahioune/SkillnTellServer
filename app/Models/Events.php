<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Events extends Model
{
    use HasFactory;

    protected $table="events";


    public $timestamps=true;
    protected $fillable = [
       'title',
       'description',
       'tags',
       'date',
       'location',
       'monitor_id',
       'responsible_id',
    ];


}
