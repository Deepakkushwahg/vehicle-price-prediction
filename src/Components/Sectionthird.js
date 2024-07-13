import React from 'react'
import swift from '../Constants/Images/swift.png'
import ciaz from '../Constants/Images/ciaz.png'
import vitara from '../Constants/Images/viatar.png'
import car4 from '../Constants/Images/car4.png';
import car5 from '../Constants/Images/car5.png';
import '../Constants/Css/Sectionthird.css';
import bigline from '../Constants/Images/bigline.png';
export default function Sectionthird() {
  return (
        <>
        <div id="section2">
          <span id="mostsearch">The Most Searched Cars</span>
          <br></br>
          <hr id="hrline" />
          <div id="carsectionssecond">
              <div id="carwithprice">
                  <a id="link" href ="/hatchback" ><img id="carimg2second" src={swift} alt="" /></a>
               
                  <a id="link knowmore" href ="/hatchback">Hatch Back</a>
              </div>
              <div id="carwithprice">
                 <a  id="link" href='/sedan'> <img id="carimg2second" src={ciaz} alt="" /></a>
                  <a href='/sedan' id="knowmore">Sedan</a>
              </div>
              <div id="carwithprice">
                  <a  id="link" href="/suv"><img id="carimg2second" src={vitara} alt="" /></a>
                  <a href="/suv" id="knowmore">Suv</a>
              </div>
              <div id="carwithprice">
                  <a  id="link" href="/muv"><img id="carimg2second" src={car4} alt="" /></a>
                  <a href="/muv" id="knowmore">Muv</a>
              </div>
              <div id="carwithprice">
                  <a  id="link" href="/luxury"><img id="carimg2second" src={car5} alt="" /></a>
                  <a href="/luxury" id="knowmore">Luxury</a>
              </div>
          </div>
      </div>
      <br></br>
      <hr></hr>
      <img id="bigline" src={bigline} alt='bigline.png'></img>
      <hr></hr>
      <br></br>
    </>
  );
}