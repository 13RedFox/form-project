import styles from './Input.module.scss';

const Input = ({ type, label }) => {
  return (
    <label htmlFor="input">
      {label}
      <input type={type} className={styles.input} />
    </label>
  );
};

export default Input;
