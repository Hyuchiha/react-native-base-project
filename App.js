import React, { Component } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import routes from "./src/app/routes";
import createStore from './src/app/redux';
import StoreWrapper from "./src/app/api/StoreWrapper";

const store = createStore();
StoreWrapper.setStore(store);

export default class App extends Component {

  renderRoutes() {
    return routes;
  }

  render() {
    return (
      <Provider store={ store }>
        <NavigationContainer>
          { this.renderRoutes() }
        </NavigationContainer>
      </Provider>
    );
  }
}
