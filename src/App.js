import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from "react";
import { Routes ,  Route } from "react-router-dom";
import Home from './Sport/Home';
import Search from './Sport/Search';
import SignUp from './Sport/SignUp';
import SignIn from './Sport/SignIn';
import Admin from './Sport/Admin';
import Users from './Sport/ListUsers';
import ListBook from './Sport/ListBooked';
function App() {
  return (
    <div >
      <div>
      <Routes>
        <Route exact path='*' element={<Home/>}/>
        <Route path='/Search' element={<Search/>}/>
        <Route path='/SignIn' element={<SignIn/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/Admin' element={<Admin/>}/>
        <Route path='/ListUsers' element={<Users/>}/>
        <Route path='/ListBooked' element={<ListBook/>}/>
      </Routes>     
      </div>
    </div>
  );
}

export default App;