import React from 'react'
import NavBar from './NavBar'
//import Footer from './Footer'
import './Home.css';
function Home() {
  return (
    <div>
      <div className='container-fluid bg_home  ps-0  ' >
      <div className='row' >
              <div className='col-2' >
              < NavBar />
              </div>
              <div className='col-10 position-absolute top-50 start-50 translate-middle'style={{paddingTop:'.2vh'}}  >
                <div >
                <h2> SEARCH A PLACE TO PRACTICE SPORTS</h2>
                </div>
            
              </div>
      </div>
      </div>
    </div>
  
  )
}

export default Home