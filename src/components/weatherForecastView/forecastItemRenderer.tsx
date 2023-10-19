// forecastItemRenderer.ts
import React from "react";
import { View, Text, Image } from "react-native";
import { ForecastData } from "../../hooks/useWeather/types";

export const renderForecastItem = ({ item }: { item: ForecastData }) => {
  const timestamp = item.dt;
  const date = new Date(timestamp * 1000);
  const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "long" });
  const kelvinTemperature = item.main.temp; // Change 'temperature' to 'temp'
  const celsiusTemperature = (kelvinTemperature - 273.15).toFixed(0);

  return (
    <View>
      <View>
        <Text>{dayOfWeek}</Text>
      </View>
      <Image
        source={require("./assets/partlysunny@2x.png")}
      />
      <View>
        <Text>{celsiusTemperature}°C</Text>
      </View>
    </View>
  );
};
