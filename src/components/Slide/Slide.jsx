import style from './Slide.module.scss';
import { useState, useEffect} from 'react';
//Icons
import { AiOutlineLeft } from 'react-icons/ai';
import { AiOutlineRight } from 'react-icons/ai';


export default function Slide(props) {
    const [count, setCount] = useState(0)

    function leftSlide() {
        if(count < props.array.length - 1) {
            setCount(current => current + 1)
        }  
    }
    function rightSlide() {
        if(count > 0) {
            setCount(current => current - 1)
        } 
    }

    return(
        <div>
            <div className={style.slideShow}>
                <AiOutlineLeft onClick={rightSlide}/>
                <div className={style.containerImgs}>
                    {props.array && <img src={props.array[count].img} className={style.imgs}></img>}
                    <p>{props.array[count].period}</p>   
                </div>
                <AiOutlineRight onClick={leftSlide}/>        
            </div>
            <div className={style.period}>
                
            </div>
        </div>
    )
}