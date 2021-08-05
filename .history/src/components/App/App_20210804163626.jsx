import React from 'react';
import Button from '../Button/Button';
// import Input from '../Input/Input';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.wrapper}>
      {/* <Input type="text" />
      <Input type="password" /> */}
      <Button label="Sign in" disabled={true} />
    </div>
  );
}

export default App;
