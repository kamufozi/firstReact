import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
export default function Entry(){
    return(
        <div className='flex ml-[40px] mt-[100px]'>
            <img src="/src/assets/imgs/japan.jpeg" alt="Japan pic" className='w-[180px] h-[210px]  rounded-xl' />
            <div className='ml-4 '>
                <div className='flex justify-start items-center gap-2.5'>
                    <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                    <p>JAPAN</p>
                    <a className='text-sm text-gray-400' href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"><u>View on Google Maps</u></a>
                </div>
                <h1 className='font-bold text-3xl mt-1'>Mount Fuji</h1>
                <p className='mt-3 font-semibold'>12 Jan, 2021 - 24 Jan, 2021</p>
                <p className='mt-3 text-sm'>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </div>
    )
}