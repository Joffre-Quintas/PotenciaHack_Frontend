import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import styles from './TrilhaCard.module.scss';

export default function TrilhaCard(props) {


  return (
    <div className={styles.container}>
      <img src={props.imagem} alt="" />
      <div className={styles.div_direita}>
        <h1>{props.titulo_trilha}</h1>
        <p>{props.paragrafo_trilha}</p>
        <Link to={`/trilhaespecifica/${props.id}`}>
          <button className='btnVariableCuverd'>Saiba Mais</button>
        </Link>
      </div>
    </div>
  );
}
