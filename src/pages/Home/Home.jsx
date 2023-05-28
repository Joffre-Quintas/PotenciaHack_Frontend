import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import TrilhaCard from '../../components/trilhaCard/TrilhaCard'
import Slide from '../../components/Slide/Slide';

import style from './Home.module.scss';

export default function Home() {
  const [courses, setCourses] = useState([]);
  const [events, setEvents] = useState()

  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch('../../../public/database/data.json');
        const data = await response.json();
        setCourses(data.courses);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    loadData();
  }, []);
  useEffect(()=>{
    async function loadData() {
      try {
        const response = await fetch('../../../public/database/data.json');
        const data = await response.json()
        setEvents(data.event)
      } catch (err) {
        console.log(err)
      }
    }
    loadData()
  },[])

  const limitedCourses = courses.slice(0, 4);

  return (
    <div>
      <section className={style.firstSection}>
        <div className='container'>
          <h1>Participe de um Hacka</h1>
          <div className={style.btnActions}>
            <button>Inscreva-se</button>
            <button>Já sou aluno</button>
          </div>
        </div>
      </section>
      <section className='container'>
      <h2 className={style.title}>Próximos Eventos</h2>
      <h3 className={style.subtitle}>Cursos Online</h3>
      {/* {courses && <Slide array={courses}/>} */}
      </section>
      <section className='container'>
        <h3 className={style.subtitle}>Hackahtos</h3>
        {events && <Slide array={events}/>}        
      </section>
      <div className='container'>
        <h2 className={style.title}>Trilhas</h2>
        {limitedCourses.map((course, index) => (
          <TrilhaCard
            key={index} 
            titulo_trilha={course.title}
            paragrafo_trilha={course.short}
            imagem={course.img}
          />
        ))}
        <Link to='/allcourses'><button className={style.btnCenter}>Ver todos os cursos</button></Link>
      </div>
      <section>
        <h2>Como funciona</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem odio perspiciatis dolore ratione consectetur voluptatum eum architecto dolorem, quaerat odit, dolorum iusto vitae est ad, pariatur iste. Possimus laborum eaque pariatur mollitia voluptates praesentium eos, maxime fuga aut velit alias placeat dicta numquam aperiam, atque quam est! Molestias, itaque perspiciatis!</p>
        <button className={style.btnCenter}>Saiba mais</button>
      </section>
    </div>
  );
}
