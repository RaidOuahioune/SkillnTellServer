<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BookRequest extends FormRequest
{
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
            'title' => 'required|string',
            'ISBN' => 'integer|required',
            'desc' => 'string',
            'Quantity' => 'integer|required',
            'lang_id' => 'integer',
            'location_id' => 'integer',
            'field_id' => 'integer',
            'vendor_id' => 'integer',
            'publish_date' => 'date',
            'edition' => 'string|required',
            //
        ];
    }
}
