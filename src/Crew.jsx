import React, { useState } from 'react'
import Nav from './components/Nav'
import './Crew.css'
import { Link } from 'react-router-dom'
const Crew = () => {
  const[comandername,comandernameaf]=useState("DOUGLAS HURLEY")
  const[cmdtxt,cmdtxtaf]=useState("COMMANDER")
  const[crewtxt,crewtxtaf]=useState("Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.")
  const[crewpic,crewpicaf]=useState(<img className='commanderhimself' src="commander.png" alt="" />)
  const[navigatecrewbtn,thebuttonaf]=useState("navigatecrewbtn")
  const[navigatecrewbtn2,thebuttonaf2]=useState("navigatecrewbtn")
  const[navigatecrewbtn3,thebuttonaf3]=useState("navigatecrewbtn")
  const[navigatecrewbtn4,thebuttonaf4]=useState("navigatecrewbtn")
  
  const comanderfun=()=>{
      thebuttonaf("navigatecrewbtnaf")
      thebuttonaf2("navigatecrewbtn")
      thebuttonaf3("navigatecrewbtn")
      thebuttonaf4("navigatecrewbtn")
      crewpicaf(<img className='commanderhimself' src="commander.png" alt="" />)
      cmdtxtaf("COMMANDER")
      comandernameaf("DOUGLAS HURLEY")
      crewtxtaf("Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.")
  }
  const specalistfun=()=>{
    thebuttonaf2("navigatecrewbtnaf")
    thebuttonaf3("navigatecrewbtn")
    thebuttonaf4("navigatecrewbtn")
    thebuttonaf("navigatecrewbtn")
    thebuttonaf("navigatecrewbtn")
    crewpicaf(<img className='commanderhimself' src="specealist.png" alt="" />)
    cmdtxtaf("FLIGHT SPECIALIST")
    comandernameaf("MARK SHUTTLEWORTH")
    crewtxtaf("Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.")
  }
  const pilotfun=()=>{
    thebuttonaf3("navigatecrewbtnaf")
    thebuttonaf2("navigatecrewbtn")
    thebuttonaf4("navigatecrewbtn")
    thebuttonaf("navigatecrewbtn")
    crewpicaf(<img className='commanderhimself' src="pilot.png" alt="" />)
    cmdtxtaf("PILOT")
    comandernameaf("VICTOR GLOVER")
    crewtxtaf("Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.")
  }
  const flightengfun=()=>{
    thebuttonaf4("navigatecrewbtnaf")
    thebuttonaf3("navigatecrewbtn")
    thebuttonaf2("navigatecrewbtn")
    thebuttonaf("navigatecrewbtn")
    crewpicaf(<img className='commanderhimself' src="engineer.png" alt="" />)
    cmdtxtaf("FLIGHT ENGINEER")
    comandernameaf("ANOUSHEH ANSARI")
    crewtxtaf("Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.")
  }
  return (
    <div>
        <Nav></Nav>
      <div className="allfathercrew">
        <div className="leftsidecrew">

          <div className="meetyourcrewparrent">
            <div className="meetyourcrewtxt">
            MEET YOUR CREW
            </div>
          </div>

          <div className="commanderparrent">
            <div className="commandertxt">
              <div className="commandertxt">{cmdtxt}</div>
              
            </div>
          </div>

          <div className="commandernamep">
            <div className="commandernamec">
               {comandername}
            </div>
          </div>

          <div className="commanderbg">
            <div className="commanderbgtxt">
           {crewtxt}
            </div>
          </div>

          <div className="thebuttons">
            <div className="thebuutonself">
              <div className={navigatecrewbtn} onClick={comanderfun}></div>
              <div className={navigatecrewbtn2} onClick={specalistfun}></div>
              <div className={navigatecrewbtn3} onClick={pilotfun}></div>
              <div className={navigatecrewbtn4} onClick={flightengfun}></div>
            </div>
          </div>
        
            <div className="nextbtnn">
              <div className="thebtn">
              <Link to={"/Tech"}> <button className='nextbtn' >NEXT</button></Link>
             
              </div>
             
            </div>

        </div>

        

        <div className="rightsidecrew">
            <div className="crewpic">
              {crewpic}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Crew
