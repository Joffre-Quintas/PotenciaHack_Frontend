import React, { useState } from 'react';
import styles from './TestePerfilRadio.module.scss';

import Radio from '../../components/Radio/Radio';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';

const TestePerfilRadio = () => {
    const [state, setState] = useState({
        comunicativo: 0,
        utilizaComputador: 0,
        amaTecnologia: 0,
        melhorComNumeros: 0,
        prefereArtes: 0
    });

    const handleChange = (key, value) => {
        setState((prevState) => ({
            ...prevState,
            [key]: value,
        }));
    };

    return (
        <div className={styles.formulario}>
            <h2>Teste de Perfil</h2>
            <div className={styles.pergunta}>
                <p>Você é muito comunicativo?</p>
                <Radio
                    value={state.comunicativo}
                    total={7}
                    onChange={(value) => handleChange('comunicativo', value)}
                />
            </div>
            <div className={styles.pergunta}>
                <p>Você utiliza muito o computador?</p>
                <Radio
                    value={state.utilizaComputador}
                    total={7}
                    onChange={(value) => handleChange('utilizaComputador', value)}
                />
            </div>
            <div className={styles.pergunta}>
                <p>Você ama tecnologia?</p>
                <Radio
                    value={state.amaTecnologia}
                    total={7}
                    onChange={(value) => handleChange('amaTecnologia', value)}
                />
            </div>
            <div className={styles.pergunta}>
                <p>Você é melhor com números?</p>
                <Radio
                    value={state.melhorComNumeros}
                    total={7}
                    onChange={(value) => handleChange('melhorComNumeros', value)}
                />
            </div>
            <div className={styles.pergunta}>
                <p>Você prefere Arte que Matemática?</p>
                <Radio
                    value={state.prefereArtes}
                    total={7}
                    onChange={(value) => handleChange('prefereArtes', value)}
                />
            </div>
            <Link to="/testeresultado">
                <Button estilo="buttonConcluirTeste" title="Concluir Teste" />
            </Link>
        </div>
    );
};

export default TestePerfilRadio;
