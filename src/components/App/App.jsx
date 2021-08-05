import React from 'react';
import Form from '../Form/Form';
import Slider from '../Slider/Slider';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.wrapper}>
      <Slider />
      <Form />
    </div>
  );
}

export default App;
