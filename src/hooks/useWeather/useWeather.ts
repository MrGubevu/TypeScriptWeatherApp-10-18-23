// hooks/useWeather.ts
import axios from "axios";
import { CurrentCoordinates } from "../useLocation/types";
import { TodaysWeather } from "./types";
import { useLocation } from "../useLocation/useLocation";
import { API_KEY } from "./constants";
import { LOCATION_API_KEY } from "../useLocation/constants";
import { LOCATION_API_URL } from "../useLocation/constants"
import { WEATHER_URL } from "./constants"

// Define API keys and URLs
const GOOGLE_GEOLOCATION_API_KEY =  LOCATION_API_KEY
const OPENWEATHERMAP_API_KEY = API_KEY;
const GEOLOCATION_API_URL = LOCATION_API_URL;
const WEATHER_API_URL = WEATHER_URL ;

export function useWeather(): {
  getCurrentWeather: () => Promise<TodaysWeather | null>;
} {
  const { getCurrentLocation } = useLocation();

  const getCurrentWeather = async (): Promise<TodaysWeather | null> => {
    try {
      const { latitude, longitude } = await getCurrentLocation();

      // Call Google Geolocation API to get the user's location details
      const geolocationResponse = await axios.post(
        `${GEOLOCATION_API_URL}?key=${GOOGLE_GEOLOCATION_API_KEY}`,
        {
          
        }
      );

        

      if (geolocationResponse.data && geolocationResponse.data.location) {
        const { lat, lng } = geolocationResponse.data.location;

        // Call OpenWeatherMap API to get the current weather based on latitude and longitude
        const weatherResponse = await axios.get(
          `${WEATHER_API_URL}?lat=${lat}&lon=${lng}&appid=${OPENWEATHERMAP_API_KEY}&units=metric`
        );

        if (weatherResponse.status === 200) {
          const weatherData = weatherResponse.data;
          const temperature = Math.round(weatherData.main.temp);
          const description = weatherData.weather[0].description;
          const tempLow = Math.round(weatherData.main.temp_min);
          const tempMax = Math.round(weatherData.main.temp_max);

          return { temperature, description, tempLow, tempMax };
        } else {
          throw new Error("Failed to fetch weather data");
        }
      } else {
        throw new Error("Failed to fetch location data");
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      return null;
    }
  };

  return { getCurrentWeather };
}

