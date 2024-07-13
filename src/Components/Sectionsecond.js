import React from "react";

import "../Constants/Css/Sectionsecond.css";

import { BiSolidOffer } from "react-icons/bi";
import { ImEnlarge } from "react-icons/im";
import { MdOutlineMultilineChart } from "react-icons/md";

export default function Sectionsecond() {
  return (
    <>
      <div id="second_main">
        <div id="welcome_cars">
          <span className="helps">HELPS YOU TO FIND YOUR NEXT CAR EASILY</span>
          <br></br>
          <span className="wel_to">
            Welcome to <span className="ca_on">CARS ONLINE</span>
          </span>
        </div>
        <br></br>
        <br></br>
        <div id="part_3">
          <div className="parts_3_1">
            <BiSolidOffer size="2vw" color="red" />
            <br></br>
            <br></br>
            <span>
              WE OFFERS LOWER <br></br>CARS PRICES
            </span>
            <p>
              Fruithful seed female multiply lights blessed <br></br> above
              bearing in so two every together <br></br> forth so can't seas
              darkness years rule.
            </p>
          </div>

          <div className="parts_3_2">
            <ImEnlarge size="2vw" color="red" />
            <br></br>
            <br></br>
            <span>
              LARGEST CARS <br></br>DEALERSHIP
            </span>
            <p>
              Fruithful seed female multiply lights blessed <br></br> above
              bearing in so two every together <br></br> forth so can't seas
              darkness years rule.
            </p>
          </div>

          <div className="parts_3_3">
            <MdOutlineMultilineChart size="2vw" color="red" />
            <br></br>
            <br></br>
            <span>
              MULTIPOINTS SAFETY<br></br>CHECK OFFERS
            </span>
            <p>
              Fruithful seed female multiply lights blessed <br></br> above
              bearing in so two every together <br></br> forth so can't seas
              darkness years rule.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}