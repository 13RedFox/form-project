import styles from './Form.module.scss';
import { ReactComponent as LogoIcon } from '../../assets/logo.svg';
import Input from '../Input/Input';

const Form = () => {
  return (
    <div className={styles.form}>
      <LogoIcon className={styles.icon} />
      <form action="#">
        <h1 className={styles.title}>Sign in</h1>
        <div className={styles.inner}>
          <p className={styles.text}>Don’t have an account?</p>
          <a href="#!" className={styles.signUp}>
            Sign up now
          </a>
        </div>
        <Input label="Email" type="email" />
      </form>
    </div>
  );
};

export default Form;
