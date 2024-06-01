import React from 'react'
import './MakeMemories.css'
import { RiShieldCheckLine } from "react-icons/ri";
import MakeMemoriesdata from './data';
function MakeMemories() {
  return (
    <div className='Makememoriescontainer'>
        <div className='titlemakememoriescontainer'>
             <h1>Travel to make memories all around the world</h1>
            <button>View All</button>
        </div>
        <div className='Boxesmakememoriescontainer'>
            {MakeMemoriesdata.map((item)=>{
                return(
                    <Box title={item.title} paragraph={item.paragraph} color={item.color} icon={item.icon}/>

                )
            })}
        </div>
    </div>
  )
}

function Box({title, paragraph,color,icon}){
    return(
        <div className='Boxmakememoriescontainer'>
            <div className='cerclememoriescontainer' style={{backgroundColor:color}}>{icon}</div>
            <h2>{title}</h2>
            <p>{paragraph}</p>
        </div>
    )
}

export default MakeMemories