import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../../screens/Enrollment/Welcome";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='Welcome'
      options={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
