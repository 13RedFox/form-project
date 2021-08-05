import styles from './Input.module.scss';

const Input = ({ type }) => {
  return (
    <label htmlFor="input">
      <input type={type} className={styles.input} />
    </label>
  );
};

export default Input;
