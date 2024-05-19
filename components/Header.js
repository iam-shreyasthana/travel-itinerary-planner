import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.iconContainer}>
        <FontAwesomeIcon icon={faCloudSun} className={styles.icon} />
      </div>
      <h1 className={styles.title}>Weather App</h1>
    </header>
  );
};

export default Header;
