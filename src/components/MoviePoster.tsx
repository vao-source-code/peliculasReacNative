import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import normalize from "react-native-normalize";

import { Movie } from "../interfaces/movieInterfaces";

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}
export const MoviePoster = ({
  movie,
  height = normalize(350),
  width = normalize(220),
}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const navigation = useNavigation();

  return (
    <TouchableOpacity 
    activeOpacity={0.8}
    onPress= {() => navigation.navigate('DetailScreen' , movie)}
    style={{ width, height, marginHorizontal: normalize(8) }}
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri }} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: normalize(20),
  },

  body: {
    width: normalize(220),
    height: normalize(350),
  },

  imageContainer: {
    flex: 1,
    borderRadius: normalize(20),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.24,
    shadowRadius: 3.84,

    elevation: 4,
  },
});
