import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home/Home";

const Stack = createNativeStackNavigator();

const routes = (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);

export default routes;
