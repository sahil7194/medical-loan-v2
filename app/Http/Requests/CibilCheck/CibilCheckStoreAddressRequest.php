<?php

namespace App\Http\Requests\CibilCheck;

use Illuminate\Foundation\Http\FormRequest;

class CibilCheckStoreAddressRequest extends FormRequest
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
            'address'   => 'required|string',
            'pin_code'  => 'required|string',
            'city_id'   => 'required',
            'state_id'  => 'required',
        ];
    }
}
