import React , {useState} from 'react'
import './Header2.css' ;
import loginimage from '../assets/images/login.png' ;
import { IoMenu } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";

function Header2() {
  const [clickedMenu , setClickedMenu]=useState(false) ;
  function ChangedClickMenu(){
    setClickedMenu(!clickedMenu);
  }

  return (
    <nav className='navbar'>
    <div > <img src={loginimage} alt='login' className='loginimage'></img></div>
   
      <div className="navigation"> 
      <ul className={`navigationUL ${clickedMenu ? "navigationUL2" : ""}`}>             
              <li>Home</li>
              <li>About</li>
              <li>Offers</li>
              <li>Seats</li>
              <li>Destinartions</li>

          </ul>
      </div>
      {
        clickedMenu ?<IoCloseOutline className='menuicon' onClick={ChangedClickMenu}/> : <IoMenu className='menuicon' onClick={ChangedClickMenu}/> 


      }
      <button className='Contactbtn'>Contact</button>

</nav>
  )
}

export default Header2