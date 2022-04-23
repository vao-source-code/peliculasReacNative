import normalize from "react-native-normalize";
import { StyleSheet, Dimensions } from "react-native";

const homeStyle = StyleSheet.create({
  activityIndicator: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  carrousel: {
    height: normalize(400),
  },
  flatPopular: {
    backgroundColor: "red",
    height: normalize(260),
  },

  flatText: {
    fontSize: normalize(20),
    fontWeight: "bold",
  },
});

const screenHeight = Dimensions.get("screen").height;

const detailStyle = StyleSheet.create({
  posterImage: {
    flex: 1,
  },

  imageContainer: {
    width: "100%",
    height: screenHeight * 0.7,

    //overflow: "hidden",
    borderRadius: normalize(20),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.24,
    shadowRadius: 3.84,
    elevation: 4,

    borderBottomEndRadius: normalize(25),
    borderBottomStartRadius: normalize(25),

  
  },

  imageBorder:{
      flex: 1,
      overflow: "hidden",
    borderBottomEndRadius: normalize(25),
    borderBottomStartRadius: normalize(25),

  },

  marginContainer:{

    marginHorizontal:normalize(20),
    marginTop:normalize(20),

  },

  subTitle:{
    fontSize: normalize(16),
    opacity: 0.8
  },

  title:{
    fontSize: normalize(20),
    fontWeight: 'bold',
  },
});

const Theme = {
  homeStyle,
  detailStyle,
};

export default Theme;
