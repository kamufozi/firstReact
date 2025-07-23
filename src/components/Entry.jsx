import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
export default function Entry(props){
    console.log(props)
    return(
        <div className='flex ml-[40px] mb-[20px]'>
            <img src={props.i.img.src} alt={props.i.img.alt} className='w-[160px] h-[180px] object-cover rounded-sm' />
            <div className='ml-4 '>
                <div className='flex justify-start items-center gap-2.5'>
                    <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                    <p>{props.i.country}</p>
                    <a className='text-sm text-gray-400' href={props.i.googleMapsLink}><u>View on Google Maps</u></a>
                </div>
                <h1 className='font-bold text-3xl mt-1'>{props.i.title}</h1>
                <p className='mt-3 font-semibold'>{props.i.dates}</p>
                <p className='mt-3 text-sm'>{props.i.text}</p>
            </div>
        </div>
    )
}