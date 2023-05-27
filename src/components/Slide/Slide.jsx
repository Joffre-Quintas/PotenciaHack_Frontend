import style from './Slide.module.scss';
import { useState, useEffect} from 'react';
//Icons
import { AiOutlineLeft } from 'react-icons/ai';
import { AiOutlineRight } from 'react-icons/ai';


export default function Slide(props) {
    const [count, setCount] = useState(0)
    const events = [
        {   
            "img":"../../public/capture_hackathon.jpg",
            "period": "19 e 20 de Agosto"
        },
        {
            "img":"../../public/hackathon_ex.jpg",
            "period": "01 de Julho a 01 de Agosto"
        }
    ]

    function leftSlide() {
        if(count < events.length - 1) {
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
                    {events && <img src={events[count].img} className={style.imgs}></img>}
                    <p>{events[count].period}</p>   
                </div>
                <AiOutlineRight onClick={leftSlide}/>        
            </div>
            <div className={style.period}>
                
            </div>
        </div>
    )
}