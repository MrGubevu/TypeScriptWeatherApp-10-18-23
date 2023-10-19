import { useState, useEffect } from "react";
import { WeatherForecastData } from "./types";

export const useForecastData = () => {
  const [forecastData, setForecastData] = useState<WeatherForecastData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const apiKey = "ea746b888533cc57dee30c0998719314";
    const apiUrl =
      "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}";

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const url = apiUrl
          .replace("{lat}", latitude.toString())
          .replace("{lon}", longitude.toString())
          .replace("{API key}", apiKey);

        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            const uniqueDays: { [key: string]: boolean } = {};
            const filteredData = data.list.filter((item: WeatherForecastData) => {
              const date = new Date(item.dt * 1000).toLocaleDateString("en-US");
              if (!uniqueDays[date]) {
                uniqueDays[date] = true;
                return true;
              }
              return false;
            });

            setForecastData(filteredData);
            setIsLoading(false);
          })
          .catch((error) => {
            console.error("Error fetching weather data:", error);
            setIsLoading(false);
          });
      },
      (error) => {
        console.error("Error getting user's location:", error);
        setIsLoading(false);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }, []);

  return { forecastData, isLoading, useForecastData };
};
