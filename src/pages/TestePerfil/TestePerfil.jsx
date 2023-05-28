import React from 'react'
import { RiNewspaperFill } from 'react-icons/ri'
import styles from './TestePerfil.module.scss'
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom';

export default function TestePerfil() {
    return (
        <div className='container'>
            <section className={styles.containerPerfil}>
                <div className={styles.img}>
                    <RiNewspaperFill />
                </div>
                <h1>Teste de Perfil</h1>
                <p>Reserve 10 minutos em um local calmo para realização</p>
                <Link  to="/testeperfilradio">
                    <Button estilo="buttonPerfil" title="Iniciar Teste" />
                </Link>
            </section>
        </div>
    )
}
