interface TodaysWeather {
    temperature: number;
    description: string;
    tempLow: number;
    tempMax: number;
  }

  interface WeatherApiResponse {
    ok: boolean;
    result: unknown;
    error: unknown;
  }

  interface WeatherForecastData {
    main: {
      temp: number
    }
    dt: number;
    type: string;
    temperature: number;
    day: string;
    
  }

export type {
    TodaysWeather,
    WeatherApiResponse,
    WeatherForecastData
}
