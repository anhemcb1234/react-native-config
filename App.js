import {StatusBar} from 'expo-status-bar';
import {TailwindProvider} from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Toast from 'react-native-toast-message';
import OnBoard from './src/components/OnBoard';
import LogIn from './src/screen/LogIn';
import { Provider } from 'react-redux';
import { store } from './src/features/index.js';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            <Provider store={store}>
                <NavigationContainer>
                    <TailwindProvider>
                        <Stack.Navigator screenOptions={{ headerMode: 'none' }}  screenOptions={{headerShown: false,}} initialRouteName="Login">
                            <Stack.Screen name="Login" component={LogIn} />
                            <Stack.Screen name="Home" component={OnBoard} />
                            </Stack.Navigator>
                        </TailwindProvider>
                    <Toast />
                </NavigationContainer>
            </Provider>
        </>
    );
}
//screenOptions to hide the title header