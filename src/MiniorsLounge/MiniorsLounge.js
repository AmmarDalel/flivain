import React from 'react'
import './MiniorsLounge.css'
import Aviationhost from '../assets/images/Aviation_host.png'
import MiniorsLoungedata from './data'
function MiniorsLounge() {
  return (
    <div className='MiniorsLoungeContainer'>
        <img src={Aviationhost} alt='Aviation_host'></img>
        <div className='MiniorsLoungeinfo'>
            <h1>Unaccompanied Minors Lounge</h1>
            <div className='MiniorsLoungeparagraphscontainer'>
                {
                    MiniorsLoungedata.map((item)=>{
                        return(
                            <Box title={item.title} paragraph={item.paragraph}/>

                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

function Box({title,paragraph}){
    return(
        <div className='BoxMiniorsLoungecontainer'>
            <h2>{title}</h2>
            <p> Momando is by far one of the best travel websites for sourcing travel deals.
            Momando is by far one of the best travel websites for sourcing travel deals.
            </p>
        </div>
    )
}

export default MiniorsLounge