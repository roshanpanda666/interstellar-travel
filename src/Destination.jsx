import React, { useState } from 'react'
import Nav from './components/Nav'
import './destination.css'
import { Link } from 'react-router-dom'
import {Glitch} from "react-teffex";
const Destination = () => {
  const[moonimgbe,moonimgaf]=useState(<img className='marsjpg' src="moon.png" alt="" />)
  const[thebigtxtbe,thebigtextaf]=useState("MOON")
  const[planetname,planetnameaf]=useState("planetname")
  const[moonbtn,moonbtnaf]=useState("moonbtnaf")
  const[marsbtn,marsbtnaf]=useState("moonbtn")
  const[titanbtn,titanbtnaf]=useState("moonbtn")
  const[europabtn,europabtnaf]=useState("moonbtn")
  const[planetfacttxts,planetfacttxtts]=useState("See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.")
  const[range,rangeaf]=useState("384,400 KM")
  const[days,daysaf]=useState("3 DAYS")
  const moonfun=()=>{

    moonimgaf(<img className='marsjpg' src="moon.png" alt="" />)
    thebigtextaf("MOON")
    planetnameaf("planetname")
    moonbtnaf("moonbtnaf")
    marsbtnaf("moonbtn")
    titanbtnaf("moonbtn")
    europabtnaf("moonbtn")
    planetfacttxtts("See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.")
    rangeaf("384,400 KM")
    daysaf("3 DAYS")
  }
  const marsfun=()=>{
    moonimgaf(<img className='marsjpg' src="mars.png" alt="" />)
    thebigtextaf("MARS")
    planetnameaf("marsplanetname")
    marsbtnaf("marsbtn")
    moonbtnaf("moonbtn")
    titanbtnaf("moonbtn")
    europabtnaf("moonbtn")
    planetfacttxtts("Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!")
    rangeaf("225 MIL. KM")
    daysaf("9 MONTHS")

  }
  const titanfun=()=>{
    moonimgaf(<img className='marsjpg' src="titan.png" alt="" />)
    thebigtextaf("TITAN")
    planetnameaf("titanplanetname")
    titanbtnaf("titanbtn")
    marsbtnaf("moonbtn")
    europabtnaf("moonbtn")
    moonbtnaf("moonbtn")
    planetfacttxtts("The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.")
    rangeaf("1.6 BIL. KM")
    daysaf("7 YEARS")
  }
  const europafun=()=>{
    moonimgaf(<img className='marsjpg' src="europa.png" alt="" />)
    thebigtextaf("EUROPA")
    planetnameaf("europaplanetname")
    europabtnaf("europabtn")
    titanbtnaf("moonbtn")
    marsbtnaf("moonbtn")
    moonbtnaf("moonbtn")
    planetfacttxtts("The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.")
    rangeaf("628 MIL. KM")
    daysaf("3 YEARS")
  }
  return (
    <div>
    <Nav></Nav>
      
      <div className="father">
        <div className="leftsided">
        <div className="glitchtxt">
        <Glitch text={"INTERSTELLAR TRAVEL"} />
        </div>
          <div className="pickyourdestination">
            <div className="txtfordestination">
            
              PICK YOUR DESTINATION
            </div>
          </div>

          <div className="marsefather">
            <div className="marsepic">
              {moonimgbe}
              
            </div>
          </div>

          <div className="nextbuttondad">
          <Link  to={"/Crew"}>
          <button className='nextbtn'>NEXT</button>
          </Link>
            
          </div>

        </div>
        <div className="rightsided">
        <div className="planetnavigationfather">
        <div className="planetnavigation">

<div className="button">
  <button className={moonbtn} onClick={moonfun}>MOON</button>
</div>

<div className="button">
  <button className={marsbtn} onClick={marsfun}>MARS</button>
</div>

<div className="button">
  <button className={titanbtn} onClick={titanfun}>TITAN</button>
</div>

<div className="button">
  <button className={europabtn} onClick={europafun}>EUROPA</button>
</div>

</div>
        </div>
            

            <div className="planettxt">
              <div className={planetname}>
              
                {thebigtxtbe}
              </div>
            </div>

            <div className="planetfact">
              <div className="planetfacttxt">
              {planetfacttxts}
              </div>
            </div>

          <div className="distancecompfather">
          <div className="distancecomp">
              <div className="leftdis">
                <div className="leftupper">
                  AVERAGE DISTANCE
                </div>
                <div className="leftdown">
                  {range}
                </div>
              </div>
              <div className="rightdis">
                  <div className="leftupper">
                  EST. TRAVEL TIME
                  </div>
                  <div className="leftdown">
                    {days}
                  </div>
              </div>
            </div>
          </div>

          <div className="anotherbtn">
          <Link  to={"/Crew"}>
          <button className='underbutton'>NEXT</button>
          </Link>
            
          </div>
            

        </div>
      </div>
    </div>
  )
}

export default Destination
