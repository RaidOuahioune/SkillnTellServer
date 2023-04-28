<?php

namespace App\Http\Controllers;

use App\Http\Requests\PatronRequest;
use App\Models\Patron;
use Illuminate\Http\Request;


class PatronController extends Controller
{


    function AddPatron(PatronRequest $request)
    {
        $data = $request->validated();
        $patron = Patron::create($data);
        if ($patron) {
            return response("Patron added Succesfully", 200);
        } else {
            return response("Error adding the patron", 400);
        }
    }

    function DeletePatron($id)
    {
        $patron = Patron::findOrFail($id);
        $patron->delete();
        return response("Patron Successfully deleted", 200);
    }
    function getAllPatrons(PatronRequest $request){
        return \App\Models\Patron::findAll();
    }

}
