import styles from './Input.module.scss';

const Input = ({ type, label }) => {
  return (
    <label htmlFor="input" className={styles.label}>
      {label}
      <input type={type} className={styles.input} />
    </label>
  );
};

export default Input;
