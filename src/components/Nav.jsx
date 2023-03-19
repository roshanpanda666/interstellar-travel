import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div className="parrentnav">
      <div className='fathernav'>

<div className='home'>
<Link to={"/"}>Home</Link>
</div>

<div className='destination'>
<Link to={"/Destination"}>Destination</Link>
</div>

<div className='crew'>
<Link to={"/Crew"}>Crew</Link>
</div>

<div className='tech'>
<Link to={"/Tech"}>Tech</Link>
</div>

</div>
    </div>
    
  )
}

export default Nav
