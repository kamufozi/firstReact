import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
export default function Header(){
    return(
    <header className=' flex justify-center items-center bg-[#F55A5A] gap-2.5 text-white p-5' >
        <FontAwesomeIcon icon={faGlobe} />
        <p>my travel journal.</p>
    </header>
    ) 
}