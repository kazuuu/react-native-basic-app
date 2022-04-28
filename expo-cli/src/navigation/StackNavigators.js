import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Exemplo01Screen from "../screens/Exemplo01Screen";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import BottomTabsNavigator from './BottomTabsNavigator';
import AccountScreen from '../screens/AccountScreen';
import MessageScreen from '../screens/MessageScreen';
import OneScreen from '../screens/OneScreen';

const Stack = createNativeStackNavigator();

export const MainStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Login"
            screenOptions={{
                headerShown: false,
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: '#ee125a',
                },
            }}
        >
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Home' component={BottomTabsNavigator} />
        </Stack.Navigator>
    );
}

export const HomeStackNavigator = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator 
            initialRouteName="Home"
            screenOptions={{
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: '#ee125a',
                },
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="One" component={OneScreen} />
        </Stack.Navigator>
    )
}

export const MessageStackNavigator = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator 
            initialRouteName="Message"
            screenOptions={{
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: '#ee125a',
                },
            }}
        >
            <Stack.Screen name="Message" component={MessageScreen} />
            <Stack.Screen name="One" component={OneScreen} />
        </Stack.Navigator>
    )
}

export const AccountStackNavigator = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator 
            initialRouteName="Account"
            screenOptions={{
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: '#ee125a',
                },
            }}
        >
            <Stack.Screen name="Account" component={AccountScreen} />
            <Stack.Screen name="One" component={OneScreen} />
        </Stack.Navigator>
    )
}