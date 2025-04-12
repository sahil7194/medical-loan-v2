<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
    public function store(Request $request)
    {
        $params = $request->all();

        $params['slug'] = fake()->unique()->slug;

        $id = rand(1, 100);

        $params['image'] = 'https://picsum.photos/id/' . $id . '/370/240';

        $params['status'] = '2';

        $params['user_id'] = Auth::user()->id;

        Blog::create($params);

        return response()->redirectTo('/crm/blog/');
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
    public function update(Request $request, string $slug)
    {
        $user = Blog::where('slug', $slug)->first();

        $params = $request->all();

        if (empty($params['password'])) {
            unset($params['password']);
        }

        $user->update($params);

        return response()->redirectTo('/crm/blog/');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $slug)
    {
        $user = Blog::where('slug', $slug)->first();

        $user->delete();

        return response()->redirectTo('/crm/blog/');
    }
}
