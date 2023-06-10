import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from "react";
import { Routes ,  Route } from "react-router-dom";
import Home from './Sport/Home';
import Search from './Sport/Search';
import Client from './Sport/Client';
import View from './Sport/View';
import InfoView from './Sport/InfoView';
import BookDetails from './Sport/BookDetails';
import PaymentDetails from './Sport/Payment';
import CardBook from './Sport/CardBook';
import SignUp from './Sport/SignUp'
import SignIn from './Sport/SignIn';
import Admin from './Sport/Admin';
import Dashboard from './Sport/Dashboard';
import ListView from './Sport/ListViewed';
import AddView from './Sport/AddView';
import ModifyView from './Sport/ModifyView';
import Users from './Sport/ListUsers';
import ListBook from './Sport/ListBooked';
function App() {
  return (
    <div >
      <div>
      <Routes>
        <Route exact path='*' element={<Home/>}/>
        <Route path='/Search' element={<Search/>}/>
        <Route path='/View' element={<View/>}/>
        <Route path="/InfoView" element={<InfoView/>}/>
        <Route path='/BookDetails' element={<BookDetails/>}/>
        <Route path='/Payment' element={<PaymentDetails/>}/>
        <Route path='/CardBook' element={<CardBook/>}/>
        <Route path='/SignIn' element={<SignIn/>}/>
        <Route path='/Client' element={<Client/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/Admin' element={<Admin/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path='/ListViewed' element={<ListView/>}/>
        <Route path='/AddView' element={<AddView/>}/>
        <Route path='/ModifyView' element={<ModifyView/>}/>
        <Route path='/ListUsers' element={<Users/>}/>
        <Route path='/ListBooked' element={<ListBook/>}/>
      </Routes>     
      </div>
    </div>
  );
}

export default App;