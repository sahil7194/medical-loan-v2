<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;

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
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "name" => 'required|string',
            "type" => 'nullable',
            "password" => 'required|string',
            "gender" => 'nullable',
            "date_of_birth" => 'nullable',
            "mobile" => 'required|unique:users,mobile',
            "email" => 'required|email|unique:users,email',
        ];
    }
}
