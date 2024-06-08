import { IoLocationOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { MdOutlineStorefront } from "react-icons/md";

const BusinessClassData=[
    {   id:1,
        title:'Location' ,
        paragraph:'Where are you going ?',
        icon: <IoLocationOutline className='icon'/>,
    } ,
    {   id:2,
        title:'Travels' ,
        paragraph:'Add guests',
        icon: <CiUser className='icon'/>,
    } ,
    {   id:3,
        title:'Check in' ,
        paragraph:'Add date',
        icon: <MdOutlineStorefront className='icon'/>,
    },
    {   id:4,
        title:'Check out' ,
        paragraph:'Add date',
        icon: <MdOutlineStorefront className='icon'/>,
    }

    

]


export default BusinessClassData ;