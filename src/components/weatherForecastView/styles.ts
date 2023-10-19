// WeatherComponent/styles.ts
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingBottom: 30,
  },
  forecastItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between", // Use justifyContent instead of alignItems
    width: 340,
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  weatherIcon: {
    width: 30,
  },
  textFont: {
    color: "white",
    fontSize: 20,
  },
});

export default styles;
