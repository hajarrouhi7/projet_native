<?php

namespace App\Models;
use App\Models\Reservation;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;
    public function reservation(){
        return $this->hasMany(Reservation::class);
    }
}
