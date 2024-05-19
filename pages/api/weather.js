import axios from 'axios';

// eslint-disable-next-line import/no-anonymous-default-export
export default async function handler(req, res) {
  
}
// export default function handler(req, res){
//   const { location } = req.query;
//   const weatherApiKey = process.env.WEATHER_API_KEY;
//   const loc = getLatLong(location, weatherApiKey);
//   const lat = loc[0].lat;
//   const lon = loc[0].lon;
//   const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid={weatherApiKey}`;

//   try {
//     const response = axios.get(weatherUrl);
//     res.status(200).json(response.data);
//   } catch (error) {
//     res.status(500).json({ error: 'Error fetching weather data' });
//   }
// };
