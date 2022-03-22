<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Patient;
use Illuminate\Http\Request;


class PatientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $patient = new Patient;
        $patient->patient_id = $request->input('patient_id');
        $patient->name = $request->input('name');
        $patient->email = $request->input('email');
        $patient->address = $request->input('address');
        $patient->phone = $request->input('phone');
        $patient->sex = $request->input('sex');
        $patient->birthdate = $request->input('birthdate');
        $patient->age = $request->input('age');
        $patient->bloodgroup = $request->input('bloodgroup');
        $patient->hospital_id = $request->input('patient_id');
        $patient->save();

        return response()->json([
            'status'=> 200,
            'message' => 'message added successfully',
        ]);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        $patient = Patient::all();
        return response()->json([
            // 'status'=> 200,
            // 'message' => 'message added successfully',
            $patient
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
