import styles from "./Forecast.module.css";

const Forecast = () => {
  return (
    <div className={styles.weather}>
      <div className={styles.box}>
        <div>
          <p className={styles.area}>Ang Mo Kio</p>
          <p className={styles.weatherDescription}>Sunny</p>
        </div>
        <img alt="weather" className={styles.weatherIcon} src="icons/01d.png" />
      </div>
    </div>
  );
};

export default Forecast;
