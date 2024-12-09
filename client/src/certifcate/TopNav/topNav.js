import React from 'react'
// import "../eventCreation/event.css"
import "./topNav.css"
import { NavLink } from 'react-router-dom'

const TopNav = () => {
  return (
    <>
      <header className="header">
       <div className="logo">
          <div className="logo-icon">
            <NavLink to="/"> <img src="./logo.png" alt="" /></NavLink>
            </div>
         </div>
        <div className="account">ACCOUNT</div>
     </header> 
    </>
  )
}

export default TopNav

