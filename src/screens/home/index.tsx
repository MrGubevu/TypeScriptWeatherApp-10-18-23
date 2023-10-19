import React, { useEffect, useState } from 'react';
import { useWeather } from '../../hooks/useWeather/useWeather';
import { TodaysWeather } from '../../hooks/useWeather/types';
import WeatherComponent from '../../components/weatherForecastView';

function CurrentDayWeatherView({
  todaysWeather: {
    temperature,
    tempLow,
    tempMax,
    description,
  },
}: {
  todaysWeather: TodaysWeather;
}) {
  return (
    <div>
      <p>{temperature}°C</p>
      <p>Description: {description}</p>
      <p>Low Temperature: {tempLow}°C</p>
      <p>High Temperature: {tempMax}°C</p>
    </div>
  );
}

export const Home: React.FC = () => {
  const { getCurrentWeather } = useWeather();
  const [weatherData, setWeatherData] = useState<TodaysWeather | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const weather = await getCurrentWeather();
        setWeatherData(weather);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };
    fetchData();
  }, [getCurrentWeather]);

  return (
    <div>
     
      {weatherData && <CurrentDayWeatherView todaysWeather={weatherData} />}
      <WeatherComponent />
    </div>
  );
};

export default Home;
