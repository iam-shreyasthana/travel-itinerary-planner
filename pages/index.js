import Head from 'next/head';
import styles from '../styles/Home.module.css';
import axios from 'axios';
import { useState } from 'react';
import Layout from '../components/Layout';
import WeatherDisplay from '../components/WeatherDisplay';

export default function Home() {
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState(null);
console.log(location, "location")
  const fetchWeather = async () => {
    const response = await axios.get(`/api/weather?location=${location}`);
    setWeather(response.data);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Travel Itinerary Planner</title>
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>Travel Itinerary Planner</h1>
          
          <div>
            <input 
              type="text" 
              value={location} 
              onChange={(e) => setLocation(e.target.value)} 
              placeholder="Enter location"
            />
            <button onClick={fetchWeather}>Get Weather</button>
          </div>

          {weather && <WeatherDisplay weather={weather} />}
        </main>
      </div>
    </Layout>
  );
}
