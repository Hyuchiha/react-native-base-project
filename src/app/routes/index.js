import Home from "../screens/Home/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../screens/Enrollment/Welcome";

const Stack = createNativeStackNavigator();

const publicRoutes = (
  <Stack.Navigator>
    <Stack.Screen name="Welcome" component={Welcome} />
  </Stack.Navigator>
);

const routes = (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);

const buildRoutes = (isSigned) => {
  return isSigned ? routes : publicRoutes
}

export default buildRoutes;
