import React from 'react'
import "../Constants/Css/NavBar.css"
import { MdOutlinePerson } from "react-icons/md";

import logo from "../Constants/Images/carsonlinelogo.png"
import { IoIosPhonePortrait } from "react-icons/io";
import { IoReorderThree } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";



import { useState } from 'react';
export default function NavBar() {

  const [state,setstate] = useState(false);

  const [isNav,setNav] = useState(true);

  const handleClick =()=>{
    setstate(!state);
    setNav(!isNav);
  }

  return (
    <>
        <div id="nav_login">
           
            <div class="login_part">
           <MdOutlinePerson style={{"color":"white","font-size":"1.5vw"}} />
                <a href='/login' id="nav-links">Login</a>
            </div>
        </div>
        <div id="navbar">
        <div id="nav_logo">
            <img src={logo} alt='logo.png' ></img>
        </div>
        <div id="nav_callus">
            <IoIosPhonePortrait  style={{"color":"grey","font-size":"3vw"}} />
        <div>
           <span className='callus'>Call Us Today !</span>
      <br></br>
            <span className='phno' > +91 8445416675</span>
           </div>
        </div>
        <div id="nav_options">
    
    <nav id={isNav? "nav-bar-a" :"nav-a"}>
      <a href='/' id="nav-links">Home</a>
      <a href="/about" id="nav-links">About</a>
      <a href='/services' id="nav-links">Services</a>
      <a href='/contact' id="nav-links">Contact</a>
      <a href='http://172.16.151.244:8501' id="nav-links">Price Prediction</a>
    </nav>
    <div id="mobile">
    <span id="bar" onClick={handleClick}>
      {state ?(
        <IoMdClose style={{"color":"black","font-size":"2vw"}} />
        
      ):(
        <IoReorderThree style={{"color":"black","font-size":"2.5vw"}} />
        
      )}
    </span>
    </div>
        </div>
        </div>
    </>
  )
}
