import React from 'react'
import '../Constants/Css/Services.css'
import newcar from '../Constants/Images/buynew.jpg';
import oldcar from '../Constants/Images/oldcar.jpg';
import oldser from '../Constants/Images/oldser.jpg';
import newser from '../Constants/Images/newser.jpg';
import sellold from '../Constants/Images/sellold.jpg';

export default function Services() {
    return (
    <>        
      <h2 id="servih3">Our Services</h2>
      <div id="mainservicesec">
      <div id="carsections1">
        <div id="serwith1">
          <div id="serwithsubstart">
            <img id="serimg" src={newcar} alt="" />
            <br></br>
            <a href="/hatchback" id="sermore">BUY NEW</a>
          </div>
        </div>
        <div id="serwith2">
          <div id="serwithsubend">
            <img id="serimg" src={oldcar} alt="" /><br></br>
            <a href='/hatchback' id="sermore">BUY OLD</a>
          </div>
        </div>
        <div id="serwith3">
          <div id="serwithsubstart">
            <img id="serimg" src={newser} alt="" /><br></br>
            <a href="/bookappoint" id="sermore">NEW CAR SERVICES</a>
          </div>
        </div>  
        <div id="serwith4">
          <div id="serwithsubend">
            <img id="serimg" src={oldser} alt="" /><br></br>
            <a href="/serform" id="sermore">OLD CAR SERVICES</a>
          </div>
        </div>
        <div id="serwith5">
          <div id="serwithsubstart">
            <img id="serimg" src={sellold} alt="" /><br></br>
            <a href='http://127.0.0.1:5000' id="sermore">SELL OLD</a>
          </div>
        </div>
      </div>
      </div>
      <br></br>
    </>
  );
}
