<?php

namespace App\Http\Controllers;

use App\Models\Branch;
use Illuminate\Http\Request;

class BranchController extends Controller
{
    function all()
    {
        return   Branch::select('id as value', 'name as label')->get();
    }
}
