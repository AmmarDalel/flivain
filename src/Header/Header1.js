import React from 'react'
import { CgLayoutGridSmall } from "react-icons/cg";
import { GrLanguage } from "react-icons/gr";


import './Header1.css'
function Header1() {
  return (
    <div className='Header1Container'>
        <div > <CgLayoutGridSmall className='gridicon'/></div>
        <div className='supportlanguagecontainer'> 
            <ul className='supportlanguageUl'>
                <li>Support</li>
                <li className='languageli'> <GrLanguage className='laguageicon' /> Language</li>

            </ul>
        </div>
        <div className='connectcontainer'> 
            <ul className='connectUL'>
                <li>Sign In</li>
                <li>Sign Up</li>

            </ul>
        </div>
    </div>
  )
}

export default Header1