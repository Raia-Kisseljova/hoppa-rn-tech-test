import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { returnColor, returnImage } from "../helpers/helpers";
import { Weather } from "../types/WeatherType";

export const WeatherBanner = ({ weatherData }: { weatherData: Weather }) => {
  return (
    <View style={styles.bannerContainer}>
      <LinearGradient
        style={styles.banner}
        colors={returnColor(weatherData!.current.condition.text)}
      >
        <Text style={styles.texts}>{weatherData.location.name}</Text>
        <Image
          source={returnImage(weatherData.current.condition.text)}
          style={styles.imageWeather}
        />
        <Text style={styles.bannerCelsius}>{weatherData.current.temp_c}°</Text>
        <Text style={styles.texts}>{weatherData.current.condition.text}</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    width: "60%",
    height: 230,
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10,
  },
  bannerContainer: {
    alignItems: "center",
  },
  bannerCelsius: {
    fontSize: 30,
    fontWeight: "500",
    color: "white",
  },
  imageWeather: {
    width: 120,
    height: 120,
  },
  texts: {
    color: "white",
    zIndex: 2,
    fontSize: 18,
  },
});
