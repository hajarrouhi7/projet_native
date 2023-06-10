<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Reservation;

class ReservationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Reservation::get() ;
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
        $Reservation=new Reservation;
        $Reservation->FirstName= $request->FirstName;
        $Reservation->LastName= $request->LastName;
        $Reservation->Email= $request->Email;
        $Reservation->Number= $request->Number;
        $Reservation->DateBook= $request->DateBook;
        $Reservation->BookTime= $request->BookTime;
        $Reservation->Duration= $request->Duration;
        $Reservation->Price= $request->Price;
        $Reservation->infoTerrain_id= $request->infoTerrain_id;
        $Reservation->client_id= $request->client_id;

        $Reservation->save();
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
        $data=Reservation::where('id',$id)
        ->orWhere('FirstName',$id)
        ->orWhere('LastName',$id)
        ->orWhere('Email',$id)
        ->orWhere('DateBook',$id)
        ->orWhere('BookTime',$id)
        ->orWhere('Duration',$id)
        ->orWhere('Price',$id)
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
    public function update(Request $request, Reservation $Reservation)
    {
        $Reservation->FirstName= $request->FirstName;
        $Reservation->LastName= $request->LastName;
        $Reservation->Email= $request->Email;
        $Reservation->Number= $request->Number;
        $Reservation->DateBook= $request->DateBook;
        $Reservation->BookTime= $request->BookTime;
        $Reservation->Duration= $request->Duration;
        $Reservation->Price= $request->Price;
        $Reservation->save();
        return response()->json(['status'=> 'Success']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(string $id)
    {
        $reservation = Reservation::findOrFail($id);
        $reservation->delete();
        return response()->json([
            'message'=>'You want to delete this booking'
        ]);
    }
    }

