import { json } from 'react-router-dom';
import adivinha from '../../assets/images/adivinha.jpg'
import './surpresa.css'
import { useState, useEffect } from 'react';
import { FaRegFaceSadTear } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";


function Mensagem ({acertou, apelido}){
    return(
        <div className='textoRom'>
            <div className='d-flex flex-column align-items-center justify-content-center mt-2'>
                {
                    acertou && 
                    (
                        <>
                            <div className='d-flex flex-row align-items-center justify-content-center'>
                                <p className='mb-0 me-2 fs-3 text-center mb-2'> 
                                    Acertou, {apelido}!
                                </p>
                                <FaHeart  style={{ fontSize: '2rem' }}/>
                            </div>
                            <p className='fs-5 text-center'>  
                                Estamos em sintonia!
                            </p>
                        </>
                    )
                }
                {
                    !acertou &&
                    (
                        <>
                            <div className='d-flex flex-row align-items-center justify-content-center'>
                                <p className='mb-0 me-2 fs-3 text-center mb-2'> 
                                    Você errou, {apelido}
                                </p>
                                <FaRegFaceSadTear style={{ fontSize: '2rem' }}/>
                            </div>
                            <p className='fs-5 text-center'>  
                                Mas acontece, é sobre isso e tá tudo bem! 
                            </p>
                        </>
                    )
                }
            </div>

        </div>
    )
}

export function AdivinhaRight({setCanAdvance}){

    const [resposta, setResposta] = useState("");
    const [input, setInput] = useState("");     
    const [mensagemDisplay, setMensagemDisplay] = useState(false);
    const [acertou, setAcertou] = useState(null);
    const [apelido, setApelido] = useState('');

    const getData = async () => {
        const adivinhaContents = await fetch('/projeto-momo/contents/screen2.json');
        const jsonData = await adivinhaContents.json();
        setResposta(jsonData.palavraSecreta);
        setApelido(jsonData.apelidoFofo);
    };

    useEffect(() => {
            getData();
    }, []);

    const handleSubmit = () => {
        if(input.length ===0){
            alert("Insira uma palavra!")    
        } else{
            if (input===resposta){
                setAcertou(true)
            } else {
                setAcertou(false)
            }
            setMensagemDisplay(true)
            setCanAdvance(true)
        }
        
    }

    return(
        <div className='textoRom quizzOption'>
            <h3> Se eu pudesse te descrever numa palavra seria...</h3>
            <input className='w-100 form-control my-4' type='text' value={input} onChange={(e)=>setInput(e.target.value)}/>
          
            <div className='d-flex align-items-center justify-content-center'>
                <button className='btn textoRom sendBtn' onClick={()=>handleSubmit()}>
                    Enviar resposta
                </button>
            </div>
            {
                mensagemDisplay &&
                (
                    <Mensagem apelido={apelido} acertou={acertou}/>
                )
            }
        </div>
    )
}

export function AdivinhaLeft(){
    return(
        <img className='rounded' src={adivinha}/>
    )
}