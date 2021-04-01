import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__text">
               <div className="logo"><img src="/img/logo.JPG" alt="logo"/></div> 
               <ul className="navbar__ul">
                    <li><a href="">Home</a></li>
                    <li><a href="">Issue</a></li>
                    <li><a href="">Advertise</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Login/Logout</a></li>
               </ul>
            </div>
        </nav>
    )
}

export default Navbar
