<?php

namespace App\Http\Controllers;

use App\Models\Applications;
use App\Models\Scheme;
use App\Models\User;
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

        $agent = User::where('slug',$request->agent)->where('type', 1)->first(['id']);

        $params =  [
            'application_id' => $applicationNumber,
            'status' => fake()->numberBetween(0, 3),
            'remarks' => fake()->text(),
            'scheme_id' => $scheme->id,
            'user_id' => $userId,
            'agent_id' => $agent->id ?? null,
        ];

         $application = Applications::create($params);

        return response()->json([
            "message" => "applied successfully",
            "success" => true,
            "application" => $application
        ]);
    }

    public function crmIndex()
    {
        $applications = Applications::orderByDesc('updated_at')->with('agent', 'scheme.bank', 'applicant')->get();

         return response()->json([
            "success" => true,
            "message" => "data found",
            "data" => $applications
        ], 200);
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

        return response()->json( [
            "message" => "data found",
            "success" => true,
            'applications' => $applications
        ], 200);
    }
}
