<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function index()
    {
        $blogs = Blog::orderByDesc('created_at')->with('user')->get();

        return Inertia::render('Blogs/blogs', ['blogs' => $blogs]);
    }

    public function show($slug)
    {
        $blog = Blog::where('slug', $slug)->with('user')->first();

        return Inertia::render('Blogs/blog', ['blog' => $blog]);
    }
}
