import styles from './Slider.module.scss';

const Slider = () => {
  return (
    <div className={styles.slider}>
      <img src="../../public/top.png" alt="Pic" />
      <div className={styles.card}>
        <div className={styles.wrapperImg}>
          <img src="#" alt="Slider" />
        </div>
        <h2 className={styles.title}>Tokenplace</h2>
        <p className={styles.description}>Multi-exchange Trading Terminal</p>
      </div>
    </div>
  );
};

export default Slider;
