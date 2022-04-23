import React, { Component } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import routes from "./src/app/routes";
import createStore from './src/app/redux';
import StoreWrapper from "./src/app/api/StoreWrapper";
import { validateSession } from "./src/app/redux/actions/AuthActions";
import { connect } from 'react-redux';

const store = createStore();
StoreWrapper.setStore(store);

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: false
    };
  }

  renderRoutes() {
    const signed = this.isSigned();

    return routes(signed);
  }

  isSigned() {
    const { loading, session, authorized } = this.props.session;

    return !loading && session && authorized;
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
