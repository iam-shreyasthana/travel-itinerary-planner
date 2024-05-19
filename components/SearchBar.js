import styles from '../styles/SearchBar.module.css';

const SearchBar = ({ location, setLocation, fetchWeather }) => {
  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter location"
        className={styles.input}
      />
      <button onClick={fetchWeather} className={styles.button}>Get Weather</button>
    </div>
  );
};

export default SearchBar;
