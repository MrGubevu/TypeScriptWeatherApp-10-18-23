import React, { useEffect, useState } from 'react';
import { useWeather } from '../../hooks/useWeather/useWeather';
import { TodaysWeather } from '../../hooks/useWeather/types';

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
      <h2>Today's Weather</h2>
      <p>Temperature: {temperature}°C</p>
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
    </div>
  );
};

export default Home;
