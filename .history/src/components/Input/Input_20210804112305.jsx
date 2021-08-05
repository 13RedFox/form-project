import styles from './Input.module.scss';

const Input = ({ type }) => {
  return <input type={type} className={styles.input} />;
};

export default Input;
