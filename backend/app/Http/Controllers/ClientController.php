<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Client;

class ClientController extends Controller
{
     /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Client::get() ;

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
        $Client=new Client;
        $Client->FirstName= $request->FirstName;
        $Client->LastName= $request->LastName;
        $Client->NumberPhone= $request->NumberPhone;
        $Client->EmailAddress= $request->EmailAddress;
        $Client->Password= $request->Password;
        $Client->save();
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
        $data=Client::where('id',$id)
                    ->orWhere('FirstName',$id)
                    ->orWhere('LastName',$id)
                    ->orWhere('NumberPhone',$id)
                    ->orWhere('EmailAddress',$id)
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
    public function update(Request $request, Client $client)
    {
        $client->FirstName=$request->FirstName;
        $client->LastName=$request->LastName;
        $client->NumberPhone=$request->NumberPhone;
        $client->EmailAddress=$request->EmailAddress;
        $client->Password=$request->Password;
        $client->save();
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
        $client = Client::findOrFail($id);
        $client->delete();
        return response()->json([
            'message'=>'You want to delete this user'
        ]);
    }
    public function search(Request $request){
        $search = Client::where($request->all())->get();       
         return response()->json(['result'=> $search]); 
    }

}
