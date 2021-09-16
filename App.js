import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';

import { AuthContext } from './context/Context'

import MainTab from './screens/MainTab';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileUserScreen from './screens/ProfileUserScreen';
import AccountSettingScreen from './screens/AccountSettingScreen'
import ProfileSettingScreen from './screens/ProfileSettingScreen';

const Stack = createStackNavigator();

export default function App() {

  // lam cac ham xai chung cho tat ca cac screen
  const authContext = React.useMemo(() => ({
    test: () => {

    }
  }), []);

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={
              ({ navigation }) => ({
                headerShown: false
              })
            }
            name='MainTab'
            component={MainTab}
          />
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
          <Stack.Screen
            options={
              ({ navigation }) => ({
                title:'Thông tin cá nhân'
              })
            }
            name='ProfileScreen'
            component={ProfileUserScreen}
          />
          <Stack.Screen
            options={
              ({ navigation }) => ({
                title:'Cài đặt tài khoản'
              })
            }
            name='AccountSettingScreen'
            component={AccountSettingScreen}
          />
          <Stack.Screen
            options={
              ({ navigation }) => ({
                title:'Thay đổi thông tin cá nhân'
              })
            }
            name='ProfileSettingScreen'
            component={ProfileSettingScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
