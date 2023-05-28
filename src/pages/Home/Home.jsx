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

  const limitedCourses = courses.slice(0, 5);

  return (
    <div>
      <section className={style.firstSection}>
        <div className='container'>
          <h1>Participe de um Hacka</h1>
          <div className={style.btnActions}>
            <button className='btnVariableNoFill'><Link to={'/cadastro'}>Inscreva-se</Link></button>
            <button className='btnDefault'><Link to={'/login'}>Já sou aluno</Link></button>
          </div>
        </div>
      </section>
      <section className='container'>
      <h2 className='title'>Próximos Eventos</h2>
      <h3 className='subtitle'>Cursos Online</h3>
      {/* {courses && <Slide array={courses}/>} */}
      </section>
      <section className='container'>
        <h3 className='subtitle'>Hackahtos</h3>
        {events && <Slide array={events}/>}        
      </section>
      <div className='container'>
        <h2 className='title'>Trilhas</h2>
        {limitedCourses.map((course, index) => (
          <TrilhaCard
            key={course.id}
            titulo_trilha={course.title}
            paragrafo_trilha={course.short}
            imagem={course.img}
            id={course.id}
          />
        ))}
        <button className={style.btnCenter}><Link to='/allcourses'>Ver todos os cursos</Link></button>
      </div>
      <section className='container'>
        <h2 className='title'>Como funciona</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem odio perspiciatis dolore ratione consectetur voluptatum eum architecto dolorem, quaerat odit, dolorum iusto vitae est ad, pariatur iste. Possimus laborum eaque pariatur mollitia voluptates praesentium eos, maxime fuga aut velit alias placeat dicta numquam aperiam, atque quam est! Molestias, itaque perspiciatis!</p>
        <button className={style.btnCenter}>Saiba mais</button>
      </section>
    </div>
  );
  
}