import { useState, useEffect } from 'react';
import style from './Caroussel.module.scss';

export default function Caroussel() {
    const [images, setImages] = useState()

    useEffect(() => {
        async function loadImages() {
            const response = await fetch('../../../public/database/data.json')
            const imgs = await response.json()
            setImages(imgs.images)
        }
        loadImages()
    },[])

    return(
        <div className={style.caroussel}>
            {images && images.map((img,index) => (
                <img key={index} src={img} className={style.imgCaroussel}/>
            ))}
        </div>
    )
}