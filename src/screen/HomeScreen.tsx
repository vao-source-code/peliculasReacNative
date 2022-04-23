import React, { useEffect } from "react";

import {
  View,
  ActivityIndicator,
  Dimensions,
  ScrollView,
} from "react-native";
import normalize from "react-native-normalize";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Carousel from "react-native-snap-carousel";

import { HorizontalSlider } from "../components/HorizontalSlider";
import { MoviePoster } from "../components/MoviePoster";
import { useMovies } from "../hooks/useMovies";
import Theme from "./Theme.style";

const { width: windowWidth } = Dimensions.get("window");

export const HomeScreen = () => {
  const { homeStyle } = Theme;
  const { top } = useSafeAreaInsets();
  /*useEffect(()=> {
            movieDB.get<MovieDBNowPlaying>('/now_playing')
                .then( resp => {
                    console.log(resp.data.results[0].title)
                });
    }, []) */

  const { nowPlaying , popular , topRated , upcoming, isLoading } = useMovies();

  if (isLoading) {
    return (
      <View style={homeStyle.activityIndicator}>
        <ActivityIndicator color={"blue"} size={20} />
      </View>
    );
  }


  return (

    <ScrollView>

<View style={{ marginTop: top }}>
      {/* Crousel */}
      <View style={homeStyle.carrousel}>
        <Carousel
          data={nowPlaying}
          renderItem={({ item }: any) => <MoviePoster movie={item} />}
          sliderWidth={windowWidth}
          itemWidth={normalize(230)}
          inactiveSlideOpacity={0.9}
        />
      </View>

    

      <HorizontalSlider  title="Populares" movie={popular}/>
      <HorizontalSlider  title="Lo mas recomendados" movie={topRated}/>
      <HorizontalSlider  title="Proximas a estrenarse" movie={upcoming}/>

    </View>
    </ScrollView>
    
  );
};
