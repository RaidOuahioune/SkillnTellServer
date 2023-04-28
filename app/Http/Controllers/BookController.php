<?php

namespace App\Http\Controllers;

use App\Http\Requests\BookRequest;
use App\Http\Requests\LoanRequest;
use App\Models\Book;
use App\Models\Loan;
use Illuminate\Http\Request;


class BookController extends Controller
{

    function AddBook(BookRequest $request)
    {
        $data = $request->validated();
        $book = Book::create($data);
        if ($book) {
            return response("Book Created Succesfully", 200);
        } else {
            return response("Error creating the book ", 400);
        }
    }

    function DeleteBook($id)
    {
        $book = Book::findOrFail($id);
        $book->delete();
        return response("Book Successfully deleted", 200);
    }

    function LoanBook(LoanRequest $request,$id){
        $data = $request->validated();
        $loan = Loan::create($data);
        if($loan){
            return response("Loan Created Succesfully", 200);
    } else {
        return response("Error creating the loan ", 400);
    }
    }



}
