<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PaymentDetails;

class PaymentDetailsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return PaymentDetails::get() ;
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
        $PaymentDetails=new PaymentDetails;
        $PaymentDetails->NameCard= $request->NameCard;
        $PaymentDetails->CardNumber= $request->CardNumber;
        $PaymentDetails->ExpiryDate= $request->ExpiryDate;
        $PaymentDetails->CVV= $request->CVV;
        $PaymentDetails->reservation_id= $request->reservation_id;
        $PaymentDetails->save();
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
        $data=PaymentDetails::where('id',$id)
        ->orWhere('NameCard',$id)
        ->orWhere('CardNumber',$id)
        ->orWhere('ExpiryDate',$id)
        ->orWhere('CVV',$id)
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
    public function update(Request $request, PaymentDetails $paymentDetails)
    {
        $paymentDetails->NameCard= $request->NameCard;
        $paymentDetails->CardNumber= $request->CardNumber;
        $paymentDetails->ExpiryDate= $request->ExpiryDate;
        $paymentDetails->CVV= $request->CVV;
        $paymentDetails->save();
        return response()->json(['status'=> 'Success']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(PaymentDetails $paymentDetails)
    {
        $paymentDetails->delete();
       return response()->json(['status'=> 'Success']); 
    }
}
