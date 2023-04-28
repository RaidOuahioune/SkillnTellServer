<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class SignupRequest extends FormRequest
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
        // here we define the rules that should be applied to the input
        /* This will help us to get proper error messages */
        return [

            'name' => 'required|string|max:50',
            'email' => 'required|email|unique:users,email,except,id',
            'password' => ['required', 'confirmed', Password::min(8)->letters()->symbols()]
        ];
    }
}
