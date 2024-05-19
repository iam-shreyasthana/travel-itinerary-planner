import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureHigh, faWind, faCloudSun } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/WeatherDisplay.module.css';

const WeatherDisplay = ({ weather }) => {
  return (
    <div className={styles.weatherDisplay}>
      <h2 className={styles.city}>{weather.name}</h2>
      <div className={styles.weatherInfo}>
        <div className={styles.weatherItem}>
          <FontAwesomeIcon icon={faTemperatureHigh} className={styles.icon} />
          <p className={styles.info}>Temperature: {weather.main.temp}°C</p>
        </div>
        <div className={styles.weatherItem}>
          <FontAwesomeIcon icon={faWind} className={styles.icon} />
          <p className={styles.info}>Wind: {weather.wind.speed} m/s</p>
        </div>
        <div className={styles.weatherItem}>
          <FontAwesomeIcon icon={faCloudSun} className={styles.icon} />
          <p className={styles.info}>Condition: {weather.weather[0].description}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
