import React from 'react'
import './BestTravelersMonth.css'
import BestTravelersMonthdata from './data'
function BestTravelersMonth() {
  return (
    <div className='BestTravelersMonthcontainer'>
        <h1>Best travel of the month</h1>
        <div className='boxBestTravelersMonthcontainercontainer'>
          {BestTravelersMonthdata.map((item)=>{
              return(
                <Box backgroundimg={item.backgroundimg} 
                personimg={item.personimg} name={item.name} email={item.email}/>
              )

          })}
        </div>
    </div>
  )
}

function Box({backgroundimg ,personimg , name , email}){
    return(
        <div className='BoxBestTravelersMonthContainer'>
            <div className='imagecontainer' style={{ backgroundImage: `url(${backgroundimg})` }}>
            </div>
            <div className='cercle'>
              {personimg}
            </div>
            <h5>{name}</h5>
            <p>{email}</p>

        </div>
    )
}

export default BestTravelersMonth