import React from "react";
import { View  , StyleSheet, FlatList, Text} from "react-native";
import { Movie } from "../interfaces/movieInterfaces";
import normalize from "react-native-normalize";
import { MoviePoster } from "../components/MoviePoster";

interface Props {
  title?: string;
  movie: Movie[];
  cardWidth?: number;
  cardHeight?: number; 
}
export const HorizontalSlider = ({ title, movie , cardWidth = normalize(140) , cardHeight= normalize(210)}: Props) => {
  return (
    <View style={[horizontalSliderStyle.flatPopular , 
            (title)?  {height: normalize(260)} : {height: normalize(220) , paddingTop: normalize(7)}]}>
     { title &&  <Text style={horizontalSliderStyle.flatText}>{title}</Text> }
      <FlatList
        data={movie}
        renderItem={({ item }: any) => (
          <MoviePoster
            movie={item}
            width={cardWidth}
            height={cardHeight}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const horizontalSliderStyle = StyleSheet.create({

    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    carrousel:{
        height: normalize(400),
    

    },
    flatPopular:{
        
      
        
    },

    flatText:{
        fontSize: normalize(20),
        fontWeight: 'bold',
        marginHorizontal: normalize(10),
        marginBottom: normalize(10)
    },
});

