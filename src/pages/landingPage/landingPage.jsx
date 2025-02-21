import { useState } from 'react';
import { useAppContext } from '../../AppContext';
import { useNavigate } from 'react-router-dom';
import './landingPage.css'

export default function Login(){
    const navigate = useNavigate();
    const {user, setUser} = useAppContext();
    const [form, setForm] = useState({
        'name': '',
        'email': ''
    })

    const handleChange = (e)=>{
        e.preventDefault();
        const { name, type, checked, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(form.name!=""){
            setUser(form.name)
            navigate('/main')
        } else {
            alert("Insira um nome")
        }
    }

    const handleReset = (e) => {
        e.preventDefault();
        setForm({
            'name': '',
            'email': ''
        })
    }

    return (
        <div className="d-flex justify-content-center align-items-center h-100" id='landing'>
          <form className="d-flex flex-column align-items-start px-5 py-4 border border-2 border-primary-subtle shadow rounded bg-light">
            <h5> Cadastro </h5>
            <div className="w-100 my-4">
                <label htmlFor="exampleInputEmail1" className="form-label"> 
                    Como gostaria de ser chamado(a)?
                </label>
                <input type="text" value={form.name} className="form-control" id="name" aria-describedby="nameHelp" name="name" onChange={(e)=>handleChange(e)} />
                <div id="nameHelp" className="form-text" > 
                    Insira um nome
                </div>
            </div>
            <div className="w-100 mb-4">
                <label htmlFor="exampleInputEmail1" className="form-label"> 
                    Email
                </label>
                <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelp"  value={form.email} onChange={(e)=>handleChange(e)} />
                <div id="emailHelp" className="form-text"> 
                    Insira o seu email
                </div>
            </div>
            <div className='d-flex flex-row justify-content-evenly w-100'>
                <button className='btn btn-primary mb-2 w-25' onClick={(e)=>handleSubmit(e)}>
                    Entrar
                </button>
                <button className='btn btn-secondary mb-2 w-25' onClick={(e)=>handleReset(e)}>
                    Cancelar
                </button>
            </div>
          </form>
        </div>
      );
}