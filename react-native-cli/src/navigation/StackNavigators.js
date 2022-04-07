import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";

const Stack = createNativeStackNavigator();

export const MainStackNavigator = () => (
    <Stack.Navigator initialRouteName="Login"
        screenOptions={{
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#ee125a',
            }
        }}
    >
        <Stack.Screen name='Login' component={LoginScreen}
            options={{ headerShown: false }} />
        <Stack.Screen name='Home' component={HomeScreen} />
    </Stack.Navigator>
);

