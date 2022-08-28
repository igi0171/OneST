import styles from "./Forecast.module.css";

const Forecast = ({ data }) => {
  return (
    <div className={styles.weather}>
      <div className={styles.box}>
        <div>
          <p className={styles.area}>{data.area}</p>
          <p className={styles.weatherDescription}>{data.forecast}</p>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
