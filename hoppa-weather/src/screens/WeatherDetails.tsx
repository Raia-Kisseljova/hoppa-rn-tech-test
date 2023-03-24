import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { days, getDayIndex } from "../helpers/helpers";
import { Forecastday } from "../types/WeatherType";
import { NativeStackScreenProps } from "@react-navigation/native-stack/lib/typescript/src/types";

type RootStackParamList = {
  WeatherDetails: { object: Forecastday };
};

export const WeatherDetails = (
  props: NativeStackScreenProps<RootStackParamList, any>
) => {
  const params = props.route.params!.object;
  const celsius = "°C  ";

  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Text>{getDayIndex(params.date)}</Text>
        <Image
          style={styles.icon}
          source={{ uri: `https://${params.day.condition.icon}` }}
        />
        <Text style={{ fontSize: 20, fontWeight: "400" }}>
          {params.day.condition.text}
        </Text>
        <Text style={{ fontSize: 14 }}>
          <Text style={{ fontWeight: "500" }}>Min </Text>
          {params.day.mintemp_c}
          {celsius}
          <Text style={{ fontWeight: "500" }}> Max</Text> {params.day.maxtemp_c}{" "}
          {celsius}
        </Text>
        <Text>{params.day.daily_chance_of_rain}% Chance of Rain</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    paddingTop: 50,
    alignItems: "center",
  },
  details: {
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 100,
    height: 100,
  },
});
