import React from 'react'
import TrilhaCard from '../../components/trilhaCard/TrilhaCard'
import img_redes from '../../imgs/redes.png'
import img_design from '../../imgs/design.png'
import img_programacao from '../../imgs/programacao.png'
import img_negocios from '../../imgs/negocios.png'
import styles from './Home.module.scss'

import Slide from '../../components/Slide/Slide';

export default function Home() {
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

  return (
    <div className='container'>
      <div>
        <TrilhaCard
          titulo_trilha="Redes"
          paragrafo_trilha="Saiba o que ensinamos e como isso pode impactar na sua carreira:"
          imagem={img_redes}
          />
        <TrilhaCard
          titulo_trilha="Programação"
          paragrafo_trilha="Saiba o que ensinamos e como isso pode impactar na sua carreira:"
          imagem={img_programacao}
          />
        <TrilhaCard
          titulo_trilha="Negócios"
          paragrafo_trilha="Saiba o que ensinamos e como isso pode impactar na sua carreira:"
          imagem={img_negocios}
          />
        <TrilhaCard
          titulo_trilha="Design"
          paragrafo_trilha="Saiba o que ensinamos e como isso pode impactar na sua carreira:"
          imagem={img_design}
          />
      </div>
      <section>
        <h2>Cursos Online</h2>
        <Slide array={events}/>
      </section>
      <section>
        <h2>Hackathons</h2>
        <Slide array={events}/>
      </section>
    </div>
  )
}
