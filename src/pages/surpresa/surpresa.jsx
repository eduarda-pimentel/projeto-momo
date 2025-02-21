import './surpresa.css'
import { IconContext } from "react-icons";
import { BsHeartArrow } from "react-icons/bs";
import { useState } from 'react';
import { IntroLeft, IntroRight } from './screen0';
import { QuizzLeft, QuizzRight } from './screen1';
import { AdivinhaLeft, AdivinhaRight } from './screen2';
import { ClickGameLeft, ClickGameRight } from './screen3';
import { PainelFinal } from './painelFinal';

function NavigationButtons({ currentPannel, setCurrentPannel, canAdvance, setCanAdvance }) {

    const handleNext = (e) =>{
        if (canAdvance){
            e.preventDefault();
            const current = currentPannel;
            setCurrentPannel(current+1)
            setCanAdvance(false)
        }
    }
    
    const handlePrev = (e) =>{
        e.preventDefault();
        const current = currentPannel;
        if (current>0){
            setCurrentPannel(current-1)
        }
    }

    return (
        <div className='d-flex flex-row w-100 justify-content-between mt-auto'>
            <IconContext.Provider value={{ color: " #f2513e", size: '2em'}}>
                <button className='btn border-0' disabled={currentPannel===0} style={{ transform: 'scaleX(-1)' }} onClick={(e)=>handlePrev(e)}>
                {currentPannel>0 && 
                    <BsHeartArrow/>
                }
                </button>
                <button className='btn' onClick={(e)=>handleNext(e)}>
                    <BsHeartArrow/>
                </button>
            </IconContext.Provider>
        </div>
        
    );
}

function Conteudo ({position, currentPannel, setCanAdvance}){
    
    const conteudos = {
        "right": [
            <IntroRight setCanAdvance={setCanAdvance}/>, 
            <QuizzRight setCanAdvance={setCanAdvance}/>, 
            <AdivinhaRight setCanAdvance={setCanAdvance}/>,
            <ClickGameRight setCanAdvance={setCanAdvance}/>],
        "left": [<IntroLeft/>, <QuizzLeft/>, <AdivinhaLeft/>, <ClickGameLeft/>]
    }

    return conteudos[position][currentPannel]
}


function Left ({currentPannel}){
    
    return(
        <div className='col col-12 col-lg-5 leftContainer'>
             <Conteudo position={'left'} currentPannel={currentPannel}/>
        </div>
    )
}

function Right ({currentPannel, setCurrentPannel, canAdvance, setCanAdvance}){

    return(
        <div className='col p-4 rightContainer d-flex flex-column'>
            <Conteudo position={'right'} currentPannel={currentPannel} setCanAdvance={setCanAdvance}/>
            <NavigationButtons currentPannel={currentPannel} setCurrentPannel={setCurrentPannel} canAdvance={canAdvance} setCanAdvance={setCanAdvance}/>
        </div>
    )
}

export default function Surpresa(){
    const [currentPannel, setCurrentPannel] = useState(0);
    const [canAdvance, setCanAdvance] = useState(false);
    return(
        <div className='h-100 d-flex flex-column align-items-center justify-content-center' id="gameSite">
            <div className='rounded p-4' id='centralPannel'>
                <div className='row h-100'>
                    {
                        currentPannel <4 &&
                        (
                            <>
                                <Left currentPannel={currentPannel}/>
                                <Right 
                                    currentPannel={currentPannel} 
                                    setCurrentPannel={setCurrentPannel}
                                    canAdvance = {canAdvance}
                                    setCanAdvance = {setCanAdvance}
                                />
                            </>
                        )

                    }
                    {
                        currentPannel === 4 &&
                        (
                            <PainelFinal/>
                        )
                    }
                </div>
            </div>
        </div>
    )
}