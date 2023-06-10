<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\InfoTirranController;
use App\Http\Controllers\InfoTerrainController;
use App\Http\Controllers\PaymentDetailsController;
use App\Http\Controllers\ReservationController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
//'''''''''''''''''''''''''les Api client'''''''''''''''''''''''''''''//
Route::resource('client', ClientController::class);
Route::post('client/search',[ ClientController::class,'search']);

//'''''''''''''''''''''''''les Api InfoTirran'''''''''''''''''''''''''''''//

Route::resource('InfoTirran', InfoTirranController::class);
Route::resource('/InfoTerrain',InfoTerrainController::class);
Route::post('/SearchInfoTiran',[InfoTerrainController::class,"SearchInfoTiran"]);

//'''''''''''''''''''''''''les Api PaymentDetails'''''''''''''''''''''''''''''//
Route::resource('PaymentDetails', PaymentDetailsController::class);

//'''''''''''''''''''''''''les Api Reservation'''''''''''''''''''''''''''''//
Route::resource('Reservation', ReservationController::class);
