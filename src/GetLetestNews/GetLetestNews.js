import React , {useEffect} from 'react'
import './GetLetestNews.css'
import Footerdata from './data'
import AOS from 'aos' ;
import 'aos/dist/aos.css'
function GetLetestNews() {
    useEffect(()=>{
        AOS.init({duration:1500});
      },[])
  return (
    <div className='GetLetestNewscontainer'>
        <h1  data-aos="zoom-in">get letest News</h1>
        <div className='subscribecontainer'>
            <input type='email' placeholder='Enter your E-mail address'></input>
            <button>Subscribe Now</button>
        </div>
        <footer>
            <div className='footerboxes'>
                {Footerdata.map((item)=>{
                    return(
                        <Box title={item.title} soustitles={item.soustitles}/>

                    )
                })}
            </div>
            <h6>2024 Emirates, All rights reserved , programing : Dalel Ammar</h6>
        </footer>

    </div>
  )
}


function Box({title , soustitles}){
    return(
        <div className='BoxFooter'>
            <h4>{title}</h4>
           {soustitles.map((item)=>{
            return(
                <p>{item}</p>
            )
           })}

        </div>
    )
}



export default GetLetestNews