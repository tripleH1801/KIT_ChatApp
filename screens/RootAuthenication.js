import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';

const Stack = createStackNavigator();

const RootAuthenication = () => {
    return (
        <Stack.Navigator initialRouteName='LoginScreen'>

            <Stack.Screen
                options={
                    ({ navigation }) => ({
                        headerShown: false
                    })
                }
                name='LoginScreen'
                component={LoginScreen}
            />

            <Stack.Screen
                options={
                    ({ navigation }) => ({
                        headerShown: false
                    })
                }
                name='RegisterScreen'
                component={RegisterScreen}
            />

        </Stack.Navigator>
    )
}

export default RootAuthenication
