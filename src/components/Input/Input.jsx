import style from './Input.module.scss';

export default function Input(props) {
    return(
        <div className={style.divInput}>
            <label htmlFor="user">{props.label}</label>
            <input type={props.type} name={props.name} id={props.id} onChange={props.onChange} placeholder=' '/>
        </div>
    )
}