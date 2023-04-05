import React, { Component } from "react";
import { View, ImageBackground, StyleSheet, Text } from "react-native";
import * as Font from "expo-font";

export default class Materia extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <ImageBackground
          source={require("../assets/fundo.jpg")}
          style={Styles.imageBackground}
        >
          <View style={Styles.appTitle}>
            <Text style={Styles.titleText}>Organizador de resumos</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
  },
  appTitle: {
    flex: 0.1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 25,
    fontFamily: "Enchanted-land",
  },
});
