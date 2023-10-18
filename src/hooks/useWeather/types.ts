interface TodaysWeather {
    temperature: number;
    description: string;
    tempLow: number;
    tempMax: number;
  }


  
  interface WeatherApiResponse {
    ok: boolean
    result: unknown
    error: unknown
  }

export type {
    TodaysWeather,
    WeatherApiResponse
}
  