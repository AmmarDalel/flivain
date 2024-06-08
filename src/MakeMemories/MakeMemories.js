import React , {useEffect} from 'react'
import './MakeMemories.css'
import MakeMemoriesdata from './data';
import AOS from 'aos' ;
import 'aos/dist/aos.css'
function MakeMemories() {
    useEffect(()=>{
        AOS.init({duration:1500});
      },[])
  return (
    <div className='Makememoriescontainer'>
        <div className='titlemakememoriescontainer'>
             <h1 data-aos="fade-right">Travel to make memories all around the world</h1>
            <button  data-aos="fade-out">View All</button>
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
        <div className='Boxmakememoriescontainer'  data-aos="zoom-in">
            <div className='cerclememoriescontainer' style={{backgroundColor:color}}>{icon}</div>
            <h2>{title}</h2>
            <p>{paragraph}</p>
        </div>
    )
}

export default MakeMemories