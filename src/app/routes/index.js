import Home from "../screens/Home/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const routes = (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);

export default routes;
