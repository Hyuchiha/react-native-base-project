import React, { Component } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import routes from "./src/app/routes";

export default class App extends Component {

  renderRoutes() {
    return routes;
  }

  render() {
    return (
      <NavigationContainer>
        { this.renderRoutes() }
      </NavigationContainer>
    );
  }
}
