import React, { useState } from 'react'
import './nav.css'
import { Link } from 'react-router-dom'
const Nav = () => {
  let[beforhome,clickhome]=useState()
  let[befordestination,clickdestination]=useState()
  let[beforcrew,clickcrew]=useState()
  let[befortech,clicktech]=useState()
  const home=()=>{
    clickhome("homeclick")
  }
  const destination=()=>{
    clickdestination("homeclick")
  }
  const crew=()=>{
    clickcrew("homeclick")
  }
  const tech=()=>{
    clicktech("homeclick")
  }
  return (
    <div className="parrentnav">
      <div className='fathernav'>

        <div >
        <Link className={beforhome}onClick={home} to={"/"}>Home</Link>
        </div>

        <div >
        <Link className={befordestination}onClick={destination} to={"/Destination"}>Destination</Link>
        </div>

        <div >
        <Link className={beforcrew}onClick={crew} to={"/Crew"}>Crew</Link>
        </div>

        

      </div>
    </div>
    
  )
}

export default Nav
