import React from 'react';
import styles from './Button.module.scss';

const Button = ({ label, disabled }) => {
  return (
    <button className={styles.button} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
