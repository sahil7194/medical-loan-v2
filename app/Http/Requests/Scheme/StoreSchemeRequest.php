<?php

namespace App\Http\Requests\Scheme;

use Illuminate\Foundation\Http\FormRequest;

class StoreSchemeRequest extends FormRequest
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
            'title' => 'required|string',
            'summary' => 'required|string',
            'description' => 'required|string',
            'max_amount' => 'required',
            'min_amount' => 'required',
            'max_cibil' => 'required',
            'min_cibil' => 'required',
            'max_interest_rate' => 'required',
            'min_interest_rate' => 'required',
            'max_tenure' => 'required',
            'min_tenure' => 'required',
            'redirection_link' => 'required',
            'bank_id' => 'required'
        ];
    }
}
