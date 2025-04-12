<?php

namespace App\Http\Controllers;

use App\Models\Applications;
use Illuminate\Http\Request;
use Inertia\Inertia;
class ApplicationsController extends Controller
{
    public function apply(Request $request)
    {
        dd($request);
    }

    public function crmIndex()
    {
        $applications = Applications::orderByDesc('updated_at')->with('agent','scheme.bank','applicant')->get();

        return Inertia::render('crm/application-history',['applications' => $applications]);
    }
}
