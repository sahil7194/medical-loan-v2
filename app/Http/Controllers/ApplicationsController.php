<?php

namespace App\Http\Controllers;

use App\Models\Applications;
use App\Models\Scheme;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ApplicationsController extends Controller
{
    public function apply(Request $request)
    {
        $request->validate([
             'slug' => 'required|exists:schemes,slug'
        ]);

        $scheme = Scheme::where('slug', '=', $request->slug)->with('bank')->first();

        $userId = Auth::user()->id;

        $bankName = $scheme->bank?->name ?? 'Test';

        $applicationNumber =  generateApplicationNumber($bankName, $userId);

        $params =  [
            'application_id' => $applicationNumber,
            'status' => fake()->numberBetween(0, 3),
            'remarks' => fake()->text(),
            'scheme_id' => $scheme->id,
            'user_id' => $userId,
            'agent_id' => 1,
        ];

         $application = Applications::create($params);

        return response()->json([
            "message" => "applied successfully",
            "success" => true,
        ]);
    }

    public function crmIndex()
    {
        $applications = Applications::orderByDesc('updated_at')->with('agent', 'scheme.bank', 'applicant')->get();

        return Inertia::render('crm/application-history', ['applications' => $applications]);
    }

    public function userIndex()
    {
        $applications = Applications::where('user_id', Auth::user()->id)
            ->orderByDesc('updated_at')->with('agent', 'scheme.bank', 'applicant')->get();

        return response()->json( [
            "message" => "data found",
            "success" => true,
            'applications' => $applications
        ], 200);
    }

    public function agentIndex()
    {
        $applications = Applications::where('agent_id', Auth::user()->id)->orderByDesc('updated_at')->with('agent', 'scheme.bank', 'applicant')->get();

        return Inertia::render('agent/reference-history', ['applications' => $applications]);
    }
}
