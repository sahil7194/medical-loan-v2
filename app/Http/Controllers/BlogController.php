<?php

namespace App\Http\Controllers;

use App\Http\Requests\Blog\StoreBlogRequest;
use App\Http\Requests\Blog\UpdateBlogRequest;
use App\Http\Resources\BlogListItemResource;
use App\Http\Resources\BlogResource;
use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function index()
    {
        $blogs = Blog::orderByDesc('created_at')->with('user')->get();

        // return Inertia::render('Blogs/blogs', ['blogs' => $blogs]);

        return response()->json([
            "message" => "blogs list",
            "success" => true,
            "data" => BlogListItemResource::collection($blogs)
        ]);
    }

    public function show($slug)
    {
        $blog = Blog::where('slug', $slug)->with('user')->first();

        return response()->json([
            "message" => "blog data",
            "success" => true,
            "data" => BlogResource::make($blog)
        ]);

        if (!$blog) {
            return response()->json([
                "message" => "blog not found",
                "success" => false,
                "data" => null
            ]);
        }
    }

    public function crmIndex()
    {
        $blogs = Blog::orderByDesc('created_at')->with('user')->get();

        return Inertia::render('crm/blog/blog-list', ['blogs' => $blogs]);
    }

    public function create()
    {
        return Inertia::render('crm/blog/blog-create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBlogRequest $request)
    {
        $params = $request->validated();

        $params['slug'] = fake()->unique()->slug;

        $id = rand(1, 100);

        $params['image'] = 'https://picsum.photos/id/' . $id . '/370/240';

        $params['status'] = '2';

        // TODO: need to fix  with auth user
        $params['user_id'] = Auth::guard('api')->user()?->id ?? 1;


        $blog =    Blog::create($params);

        return response()->json([
            "message" => "blog created successfully",
            "success" => true,
            "data" => BlogResource::make($blog)
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function crmShow(string $slug)
    {
        $blog = Blog::where('slug', $slug)->with('user')->first();

        return Inertia::render('crm/blog/blog-show', ['blog' => $blog]);
    }

    public function edit(string $slug)
    {
        $blog = Blog::where('slug', $slug)->first();

        return Inertia::render('crm/blog/blog-edit', ['blog' => $blog]);
    }
    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBlogRequest $request, string $slug)
    {
        $blog = Blog::where('slug', $slug)->first();

        if (!$blog) {
            return response()->json([
                "message" => "blog not found",
                "success" => false,
                "data" => null
            ]);
        }

        $params = $request->validated();

        $blog->update($params);

        return response()->json([
            "message" => "blog update successfully",
            "success" => true,
            "data" => BlogResource::make($blog)
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $slug)
    {
        $blog = Blog::where('slug', $slug)->first();

        if (!$blog) {
            return response()->json([
                "message" => "blog not found",
                "success" => false,
                "data" => null
            ]);
        }

        $blog->delete();

        return response()->json([
            "message" => "blog deleted successfully",
            "success" => true,
            "data" => null
        ]);
    }
}
