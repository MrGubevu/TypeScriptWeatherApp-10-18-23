import React from "react";
import { View, Text, FlatList, Image, SafeAreaView } from "react-native";
import { useForecastData } from "../../hooks/useWeather/useWeatherForecast";
import { WeatherForecastData } from "../../hooks/useWeather/types";

const WeatherComponent: React.FC = () => {
  const { forecastData, isLoading } = useForecastData();

  const renderForecastItem = ({ item }: { item: WeatherForecastData }) => {
    const timestamp = item.dt;
    const date = new Date(timestamp * 1000);
    const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "long" });
    const kelvinTemperature = item.main.temp;
    const celsiusTemperature = (kelvinTemperature - 273.15).toFixed(0);
    return (
      <View>
        <Text>{dayOfWeek}</Text>
        <Image source={require("../../assets/Icons/partlysunny@2x.png")} />
        <Text>{celsiusTemperature}°C</Text>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View>
        {isLoading ? (
          <Text>Loading forecast data...</Text>
        ) : (
          <FlatList data={forecastData} renderItem={renderForecastItem} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default WeatherComponent;
