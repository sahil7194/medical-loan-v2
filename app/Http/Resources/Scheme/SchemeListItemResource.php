<?php

namespace App\Http\Resources\Scheme;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SchemeListItemResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id" => $this->id,
            "title" => $this->title,
            "created_at" => $this->created_at,
            "slug" => $this->slug,
            "image" => $this->image
        ];
    }
}
