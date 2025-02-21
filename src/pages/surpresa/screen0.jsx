import { useEffect, useState } from 'react'
import intro from '../../assets/images/intro.jpg'
import { json } from 'react-router-dom';

export function IntroLeft(){
    return(
        <img className='rounded' src={intro}/>
    )
}

export function IntroRight({setCanAdvance}){
    const [data, setData] = useState('');
    const getData = async () =>{
        const introContents = await fetch('/contents/screen0.json')
        const jsonData = await introContents.json();
        setData(jsonData.introText)
    }
    setCanAdvance(true)
    useEffect(()=>{
        getData()
    }, [])
    return(
        <div className='d-flex flex-column align-items-center justify-content-center'>
            <p className='textoRom'>
                {data}
            </p>
            <img className='rounded altInfo' src={intro}/>  
        </div>

    )
}