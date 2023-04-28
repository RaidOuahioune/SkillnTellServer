<?php
namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LoanRequest extends FormRequest{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'books_id' => 'required|integer',
            'patron_email' => 'string|required',
            'Copy_Number' => 'integer',
            'Loan_date' => 'date|required',
            'due_date' => 'date|required',
            'Renewal_count' => 'integer',
            //
        ];
    }
}
?>
