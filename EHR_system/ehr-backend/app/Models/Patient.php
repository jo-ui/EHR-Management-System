<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    use HasFactory;
    protected $table = 'patients';
    protected $fillable =[
        'patiend_id',
        'name',
        'email',
        'address',
        'phone',
        'sex',
        'birthdate',
        'age',
        'bloodgroup',
        'hospital_id',

    ];
}
