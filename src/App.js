import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from "react";
import { Routes ,  Route } from "react-router-dom";
import Home from './Sport/Home';
import SignUp from './Sport/SignUp';
import SignIn from './Sport/SignIn';
function App() {
  return (
    <div >
      <div>
      <Routes>
        <Route exact path='*' element={<Home/>}/>
        <Route path='/SignIn' element={<SignIn/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
      </Routes>     
      </div>
    </div>
  );
}

export default App;