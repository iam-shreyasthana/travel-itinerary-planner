const WeatherDisplay = ({ weather }) => (
  <div>
    <h2>Weather in {weather.name}</h2>
    <p>Temperature: {weather.main.temp}°C</p>
    <p>Condition: {weather.weather[0].description}</p>
  </div>
);

export default WeatherDisplay;
