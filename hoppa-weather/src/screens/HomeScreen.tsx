import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { WeatherList } from "../components/WeatherList";

import { NativeStackScreenProps } from "@react-navigation/native-stack/lib/typescript/src/types";

export const HomeScreen = ({
  navigation,
  route,
}: NativeStackScreenProps<any, any>) => {
  return (
    <View style={styles.container}>
      <WeatherList navigation={navigation} route={route} />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
