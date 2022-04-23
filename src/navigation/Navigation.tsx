import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screen/HomeScreen";
import { DetailScreen } from "../screen/DetailScreen";
import { Movie } from "../interfaces/movieInterfaces";


export type RootStackParams = {
  HomeScreen: undefined;
  DetailScreen: Movie; 

}
const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false,
        cardStyle:{
            backgroundColor: 'white',
        }
    }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
};
