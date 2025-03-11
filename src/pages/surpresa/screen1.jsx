import quizz from '../../assets/images/quizz.jpg'
import './surpresa.css'
import { useState, useEffect } from 'react';
import { FaRegGrinHearts, FaRegKissWinkHeart } from "react-icons/fa";


function Option({ option, index, setSelection }) {
    return (
        <div className="form-check quizzOption textoRom">
            <input className="form-check-input" type="radio" name="quizz" id={`quizz${index}`} value={index} onChange={()=>setSelection(index)}/>
            <label className="form-check-label" htmlFor={`quizz${index}`}>
                {option}
            </label>
        </div>
    );
}

function Mensagem({acertou, apelido}){
    return(
        <div className='textoRom'>
            {acertou &&
                (
                    <div className='d-flex flex-column align-items-center justify-content-center'>
                        <p className='mb-0 me-2 fs-3 text-center mb-2'>
                            Parabéns! Você acertou {apelido}!
                        </p>

                        <FaRegGrinHearts  style={{ fontSize: '2rem' }}/>
                    </div>

                )
            }
            {
                !acertou &&
                (
                    <div className='d-flex flex-column align-items-center justify-content-center'>
                        <p className='mb-0 me-2 fs-3 text-center mb-2'>
                            Oh não {apelido}! Mais sorte na próxima.
                        </p>

                        <FaRegKissWinkHeart style={{ fontSize: '2rem' }}/>
                    </div>

                )
            }
        </div>
        
    )
}

export function QuizzRight({setCanAdvance}) {
    const [data, setData] = useState('');
    const [apelido, setApelido] = useState('');
    const [selection, setSelection] = useState(null)
    const [mensagemDisplay, setMensagemDisplay] = useState(false)
    const [acertou, setAcertou] = useState(null)
    const [respostaCerta, setRespostaCerta] = useState(null);

    const getData = async () => {
        const quizzContents = await fetch('/projeto-momo/contents/screen1.json');
        const jsonData = await quizzContents.json();
        setData(jsonData.quizzOptions);
        setApelido(jsonData.apelidoFofo);
        setRespostaCerta(jsonData.respostaCerta);
    };

    const handleSubmit = () => {
        if (selection === null) {
            alert('Escolha uma opção');
        } else {
            if (selection===respostaCerta){
                setAcertou(true);
            } else {
                setAcertou(false);
            }
            setMensagemDisplay(true);
            setCanAdvance(true);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    if (!data) {
        return <div>Carregando...</div>; 
    }

    return (
        <div id="quizzForm textoRom">
            <p className='textoRom fs-5'> O que eu mais gosto em você? </p>
            <div className='d-flex flex-row'>
                <img className='rounded altInfo mx-3' src={quizz}/>
                <div className='d-flex flex-column'>
                    {
                    data.map((option, index) => (
                        <Option key={index} option={option} index={index} setSelection={setSelection} />
                        ))
                    }
                </div>
            </div>
            <div className='d-flex align-items-center justify-content-center my-3'>
                <button className='btn textoRom sendBtn' disabled={mensagemDisplay} onClick={()=>handleSubmit()}>
                    Enviar resposta
                </button>
            </div>
            {
                mensagemDisplay && (
                    <Mensagem apelido={apelido} acertou={acertou}/>
                )
            }
        </div>
    );
}

export function QuizzLeft(){
    return(
            <img className='rounded' src={quizz}/>
        )
}