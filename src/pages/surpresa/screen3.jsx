import './surpresa.css'
import { useState, useMemo, useEffect } from 'react';
import { FaRobot, FaHeart } from "react-icons/fa";
import adivinha from '../../assets/images/adivinha.jpg'
// Importação manual
import a from '../../assets/images/captcha/love1.jpg';
import b from '../../assets/images/captcha/love2.jpg';
import c from '../../assets/images/captcha/love3.jpg';
import d from '../../assets/images/captcha/love4.jpg';
import e from '../../assets/images/captcha/love5.jpg';
import f from '../../assets/images/captcha/not1.jpg';
import g from '../../assets/images/captcha/not2.jpg';
import h from '../../assets/images/captcha/not3.jpg';
import i from '../../assets/images/captcha/not4.jpg';


export function ClickGameLeft({}){
    return(
        <div className='textoRom d-flex h-100 align-items-center'>
            <div className='d-flex flex-column align-items-center justify-content-center mt-2'>
                <p className='fs-3 text-center '> Você é um robô? Vamos descobrir. Clique em todas as fotos que contém você! </p>
                <FaRobot  style={{ fontSize: '2rem' }}/>
            </div>
            
        </div>
    )
}

function Tabuleiro({ ncols, nrows, randomizedImages, clickedCells, handleClick, useHeart }) {
    const grid = Array.from({ length: nrows }, (_, rowIndex) =>
        Array.from({ length: ncols }, (_, colIndex) => {
            const index = nrows * rowIndex + colIndex;
            return (
                <Cell
                    key={index}
                    index={index}
                    image={randomizedImages[index]}
                    isClicked={clickedCells[index]}
                    onClick={handleClick}
                    hasHeart={useHeart[index]}                
                    />
            );
        })
    );

    return (
        <div id="gameBoard">
            {grid.map((row, rowIndex) => (
                <div key={rowIndex} className="row d-flex">
                    {row}
                </div>
            ))}
        </div>
    );
}

function Cell({ index, image, isClicked, onClick, hasHeart }) {
    return (
        <div
            className={`col p-0 m-0 border border-1 cell textoRom d-flex justify-content-center align-items-center ${
                isClicked ? 'clicked' : ''
            }`}
            onClick={() => onClick(index, image)}
            style={{ cursor: isClicked ? 'default' : 'pointer' }}
        >
            <img src={image} alt={`Imagem ${index}`} />
            {hasHeart && (<FaHeart className='heart-overlay'/> )}
        </div>
    );
}

export function ClickGameRight({setCanAdvance}) {
    const nrows = 3;
    const ncols = 3;
    const images = [a, b, c, d, e, f, g, h, i];
    const imgsToClick = [a, b, c, d, e];

    const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);
    const randomizedImages = useMemo(() => shuffleArray([...images]), []);
    const [clickedCells, setClickedCells] = useState(Array(ncols * nrows).fill(false));
    const [useHeart, setUseHeart] = useState(Array(ncols * nrows).fill(false));
    const [isWin, setIsWin] = useState(false);

    const handleClick = (index, image) => {
        if (!clickedCells[index] && !isWin) {
            const updatedClickedCells = [...clickedCells];
            updatedClickedCells[index] = true;
            setClickedCells(updatedClickedCells);

            if (imgsToClick.includes(image)) {
                const updatedHeart = [...useHeart];
                updatedHeart[index] = true;
                setUseHeart(updatedHeart);

                const allCorrectClicked = imgsToClick.every((img) =>
                    randomizedImages.includes(img) && updatedHeart[randomizedImages.indexOf(img)]
                );

                if (allCorrectClicked) {
                    setIsWin(true);
                    setCanAdvance(true);
                }
            }
        }
    };

    return (
        <>
            <div className="d-flex flex-column align-items-center justify-content-center m-0 p-0">
                {!isWin &&
                    (
                        <p className="fs-6 text-center altText textoRom m-0"> Clique em todas as fotos que contêm você!</p>
                    )
                }
            </div>
            <div className="w-100 h-100 d-flex flex-column align-items-center justify-content-center">
                {
                    !isWin &&
                    (
                        <Tabuleiro
                            ncols={ncols}
                            nrows={nrows}
                            randomizedImages={randomizedImages}
                            clickedCells={clickedCells}
                            useHeart={useHeart}
                            handleClick={handleClick}
                        />
                    )
                }
                { isWin&&
                    (
                        <div className='d-flex flex-column'>
                            <p className='textoRom m-0 fs-3 text-center'> 
                                Uhu! Acertou mozão! <FaHeart style={{'fontsize':'3em'}}/>
                            </p>
                            <img className='rounded' src={adivinha}/>       
                        </div>
                    )
                }
            </div>
        </>
    );
}