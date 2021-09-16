import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import ChatScreen from './screens/ChatScreen';
import ContactScreen from './screens/ContactScreen';
import { AuthContext } from './context/Context'

import {
  Ionicons,
  FontAwesome5,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {

  // lam cac ham xai chung cho tat ca cac screen
  const authContext = React.useMemo(() => ({
    test: () => {

    }
  }), []);

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarActiveTintColor: '#2e89ff',
            tabBarInactiveTintColor: '#5f5f5f',
            tabBarIndicator: () => null,
            tabBarStyle: {
              marginVertical: 0,
              paddingTop: 5
            },
            tabBarLabelStyle: styles.tabBarLabel,
            tabBarIconStyle: styles.tabBarIcon,
          })}
        >
          <Tab.Screen
            options={{
              title: 'Chat',
              tabBarIcon: ({ color: color }) => <Ionicons name="chatbubble" size={21} color={color} />,

            }}
            name="Chat"
            component={ChatScreen}
          />
          <Tab.Screen
            options={{
              title: 'Bạn bè',
              tabBarIcon: ({ color: color }) => <FontAwesome5 name="user-friends" size={21} color={color} />,
            }}
            name="Friends"
            component={ContactScreen}
          />
          <Tab.Screen
            options={{
              title: 'Danh bạ',
              tabBarIcon: ({ color: color }) => <MaterialCommunityIcons name="contacts" size={21} color={color} />,
            }}
            name="Contacts"
            component={ContactScreen}
          />
          <Tab.Screen
            options={{
              title: 'Thêm',
              tabBarIcon: ({ color: color }) => <Ionicons name="md-grid" size={21} color={color} />,
            }}
            name="More"
            component={ContactScreen}
          />
        </Tab.Navigator>
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
  tabBarLabel: {
    textTransform: 'capitalize',
    margin: 3,
    fontSize: responsiveFontSize(1.6),
  },
  tabBarIcon: {
    width: 'auto',
    padding: 0,
    marginTop: 4,
  },
});
