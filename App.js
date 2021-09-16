import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';

import { AuthContext } from './context/Context'

import MainTab from './screens/MainTab';

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
            name='Main'
            component={MainTab}
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
