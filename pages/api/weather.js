import axios from 'axios';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  debugger;
  const { location } = req.query;
  const lat = "";
  const lon = "";
  const weatherApiKey = process.env.WEATHER_API_KEY; 
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={weatherApiKey}`;

  try {
    const response = await axios.get(weatherUrl);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching weather data' });
  }
};
