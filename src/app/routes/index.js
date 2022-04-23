import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./navs/app-navigator";
import AuthNavigator from "./navs/auth-navigator";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/reducers/session/session-reducer";

const AppRoute = () => {
   const isLoggedIn = useSelector(selectIsLoggedIn);

   let Stack = isLoggedIn ? <AppNavigator /> : <AuthNavigator />;

  return (
    <NavigationContainer>
      {/* Conditional stack navigator rendering based on login state */}

      {
        Stack
      }
    </NavigationContainer>
  );
}

export default AppRoute;
