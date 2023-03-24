import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { days, getDayIndex } from "../helpers/helpers";
import { Forecastday } from "../types/WeatherType";

export const WeatherCard = ({ data }: { data: Forecastday }) => {
  const celsius = "°C  ";

  return (
    <View style={styles.container}>
      <View style={styles.leftPart}>
        <View style={styles.imagePart}>
          <Text>{getDayIndex(data.date)}</Text>
          <Image
            style={styles.icon}
            source={{ uri: `https://${data.day.condition.icon}` }}
          />
        </View>

        <View style={styles.conditionPart}>
          <Text style={{ fontSize: 18 }}>{data.day.condition.text}</Text>
          <Text style={{ fontSize: 14 }}>
            <Text style={{ fontWeight: "500" }}>Min </Text>
            {data.day.mintemp_c}
            {celsius}
            <Text style={{ fontWeight: "500" }}> Max</Text> {data.day.maxtemp_c}{" "}
            {celsius}
          </Text>
        </View>
      </View>

      <View style={styles.rainPart}>
        <Text>{data.day.daily_chance_of_rain}%</Text>
        <Text>Chance of Rain</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    padding: 15,
    borderBottomColor: "#B2FEFA",
    borderBottomWidth: 2,
  },
  leftPart: {
    flexDirection: "row",
    alignItems: "center",
  },
  imagePart: {
    flexDirection: "column",
    width: 80,
  },
  conditionPart: {
    padding: 5,
  },
  rainPart: {
    flexDirection: "column",
    alignItems: "center",
  },
  icon: {
    width: 30,
    height: 30,
  },
});
