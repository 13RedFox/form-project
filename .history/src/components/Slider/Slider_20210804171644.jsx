import styles from './Slider.module.scss';

const Slider = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.card}>
        <div className={styles.wrapperImg}>
          <img src="#" alt="Slider" />
        </div>
        <h2 className={styles.title}></h2>
      </div>
    </div>
  );
};

export default Slider;
