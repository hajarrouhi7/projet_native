<?php

namespace App\Models;
use App\Models\Reservation;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InfoTerrain extends Model
{
    use HasFactory;
    protected $primaryKey ='id';
    protected $fillable=[
        "img1",
        "img2",
        "img3",
        "title",
        "location",
        "type",
        "ville",
        "price",
        "surface",
        "description",
    ];
    public function reservation(){
        return $this->hasMany(Reservation::class);
    }
}
