import React from 'react';
import styles from './Radio.module.scss';

const Radio = ({ value, total, onChange }) => {
  const getBolinhaSize = (index) => {
    if (index === 0 || index === 1) {
      return styles.large;
    } else if (index === 2 || index === 4) {
      return styles.medium;
    } else if (index === 3) {
      return styles.small;
    } else {
      return styles.large;
    }
  };

  const renderBolinhas = () => {
    const bolinhas = [];

    for (let i = 0; i < total; i++) {
      const selected = i + 1 === value ? styles.selected : '';
      const sizeClass = getBolinhaSize(i);

      bolinhas.push(
        <div
          key={i}
          className={`${styles.bolinha} ${selected} ${sizeClass}`}
          onClick={() => onChange(i + 1)}
        />
      );
    }

    return bolinhas;
  };

  return <div className={styles['bolinhas-container']}>{renderBolinhas()}</div>;
};

export default Radio;
