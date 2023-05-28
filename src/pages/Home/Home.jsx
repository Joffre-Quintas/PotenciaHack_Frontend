import React, { useEffect, useState } from 'react'
import TrilhaCard from '../../components/trilhaCard/TrilhaCard'


export default function Home() {
  const [courses, setCourses] = useState([]);

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

  const limitedCourses = courses.slice(0, 4);

  return (
    <div className='container'>
      <div>
        {limitedCourses.map((course) => (
          <TrilhaCard
            key={course.id} 
            titulo_trilha={course.title}
            paragrafo_trilha={course.short}
            imagem={course.img}
          />
        ))}
      </div>
    </div>
  );
}
