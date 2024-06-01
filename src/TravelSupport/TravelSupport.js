import React from 'react'
import './TravelSupport.css'
import travelsupportdata from './data'
import plainwing from '../assets/images/travelsupportimage.png'
function TravelSupport() {
  return (
    <div className='travelsupportcontainer'>
        <h2>Travel Support</h2>
        <h1>Plan your travel with confidence</h1>
        <p>Find help with your booking and travel plans , and see what to expect along your journey</p>
        <div className='travelsupportinfoconatiner'>
          
          <div className='boxtravelsupportcontainer'>
          {
            travelsupportdata.map((item,index)=>{
              return(<Box title={item.title} paragraph={item.paragraph} index={index} color={item.color}/>
            )
            })
          }
          </div>
          <img src={plainwing} className='plainwing' alt='plainwing'></img>

        </div>
    </div>
  )
}

function Box({title , paragraph , index , color}){
 
 
  return(
    <div className='boxtravelsuppocontainer'>
      <div className='indexdata' style={{backgroundColor:color}}>
      { Math.floor(index/10) === 0 ? <p className='indexdatap'>0{index + 1}</p> : <p className='indexdatap'>{index + 1}</p>}
      </div>
      <h2>{title}</h2>
      <p>{paragraph}</p>
    </div>
  )

}

export default TravelSupport