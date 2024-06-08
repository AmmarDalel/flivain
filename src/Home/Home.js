import React , {useEffect } from 'react'
import './Home.css'
import plaine from "../assets/images/plaine2.png" ;
import air from "../assets/images/air.mp4" ;
import BusinessClassData from './data';
import { FaSearch } from "react-icons/fa";
import AOS from 'aos' ;
import 'aos/dist/aos.css'
function Home() {
  useEffect(()=>{
    AOS.init({duration:1500});
  },[])
  return (
    <div className='HomeContainer'>
        <h1 data-aos="zoom-in">Find And Book <br/>A Great Experience</h1>

        <div className='homeImages flex'>
          <div className='videoDiv'>
          <video src={air} alt='air' autoPlay muted loop className='video'></video>

          </div>
            <img src={plaine} alt='air' className='plaine'></img>

        </div>
     
        <Box/>


    </div>
  )
}

function Box(){
  /*const [buttonsclicked,setButtonsclicked]=useState([false,true,false]) ;*/
  
  /*function changeButtonsclicked(id){
    const table=buttonsclicked ;
    table.map((item ,index)=>{
     if(item){
      table[index]=false ;
     }
   })
   table[id]=true ;
   setButtonsclicked(table) ;
   console.log(buttonsclicked)
  }*/
    return(
       <div className='BoxContainer'  data-aos="zoom-in">
            <div className='btns'  data-aos="zoom-in"npm >
              <div className='singleBtn'>
                <span>Economy</span>
              </div>
              <div className='singleBtn '>
                <span>Business Class</span>
              </div>
              <div className='singleBtn'>
                <span>First Class</span>
              </div>
            </div>
      <div className='minboxssearchcontainer'>
          <div className='minboxs'>
          {
            BusinessClassData.map((item)=>{
              return(
                <MiniBox id={item.id} title={item.title} paragraph={item.paragraph} icon={item.icon}/>

              )
            })
          }


          </div>
            <FaSearch className='searchminbox'/>
      </div>

       </div> 
    )
}

function MiniBox({id, title , paragraph , icon}){
 return(
  <div className='miniboxcontainer' data-aos="zoom-in" id={id} >
    {icon}
    <div className='infoContainer'>
      <h3>{title}</h3>
      <input type='text' placeholder={paragraph}></input>
    </div>

  </div>
 )
}

export default Home