import React, { useEffect } from 'react';
import { Provider, useDispatch } from "react-redux";
import createStore from './src/app/redux';
import StoreWrapper from "./src/app/api/StoreWrapper";
import AppRoute from './src/app/routes'
import { StatusBar } from "expo-status-bar";
import { validateSession } from "./src/app/redux/actions/auth-actions";

const store = createStore();
StoreWrapper.setStore(store);

export default function App() {
  return (
    <Provider store={store}>
      <AppWrapper />
      <StatusBar style="auto"/>
    </Provider>
  );
}

const AppWrapper = () => {
  const dispatch = useDispatch();

  // De forma similar a componentDidMount y componentDidUpdate
  useEffect(() => {
    dispatch(validateSession())
    // Safe to add dispatch to the dependencies array
  }, [ dispatch ]);

  return (
    <AppRoute/>
  );
}
