import { useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import WeatherDisplay from '../components/WeatherDisplay';
import styles from '../styles/Home.module.css';
import Layout from '@/components/Layout';

const Home = () => {
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    try {
      setError(null);
      const response = await getWeatherDetails(location);
      setWeather(response);
    } catch(err) {
      setError(err.response ? err.response.data.error : 'Error fetching weather data');
    }
  };

  const getWeatherDetails = async (location) => {
    try {
  
      if (!location) {
        return res.status(400).json({ error: 'Location is required' });
      }

      const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
      const loc = await getLatLong(location, apiKey);

      const lat = loc.data[0].lat;
      const lon = loc.data[0].lon;
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  
      // Fetch weather data asynchronously
      const response = await axios.get(weatherUrl);
      const weatherData = response.data;
  console.log("weatherdata > ", weatherData)
      // Return weather data as JSON response
      return weatherData
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }

  const getLatLong = async (location, weatherApiKey) => {
    return new Promise ((resolve, reject) => {
      try {
        const res = axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${location},,IND&appid=${weatherApiKey}`);
        resolve(res)
      } catch (err) {
        reject(err);
        console.error(err);
      }
    })
  }

  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Travel Itinerary Planner</title>
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>Travel Itinerary Planner</h1>

          <SearchBar location={location} setLocation={setLocation} fetchWeather={fetchWeather} />

          {error && <p className={styles.error}>{error}</p>}
          {weather && <WeatherDisplay weather={weather} />}
        </main>
      </div>
    </Layout>
  );
}


export default Home;