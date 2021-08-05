import React from 'react';
import Input from '../Input/Input';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.wrapper}>
      <Input label="Email" type="email" />
    </div>
  );
}

export default App;
