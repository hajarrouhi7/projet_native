import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavBar from './NavBar';
import Footer from './Footer';
import './Search.css';
import {useNavigate } from "react-router-dom";
import axios from "axios";

const Search = () => {
  const [city,setCity] = useState("")
  const [type,setType] = useState("")
  const route = useNavigate()
  

  const handlSubmit = () =>{
    if ( city !="" && type !=""  ){
      const obj = {
        "ville":city,
        "type" : type
      } 
       axios.post("http://127.0.0.1:8000/api/SearchInfoTiran",obj)
          .then(({data})=>{
            if(data.InfoTerain.length > 0 ){
            sessionStorage.setItem("Infos",JSON.stringify(data.InfoTerain))
              route("/View")
            }else{
              alert("NotFound")
            }
          })
   
    }else{
      alert("Remplire tous  les champs")
    }
    

  }

  return (

    <div>
        <div className='home'>
        <NavBar/>
        <div   className="row position-absolute start-50 translate-middle" style={{paddingTop:'72vh'}}>
          <div className="col-sm-3 mb-3 ">
            <select className="form-select form" onChange={(e)=>{setCity(e.target.value)}} >
              <option selected>City</option>
              <option value="Marrakech">Marrakech</option>
              <option value="Fes">Fes</option>
              <option value="Agadir">Agadir</option>
              <option value="Tanger">Tanger</option>
              <option value="Meknes">Meknes</option>
              <option value="Rabat">Rabat</option>
            </select>
          </div>
          <div className="col-sm-3 mb-3">
            <select className="form-select form" id="specificSizeSelect"   onChange={(e)=>{setType(e.target.value)}} >
              <option selected>Type</option>
              <option value="FootBall">FootBall</option>
              <option value="Tenis">Tenis</option>
              <option value="HandBall">HandBall</option>
            </select>
          </div>
          <div className="col-sm-3 mb-3 " >
            <input type="date" className='form-control form' id="exampleCheck1"/>  
          </div>
          <div className="col-sm-3 mb-3">
            <Button type="submit" className="btn form-control"  onClick={handlSubmit}  >Submit</Button>  
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Search