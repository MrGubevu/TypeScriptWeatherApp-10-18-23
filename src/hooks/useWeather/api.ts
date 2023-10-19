import { WeatherForecastData } from "./types";
import { FORECAST_API_KEY } from './constants'

const forecastUrl = FORECAST_API_KEY

// Simulate fetching weather data (replace with actual API call)
export const fetchWeatherData = async (): Promise<WeatherForecastData[]> => {
  try {
    // Replace this with your actual API call to fetch weather data
    const response = await fetch(forecastUrl);
    const data = await response.json();
    return data.list; // Assuming the API response has a "list" property
  } catch (error) {
    throw error;
  }
};
