import './main.css'
import { BsFillPersonFill } from "react-icons/bs";
import { useAppContext } from '../../AppContext';
import { useNavigate } from 'react-router-dom';

function Navbar(){
    return(
        <nav className='navbar border p-4 navegacao border border-bottom shadow shadow-sm'>
            <div className='container-fluid'>
                <div className='d-flex flex-row align-items-center px-4 py-2'>
                    <div className='me-2'>
                        <BsFillPersonFill />
                    </div>
                    <a className='nav-link'> Perfil </a>
                </div>
            </div>
        </nav>

    )
}

function Hero(){
    const {user} = useAppContext();
    const navigate = useNavigate();

    const handleClick = () => {
        setTimeout(()=>{
            navigate("/surpresa")
        }, 2000)
    }
    return(
        <div className='d-flex justify-content-center align-items-center flex-grow-1' id="hero">
            <div className='d-flex border border-2 border-primary-subtle rounded w-50 h-50 align-items-center justify-content-center flex-column bg-light'>
                <h3>Olá {user} </h3>
                <button id='clickableLink' className='btn' onClick={()=>handleClick()}> Clique aqui para explorar </button>
            </div>
        </div>
    )
}

export default function Main(){
    return(
        <div className="h-100 d-flex flex-column">
            <Navbar/>
            <Hero/>
        </div>
    )
}