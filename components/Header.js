import React from 'react'
import Navbar from "./Navbar"

const Header = () => {
    return (
        <div className="banner">
            <Navbar/>
            <div className="banner__content">
              <div className="container">
                  <div className="banner__text">
                  <h3>Social Awareness</h3>
               <h1>THINK OF OTHERS</h1>
               <p>Social Awareness: The ability to take the perspective of and empathize with others, including those from diverse backgrounds and cultures.</p> 
                   <div className="banner_btn">
                      <a href="" className="btn btn-smart">
                          Register Your Account
                          </a> 
                   </div>
                  </div>
               
                  </div>  

            </div>

        </div>
        
    )
}

export default Header
