<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Loan extends Model
{
    use HasFactory;
    protected $table = 'current_loan';

    protected $fillable = [
        'email',
        'books_id',
        'patron_email',
        'Copy_Number',
        'Loan_date',
        'due_date',
        'Renewal_count'
    ];
    public $timestamps = true;
}
