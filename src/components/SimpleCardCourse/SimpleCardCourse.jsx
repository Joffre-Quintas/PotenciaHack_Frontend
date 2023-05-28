import style from './SimpleCardCourse.module.scss';

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
                <button>Saiba Mais</button>
                <button>Inscreva-se</button>
            </div>
            <hr />
        </div>
    )    
}