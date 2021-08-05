import styles from './Form.module.scss';
import { ReactComponent as LogoIcon } from '../../assets/logo.svg';

const Form = () => {
  return (
    <div className={styles.form}>
      <LogoIcon className={styles.icon} />
      <form action="#">
        <h1 className={styles.title}>Sign in</h1>
        <p className={styles.text}>
          Don’t have an account?
          <a href="#" className={styles.signUp}>
            Sign up now
          </a>
        </p>
      </form>
    </div>
  );
};

export default Form;
