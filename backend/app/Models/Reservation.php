<?php

namespace App\Models;
use App\Models\Client;
use App\Models\InfoTerrain;
use App\Models\PaymentDetails;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    use HasFactory;
    public function client(){
        return $this->belongsTo(Client::class);
    }
    public function infoTirran(){
        return $this->belongsTo(InfoTerrain::class);
    }
    public function paymentDetails(){
        return $this->hasOne(PaymentDetails::class);
    }
}

