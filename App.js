import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';

import { AuthContext } from './context/Context'

import MainTab from './screens/MainTab';

import {
  Ionicons,
  FontAwesome5,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

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
                headerStyle: {
                  backgroundColor: '#000',
                },
                title: 'Chat',
                headerTitleStyle: {
                  fontSize: responsiveFontSize(3),
                  fontWeight: '600',
                  color: '#fff',
                },
                headerLeft: () => {
                  return (
                    <Image
                      source={{
                        uri: 'https://scontent.fvca1-1.fna.fbcdn.net/v/t1.6435-9/225547917_1543387726011430_4693817264036487598_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=NxIAIrC0VHAAX9OqcI8&_nc_ht=scontent.fvca1-1.fna&oh=2bba06ee61238b9ab640dcef489b8e4a&oe=614ADF7E'
                      }}
                      style={{
                        width: responsiveHeight(4.5),
                        height: responsiveHeight(4.5),
                        borderRadius: responsiveHeight(5),
                      }}
                    />
                  )
                },
                headerLeftContainerStyle: {
                  marginLeft: responsiveHeight(1.8),
                },
                // headerRight: () => {
                //   return <HeaderRight />
                // },
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
