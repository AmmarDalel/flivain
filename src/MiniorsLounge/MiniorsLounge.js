import React , {useEffect} from 'react'
import './MiniorsLounge.css'
import Aviationhost from '../assets/images/Aviation_host.png'
import MiniorsLoungedata from './data'
import AOS from 'aos' ;
import 'aos/dist/aos.css'
function MiniorsLounge() {
    useEffect(()=>{
        AOS.init({duration:1500});
      },[])
  return (
    <div className='MiniorsLoungeContainer'>
        <img src={Aviationhost} alt='Aviation_host'  data-aos="fade-right"></img>
        <div className='MiniorsLoungeinfo'>
            <h1 data-aos="zoom-in">Unaccompanied Minors Lounge</h1>
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
        <div className='BoxMiniorsLoungecontainer' data-aos="zoom-in">
            <h2>{title}</h2>
            <p>{paragraph}
            </p>
        </div>
    )
}

export default MiniorsLounge