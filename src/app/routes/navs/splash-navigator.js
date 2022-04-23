import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../../screens/Enrollment/Splash";

const Stack = createNativeStackNavigator();

const SplashNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Splash'>
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}

export default SplashNavigator;
