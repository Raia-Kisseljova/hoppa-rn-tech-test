import {
  Text,
  ScrollView,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Loader } from "./Loader";
import { WeatherCard } from "./WeatherCard";
import { Forecastday, Weather } from "../types/WeatherType";
import { WeatherBanner } from "./WeatherBanner";
import { NativeStackScreenProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import { API_KEY } from "@env";
export const WeatherList = ({
  navigation,
}: NativeStackScreenProps<any, any>) => {
  const [isLoading, setIsLoading] = useState(true);
  const [weatherData, setWeatherData] = useState<Weather | null>(null);
  const [searchValue, setSearchValue] = useState("");
  const pressHandler = (item: Forecastday) => {
    navigation.navigate("WeatherDetails", {
      object: item,
    });
  };

  const days = 7;
  const apiKey = API_KEY;
  const london = "london";
  const getWeather = async (inputValue?: string) => {
    try {
      setIsLoading(true);
      const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${
        inputValue ? inputValue : london
      }&days=${days}`;
      const response = await axios.get(url);
      if (response.data) {
        setWeatherData(response.data);

        setIsLoading(false);
      }
    } catch (error) {
      console.log(error, "error");
    }
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {isLoading && weatherData === null ? (
        <Loader />
      ) : (
        <View>
          <TextInput
            onSubmitEditing={() => getWeather(searchValue)}
            style={styles.input}
            placeholder="search"
            value={searchValue}
            onChangeText={(text) => setSearchValue(text)}
          />
          <Pressable
            onPress={() => getWeather(searchValue)}
            style={styles.buttonSearch}
          >
            <Text>Search</Text>
          </Pressable>
          <WeatherBanner weatherData={weatherData!} />

          {weatherData!.forecast.forecastday.map((i: Forecastday) => {
            return (
              <TouchableOpacity
                onPress={() => pressHandler(i)}
                key={i.date_epoch}
              >
                <WeatherCard data={i} />
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
  },
  input: {
    width: "90%",
    borderColor: "#B2FEFA",
    borderWidth: 1,
    padding: 10,
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 25,
    marginBottom: 10,
  },

  buttonSearch: {
    backgroundColor: "#B2FEFA",
    alignSelf: "center",
    padding: 10,
    borderRadius: 25,
    width: "90%",
    borderColor: "#B2FEFA",
    alignItems: "center",
  },
});
