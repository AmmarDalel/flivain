import React from 'react'
import './Home.css'
import air_airplain from "../assets/images/air-airplain.png" ;
import BusinessClassData from './data';
import { FaSearch } from "react-icons/fa";

function Home() {
  return (
    <div className='HomeContainer'>
        <h1>Find And Book <br/>A Great Experience</h1>
        <div className='imagehomecontainer'>
            <img src={air_airplain} alt='air' className='imagehome'></img>

        </div>
     
        <Box/>


    </div>
  )
}

function Box(){
    return(
       <div className='BoxContainer'>
            <div className='containerbtnHome'>
                <button >Economy</button>
                <button className='btnclicked'>Business Class</button>
                <button>Fast Class</button>

            </div>
      <div className='minboxs'>
      {
        BusinessClassData.map((item)=>{
          return(
            <MiniBox id={item.id} paragraph={item.paragraph} icon={item.icon}/>

          )
        })
      }

    <FaSearch className='searchminbox'/>

      </div>
       </div> 
    )
}

function MiniBox({id , paragraph , icon}){
 return(
  <div className='miniboxcontainer'>
    {icon}
    <div className='infoContainer'>
      <h3>{id}</h3>
      <p>{paragraph}</p>
    </div>

  </div>
 )
}

export default Home