import Caroussel from "../../components/Caroussel/Caroussel"
import Button from '../../components/Button/Button';

import style from './StudentHome.module.scss';

export default function StudentHome() {
    

    return(
        <div className="container">
            <h1>Olá, ser humano!</h1>
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