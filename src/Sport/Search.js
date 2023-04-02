import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavBar from './NavBar';
import Footer from './Footer';
import './Search.css';
import {useNavigate } from "react-router-dom";

const Search = () => {
  const route = useNavigate()
  const SearchForm = () => { route("/View")} 
  return (
    <div>
        <div className='home'>
        <NavBar/>
        <Form   onSubmit={SearchForm} className="row position-absolute start-50 translate-middle" style={{paddingTop:'72vh'}}>
          <div className="col-sm-3 mb-3 ">
            <select className="form-select form" id="specificSizeSelect">
              <option selected>City</option>
              <option value="1">Marrakech</option>
              <option value="2">Fes</option>
              <option value="3">Rabat</option>
            </select>
          </div>
          <div className="col-sm-3 mb-3">
            <select className="form-select form" id="specificSizeSelect">
              <option selected>Type</option>
              <option value="1">FootBall</option>
              <option value="2">Tenis</option>
              <option value="3">HandBall</option>
            </select>
          </div>
          <div className="col-sm-3 mb-3 " >
            <input type="date" className='form-control form' id="exampleCheck1"/>  
          </div>
          <div className="col-sm-3 mb-3">
            <Button type="submit" className="btn form-control">Submit</Button>  
          </div>
        </Form>
      </div>
      <Footer/>
    </div>
  )
}

export default Search