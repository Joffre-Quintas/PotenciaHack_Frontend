import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from "./TrilhaEspecifica.module.scss"
import Button from "../../components/Button/Button"

export default function TrilhaEspecifica() {
    const [course, setCourse] = useState();
    const { id } = useParams();

    useEffect(() => {
        async function loadData() {
            try {
                const response = await fetch('../../../public/database/data.json');
                const data = await response.json();
                const arrayCourse = await data.courses;
                const filtroArray = await arrayCourse.filter((item) => item.id == id);

                console.log(filtroArray);
                setCourse(filtroArray[0]);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        loadData();
    }, []);


    if (!course) {
        return <div>Curso não encontrado</div>;
    }
    return (
        <div className='container'>
            <div className={styles.sectionPrincipal}>
                <h1>Trilha: {course.title}</h1>
                <img src={course.imgMaior} alt={course.title} />
                <h3>Programação</h3>
                <h4>Duração: {course.duration} de conteúdo</h4>
                <p>{course.description}</p>
                {/* <h3>Atenção: {course.flag}</h3> */}
                <h3>Você vai aprender:</h3>
                <ul>
                    {course.modules.map((module, index) => (
                        <li key={index}>{module}</li>
                    ))}
                </ul>
                <h2>Professor(a)</h2>
                <section className={styles.prof}>
                    <img src={course.imgProf} alt={course.imgProf} />
                    <div>
                        <h3>{course.prof}</h3>
                        <p>{course.profTitulo}</p>
                        <h4>{course.profTexto}</h4>
                    </div>
                </section>
                <Button estilo="buttonIncrevase" title="Inscreva-se" />
            </div>
        </div>
    );
}
