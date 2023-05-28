import Caroussel from "../../components/Caroussel/Caroussel"
import Button from '../../components/Button/Button';

import style from './StudentHome.module.scss';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export default function StudentHome() {
    const { id } = useParams()
    const [user, setUser] = useState()

    useEffect(()=> {
        async function loadData() {
            const response = await fetch('../../../public/database/data.json');
            const list = await response.json();
            const arrayUsers = list.users;
            const userFiltered = arrayUsers.filter(user => user.id == id)
            setUser(userFiltered[0])
        }
        loadData() 
    },[id])

    return(
        <div className="container">
            <h1>Olá, {user && user.name}!</h1>
            <section className={style.playWhereStoped}>
                <p>Continue de onde parou:</p>
                <p>imagem</p>
                <p>Módulo 01 - Construção</p>
                <p>Aula 03 - Entendendo o Grid</p>
                <Button title='Continuar'/>
            </section>
            <section className={style.modules}>
                <h3>Módulos</h3>
                <Caroussel/>
                <Button className='buttonFit' title='Ver trilha completa'/>
            </section>
        </div>
    )
}