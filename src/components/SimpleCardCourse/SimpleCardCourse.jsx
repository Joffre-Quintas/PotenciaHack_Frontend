import style from './SimpleCardCourse.module.scss';
import { Link } from 'react-router-dom';

export default function SimpleCardCourse(props) {
    return(
        <div className={style.SimpleCardCourse}>
            <div className={style.courseDetails}>
                <img src={props.img} alt={`Curso X`} />
                <h2 className={style.title}>{props.title}</h2>
                <p>{props.description}</p>
                <p className={style.flag}><span className={style.rect}></span>{props.flag}</p>
            </div>
            <div className={style.btnActions}>
                <button className='btnVariableNoFill'><Link to={`/trilhaespecifica/${props.id}`}>Saiba Mais</Link></button>
                <button className='btnDefault'>Matricule-se</button>
            </div>
            <hr />
        </div>
    )    
}