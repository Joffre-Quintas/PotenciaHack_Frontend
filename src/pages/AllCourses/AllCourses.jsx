import style from './AllCourses.module.scss';

import SimpleCardCourse from '../../components/SimpleCardCourse/SimpleCardCourse';
import { useEffect, useState } from 'react';

export default function AllCourses() {
    const [listCourses, setListCourses] = useState()
    
    useEffect(() => {
        async function loadData() {
            const response = await fetch('../../../public/database/data.json');
            const data = await response.json()
            setListCourses(data.courses)
        }
        loadData()
    },[])


    return(
        <div className="container">
            <div className={style.containerAllCourses}>
                <div>
                    <h1>Nossos Cursos</h1>
                    <p>Aqui você encontra uma lista com todos os cursos que oferecemos e uma explicação de cada trilha que você pode desenvolver a partir dos cursos.</p>
                </div>
                {listCourses && listCourses.map((course, index) => (
                    <SimpleCardCourse key={index} title={course.title} description={course.description} flag={course.flag} img={course.img}/>
                ))}                
            </div>
        </div>
    )
}