import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./navs/app-navigator";
import AuthNavigator from "./navs/auth-navigator";
import SplashNavigator from "./navs/splash-navigator";
import { useSelector } from "react-redux";
import { selectIsLoadingSession, selectIsLoggedIn } from "../redux/reducers/session/session-reducer";

const AppRoute = () => {
  const isLoadingSession = useSelector(selectIsLoadingSession);
   const isLoggedIn = useSelector(selectIsLoggedIn);

   let Stack = isLoadingSession ? <SplashNavigator /> : (isLoggedIn ? <AppNavigator /> : <AuthNavigator />);

  return (
    <NavigationContainer>
      {
        Stack
      }
    </NavigationContainer>
  );
}

export default AppRoute;
