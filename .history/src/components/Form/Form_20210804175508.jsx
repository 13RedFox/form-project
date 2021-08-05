import styles from './Form.module.scss';
import { ReactComponent as LogoIcon } from '../../assets/logo.svg';

const Form = () => {
  return (
    <div className={styles.form}>
      <LogoIcon className={styles.icon} />
    </div>
  );
};

export default Form;
