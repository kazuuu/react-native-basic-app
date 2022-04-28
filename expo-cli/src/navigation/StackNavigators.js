import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CadastrarScreen from "../screens/CadastrarScreen";
import Exemplo01Screen from "../screens/Exemplo01Screen";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";

const Stack = createNativeStackNavigator();

export const MainStackNavigator = () => {
    return (
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
            <Stack.Screen name='Cadastrar' component={CadastrarScreen}
                options={{ headerShown: false }} />
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Exemplo01' component={Exemplo01Screen} />
        </Stack.Navigator>
    );
}