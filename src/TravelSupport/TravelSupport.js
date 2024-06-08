import React , {useEffect} from 'react'
import './TravelSupport.css'
import travelsupportdata from './data'
import plainwing from '../assets/images/travelsupportimage.png'
import AOS from 'aos' ;
import 'aos/dist/aos.css'

function TravelSupport() {
  useEffect(()=>{
    AOS.init({duration:1500});
  },[])
  return (
    <div className='travelsupportcontainer'  >
        <h2 className='h2' data-aos="zoom-in">Travel Support</h2>
        <h1 className='h1' data-aos="zoom-in">Plan your travel with confidence</h1>
     

        <p data-aos="zoom-in">Find help with your booking and travel plans , and see what to expect along your journey</p>
        <div className='travelsupportinfoconatiner'>
          
          <div className='boxtravelsupportcontainer'>
          {
            travelsupportdata.map((item,index)=>{
              return(<Box title={item.title} paragraph={item.paragraph} index={index} color={item.color}/>
            )
            })
          }
          </div>
          <img src={plainwing} className='plainwing' alt='plainwing' data-aos="zoom-in"></img>

        </div>
    </div>
  )
}

function Box({title , paragraph , index , color}){
 
 
  return(
    <div className='boxtravelsuppocontainer'>
      <div className='indexdata' style={{backgroundColor:color}} >
      { Math.floor(index/10) === 0 ? <p className='indexdatap'>0{index + 1}</p> : <p className='indexdatap'>{index + 1}</p>}
      </div>
      <h2 data-aos="zoom-in">{title}</h2>
      <p data-aos="zoom-in">{paragraph}</p>
    </div>
  )

}

export default TravelSupport