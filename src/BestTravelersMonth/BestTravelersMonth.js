import React , {useEffect} from 'react'
import './BestTravelersMonth.css'
import BestTravelersMonthdata from './data'
import AOS from 'aos' ;
import 'aos/dist/aos.css'
function BestTravelersMonth() {
  useEffect(()=>{
    AOS.init({duration:1500});
  },[])
  return (
    <div className='BestTravelersMonthcontainer'>
        <h1  data-aos="fade-right">Best travel of the month</h1>
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
        <div className='BoxBestTravelersMonthContainer' data-aos="zoom-in">
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