import React from "react";
import { View, Text, StyleSheet } from "react-native";
import normalize from "react-native-normalize";
import Icons from "react-native-vector-icons/Ionicons";
import currencyFormatter from 'currency-formatter';

import { Cast } from "../interfaces/creditsInterface";
import { MovieFull } from "../interfaces/movieInterfaces";



interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}
export const MovieDetails = ({ movieFull, cast }: Props) => {
  return (
    <>
      {/* Detalles */}
      <View style={styles.detailConteiner}>
        <View style={styles.row}>
          <Icons name="star-outline" color="grey" size={normalize(18)} />

          <Text style={styles.textDetail}>{movieFull.vote_average}</Text>

          <Text style={styles.textDetail}>
            - {movieFull.genres.map((g) => g.name).join(", ")}
          </Text>
        </View>

        {/*Historia */}

        <Text style={styles.textTitle}>Historia</Text>

        <Text style={styles.text}>{movieFull.overview}</Text>

        {/*Presupuesto */}

        <Text style={styles.textTitle}>Presupuesto</Text>

        <Text style={styles.text}>{ currencyFormatter.format( movieFull.budget , {code: 'USD'}) }</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },

  detailConteiner: {
    marginHorizontal: normalize(20),
  },

  textDetail: {
    marginHorizontal: normalize(5),
  },

  textTitle: {
    fontSize: normalize(18),
    marginTop: normalize(10),
    fontWeight: "bold",
  },

  text: {
    fontSize: normalize(14),
  },
});
