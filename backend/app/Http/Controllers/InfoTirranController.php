<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\InfoTirran;

class InfoTirranController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return InfoTirran::get() ;
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
        $InfoTirran=new InfoTirran;
        $InfoTirran->Title= $request->Title;
        $InfoTirran->Desciption= $request->Desciption;
        $InfoTirran->Type= $request->Type;
        $InfoTirran->Surface= $request->Surface;
        $InfoTirran->price= $request->price;
        $InfoTirran->Location= $request->Location;
        $InfoTirran->save();
        return response()->json(['status'=> 'Success']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data=InfoTirran::where('id',$id)
        ->orWhere('Title',$id)
        ->orWhere('Desciption',$id)
        ->orWhere('Surface',$id)
        ->orWhere('price',$id)
        ->orWhere('Location',$id)
        ->get();
        return $data;
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
    public function update(Request $request,InfoTirran $InfoTirran)
    {
        $InfoTirran->Title= $request->Title;
        $InfoTirran->Desciption= $request->Desciption;
        $InfoTirran->Type= $request->Type;
        $InfoTirran->Surface= $request->Surface;
        $InfoTirran->price= $request->price;
        $InfoTirran->Location= $request->Location;
        $InfoTirran->save();
        return response()->json(['status'=> 'Success']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(InfoTirran $infoTirran)
    {
        $infoTirran->delete();
        return response()->json(['status'=> 'Success']); 
    }
}
