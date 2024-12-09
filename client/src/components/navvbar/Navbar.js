import React, { useRef } from 'react'
import "./navbar.css"
import {Link, NavLink} from "react-router-dom"


const Navbar = ({scrollToAbout,scrollToContact,scrollToFAQ}) => {
  return (
    <>
    <div className="home-section">
    <header>
      <div className="left-nav">
      <img src="./logo.png" alt="logo" />
      </div>
      <div className="right-nav">
        <a onClick={scrollToAbout} >About</a>
        <a onClick={scrollToFAQ}>FAQ</a>
        <a onClick={scrollToContact}>Contact</a>
        <a href="#">Language</a>
       <NavLink to='/login'><button>Account</button></NavLink> 
      </div>
    </header>
    <div className="bg-image">
      <h1>Generate Certificate Online</h1>
      <img src="./banner.png" alt="" />
    </div>
    <div className="start-button">
      
      <Link to='/login'><button>START FOR FREE</button></Link>
    </div>
    </div>
    </>
  )
}

export default Navbar
