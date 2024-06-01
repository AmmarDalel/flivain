import { IoLocationOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { MdOutlineStorefront } from "react-icons/md";

const BusinessClassData=[
    {
        id:'Location' ,
        paragraph:'Where are you going ?',
        icon: <IoLocationOutline className='icon'/>,
    } ,
    {
        id:'Travels' ,
        paragraph:'Add guests',
        icon: <CiUser className='icon'/>,
    } ,
    {
        id:'Check in' ,
        paragraph:'Add date',
        icon: <MdOutlineStorefront className='icon'/>,
    },
    {
        id:'Check out' ,
        paragraph:'Add date',
        icon: <MdOutlineStorefront className='icon'/>,
    }

    

]


export default BusinessClassData ;