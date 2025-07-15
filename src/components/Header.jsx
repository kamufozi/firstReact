import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
export default function Header(){
    return(
    <header className=' flex justify-center items-center bg-pink-600 gap-2.5 text-white p-5' >
        <FontAwesomeIcon icon={faGlobe} />
        <p>my travel journal.</p>
    </header>
    ) 
}