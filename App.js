import React, { Component } from "react";
import StackNavigator from "./stack";
import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";

let customFonts = {
  "Enchanted-land": require("./assets/Enchanted Land.ttf"),
};

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      fontLoade: false,
    };
  }

  loadFont = async () => {
    console.log(this.state.fontLoade);
    await Font.loadAsync(customFonts);
    this.setState({ fontLoade: true });
    console.log(this.state.fontLoade);
  };
  componentDidMount() {
    this.loadFont();
  }
  render() {
    if (this.state.fontLoade) {
      return (
        <NavigationContainer>
          <StackNavigator></StackNavigator>
        </NavigationContainer>
      );
    }
    return null;
  }
}
