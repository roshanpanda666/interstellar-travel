import React from 'react'
import Nav from './components/Nav'
import {Glitch} from "react-teffex";
import './tech.css'


const Tech = () => {
  return (
    <div>
        <Nav></Nav>
      <div className="bodytech">
        <div className="glitchtxt">
          <Glitch text={"INTERSTELLAR TRAVEL"} />
          </div>
        <div className="rocketlunchparrent">
          <div className="parrentlunchtxt">
            SPACE LAUNCH 101
          </div>
        </div>

        <div className="downsidetech">
          <div className="leftdownside">
            <div className="terminologyof">
              <div className="terminologyoftxt">
                TERMINOLOGY OF
              </div>

            </div>

            <div className="rocketit">
              <div className="rocketitself">
                LUNCH VEHICLE
              </div>
            </div>

            <div className="rocketfact">
            <div className="rocketfacttxt">
            A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!
            </div>
          </div>

          


          </div>
         

          <div className="rightdownside">
            <img className='rocketimg' src="rocket1.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tech
