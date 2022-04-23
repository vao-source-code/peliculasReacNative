import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { RootStackParams } from "../navigation/Navigation";
import Theme from "./Theme.style";
import Icons from "react-native-vector-icons/Ionicons";
import { useMovieDetails } from "../hooks/useMovieDetails";
import { MovieDetails } from "../components/MovieDetails";

const screenHeight = Dimensions.get("screen").height;

interface Props extends StackScreenProps<RootStackParams, "DetailScreen"> {}

export const DetailScreen = ({ route }: Props) => {
  const { detailStyle } = Theme;
  const movie = route.params;

  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const { isLoading, movieFull, cast } = useMovieDetails(movie.id);

  return (
    <ScrollView>
      <View style={detailStyle.imageContainer}>
        <View style={detailStyle.imageBorder}>
          <Image source={{ uri }} style={detailStyle.posterImage} />
        </View>
      </View>

      <View style={detailStyle.marginContainer}>
        <Text style={detailStyle.subTitle}>{movie.original_title}</Text>
        <Text style={detailStyle.title}>{movie.title}</Text>
      </View>

     
        {isLoading ? (
          <ActivityIndicator size={30} color="grey" />
        ) : (
          <MovieDetails movieFull={movieFull!}  cast={cast}/>
          
        )}
    </ScrollView>
  );
};
