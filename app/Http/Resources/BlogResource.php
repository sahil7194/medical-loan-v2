<?php

namespace App\Http\Resources;

use App\Http\Resources\User\UserDropDownResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BlogResource extends JsonResource
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
            "slug" => $this->slug,
            "title" => $this->title,
            "image" => $this->image,
            "user" =>  UserDropDownResource::make($this->user),
            "content" => $this->content,
            "created_at" => $this->created_at
        ];
    }
}
