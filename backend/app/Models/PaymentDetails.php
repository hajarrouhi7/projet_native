<?php

namespace App\Models;
use App\Models\Reservation;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaymentDetails extends Model
{
    use HasFactory;
    public function reservation(){
        return $this->belongsTo(Reservation::class);
    }
}
