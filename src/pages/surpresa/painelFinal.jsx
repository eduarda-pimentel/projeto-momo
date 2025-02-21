import { BsArrowThroughHeartFill } from "react-icons/bs";
import { useState, useEffect, useRef} from 'react';
import { FaHome } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import endSong from "../../assets/sound/end-song.mp3"

export function PainelFinal (){

    const navigate = useNavigate();
    const [msg, setMsg] = useState("");
    const getData = async () => {
        const adivinhaContents = await fetch('/contents/finalMsg.json');
        const jsonData = await adivinhaContents.json();
        setMsg(jsonData.finalMsg)
    };
    const audioRef = useRef(null);

    useEffect(() => {
        getData();
        if (audioRef.current) {
            audioRef.current.volume = 0.5;
            audioRef.current.currentTime = 10;
            audioRef.current.play().catch((error) => {
                console.warn("Autoplay foi bloqueado:", error);
            });
        }
    }, []);
    
    const handleClick = (e) =>{
        e.preventDefault();
        navigate('/');
    }

    return(
        <div className="textoRom text-center d-flex flex-column justify-content-center align-items-center">
            <audio ref={audioRef} src={endSong} />
            <div className="d-flex flex-row align-items-baseline">
                <h3 className="fs-3 my-3 mx-2"> Chegou ao fim! </h3>
                <BsArrowThroughHeartFill style={{'fontSize': '1.5em'}}/>
            </div>
            <p className="fs-6"> {msg} </p>
            <button className="btn textoRom" onClick={(e)=>handleClick(e)}>
                <FaHome style={{'fontSize': '1.5em'}}/>
            </button>
        </div>
    )
}