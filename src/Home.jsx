import React, { useState } from 'react'
import './home.css'
import Nav from './components/Nav'
import { Link } from 'react-router-dom'
import {Glitch} from "react-teffex";

const Home = () => {
  const[notplay,play]=useState(<i class="fa-solid fa-play"></i>)
  const playmusic=()=>{
    var audio = new Audio('interstaller.mp3');
    audio.play()
    
    play("| |")
    if(notplay==="| |"){
      
      window.location.reload();
    }
    
  }
  return (
<div>
      <Nav></Nav>
  <div className="fatherhome">

      <div className="leftside">
        <div className="leftsideuppertxt">
          <div className='interstaller'>
            
            <div className="interstallertxt">
            <Glitch text={"INTERSTELLAR"} />
              
            </div>
          </div>
          <div className='travel'>
            <div className="traveltxt">
            <Glitch text={"TRAVEL"} />
            </div>
          </div>

          <div className="spacetxt">
          
          <Glitch text={"SPACE"} />

          </div>

          <div className="thequote">
          Space travel is life-enhancing, and anything that's life-enhancing is worth doing. It makes you want to live forever." "Life, forever dying to be born afresh
          </div>

          <div className="thebutton">
          <Link to={"/Destination"}><button className='booknow'>BOOK NOW</button></Link>
            
          </div>
          <div className="madewithlove">
            made with love by Roshan
          </div>
        </div>
      </div>
      <div className="rightside">
        <img className='earthimg' src="newearth.png" alt="" />
      </div>
      <div className="musicbtn">
        <button className='playbtn' onClick={playmusic}>{notplay}</button>
      </div>
  </div>
      
</div>
  )
}

export default Home
