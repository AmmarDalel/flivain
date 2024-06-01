import React from 'react'
import './Header2.css' ;
import loginimage from '../assets/images/login.png' ;
function Header2() {
  return (
    <nav className='navbar'>
    <div > <img src={loginimage} alt='login' className='loginimage'></img></div>
   
    <div className='navigation'> 
        <ul className='navigationUL'>
            <li>Home</li>
            <li>About</li>
            <li>Offers</li>
            <li>Seats</li>
            <li>Destinartions</li>

        </ul>
    </div>

    <button className='Contactbtn'>Contact</button>

</nav>
  )
}

export default Header2