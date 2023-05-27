import style from './Login.module.scss';

import Button from "../../components/Button/Button";
import Input from '../../components/Input/Input';
import { AiFillEye } from 'react-icons/ai'
import { AiFillEyeInvisible } from 'react-icons/ai'

import { useState } from "react";

import imgGoogle from '../../assets/img/google.png'
import imgFacebook from '../../assets/img/facebook.png'

export default function Login() {
    const [type, setType] = useState('password')
    const [form, setForm] = useState({
        user:'',
        password: ''
    })

    //Function to submit form
    function handleSubmit(e) {
        e.preventDefault()
        console.log(form)
    }

    //Function do update form
    function handleUpdateInput(e) {
        const fieldCamp = e.target.name
        const fieldValue = e.target.value
        setForm((currentForm) => {
            return{
                ...currentForm,
                [fieldCamp]: fieldValue
            }
        })
    }

    return(
        <div className="container">
            <form className={style.formLogin}>
                <h1>Login</h1>
                <Input label='Usuário' type='text' name='user' id='user' onChange={(e) => handleUpdateInput(e)}/>
                <div className={`${style.divInput} ${style.divPassword}`}>
                    <label htmlFor="password">Senha</label>         
                    <input type={type} name="password" onChange={(e) => handleUpdateInput(e)} placeholder=' ' id='password'/>
                    {type == 'password' ? <AiFillEyeInvisible onClick={() => setType
                    ('text')}/> : <AiFillEye onClick={() => setType('password')}/>}
                </div>
                <div className={style.haventLogin}>
                    <p>Ainda não possui cadastro? <span>Clique aqui</span></p>
                </div>
                <div className={style.actions}>
                    <Button title="Entrar" onClick={(e) => handleSubmit(e)}></Button>
                </div>
            </form>
            <div className={style.loginAPI}>
                <p>Ou entre com as redes sociais:</p>
                <div>
                    <img src={imgGoogle} alt="icon Google" />       
                    <img src={imgFacebook} alt="icon Facebook" />       
                </div>
            </div>
        </div>
    )
}