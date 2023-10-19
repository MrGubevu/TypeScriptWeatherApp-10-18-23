import React, { useEffect, useState } from 'react';
import { useLocation } from '../../hooks/useLocation/useLocation';
import { useWeather } from '../../hooks/useWeather/useWeather';
import { TodaysWeather } from '../../hooks/useWeather/types';
import TemperatureInDegrees from '../temperatureInDegrees';

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
    //remember to style
    <div className='WeatherViewContainer'>
        <div className='CurrentDayWeatherView'>
        <TemperatureInDegrees
        temperature={temperature}
        fontWeight={800}
        fontSize={30}
        isUpperCase
        />
          <div>
              <p >Description: {description}</p>
          </div>
          </div>
          <div className='CurrentDayweatherSummary'>
              <p>Low Temperature: {tempLow}°C</p>
              <p>High Temperature: {tempMax}°C</p>
              <p>Current Tempreture: {temperature}°C</p>
          </div>

    </div>
    
  );
}

export const CurrentWeatherView: React.FC = () => {
  const { getCurrentLocation } = useLocation();
  const { getCurrentWeather } = useWeather();
  const [currentLocation, setCurrentLocation] = useState({ latitude: 0, longitude: 0 });
  const [weatherData, setWeatherData] = useState<TodaysWeather | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const location = await getCurrentLocation();
        setCurrentLocation(location);
        const weather = await getCurrentWeather();
        setWeatherData(weather);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [getCurrentLocation, getCurrentWeather]);

  return (
    <div>
      <h1>Current Weather</h1>
      <p>Latitude: {currentLocation.latitude}</p>
      <p>Longitude: {currentLocation.longitude}</p>
      {weatherData && <CurrentDayWeatherView todaysWeather={weatherData} />}
    </div>
  );
};
