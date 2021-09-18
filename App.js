import React from 'react';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme
} from '@react-navigation/native';

import {
  Provider as PaperProvider,
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper'
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from './context/Context'

import MainTab from './screens/MainTab';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileUserScreen from './screens/ProfileUserScreen';
import AccountSettingScreen from './screens/AccountSettingScreen'
import ProfileSettingScreen from './screens/ProfileSettingScreen';
import ChatScreen from './screens/ChatScreen';
import ChatLeftHeader from './components/ChatScreenHeader/ChatLeftHeader';
import ChatRightHeader from './components/ChatScreenHeader/ChatRightHeader';
import ChatRoomOptionScreen from './screens/ChatRoomOptionScreen';
import { StatusBar } from 'react-native';
import MediaTab from './screens/MediaTab';
import FileMediaScreen from './screens/ChatMediaScreen/FileMediaScreen';

const Stack = createStackNavigator();

export default function App() {

  const MyDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      text: '#000',
      primary: '#64868E',
      secondary: '#98B4A6',
      background: '#ffffff',
      grayText: '#333',
      error: '#f53e2d'
    }
  }

  const MyDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      primary: '#98B4A6',
      // secondary: '#64868E',
      text: '#fff',
      grayText: '#ccc',
      error: '#f53e2d'
    }
  }

  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const theme = isDarkTheme ? MyDarkTheme : MyDefaultTheme;

  const [MESS_NOFICATION_COUNT, set_MESS_NOFICATION_COUNT] = React.useState(1);

  // lam cac ham xai chung cho tat ca cac screen
  const authContext = React.useMemo(() => ({
    toggleTheme: () => {
      setIsDarkTheme(isDarkTheme => !isDarkTheme);
    },
    messNoficationCount: MESS_NOFICATION_COUNT,
  }), []);

  return (
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={theme}>

          {/* <StatusBar barStyle={isDarkTheme ? 'light-content' : 'dark-content'} /> */}
          <StatusBar barStyle='light-content' />

          <Stack.Navigator initialRouteName='LoginScreen'>

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
                  title: 'Thông tin cá nhân'
                })
              }
              name='ProfileUserScreen'
              component={ProfileUserScreen}
            />

            <Stack.Screen
              options={
                ({ navigation }) => ({
                  title: 'Cài đặt tài khoản'
                })
              }
              name='AccountSettingScreen'
              component={AccountSettingScreen}
            />

            <Stack.Screen
              options={
                ({ navigation }) => ({
                  title: 'Thay đổi thông tin cá nhân'
                })
              }
              name='ProfileSettingScreen'
              component={ProfileSettingScreen}
            />

            <Stack.Screen
              options={({ route }) => ({
                title: route.params.chatRoom.users[1].name,
                headerTitleStyle: {
                  fontWeight: '600',
                  // color: '#fff',
                },
                headerStyle: {
                  // backgroundColor: '#000'
                },
                headerLeft: () => <ChatLeftHeader otherUser={route.params.chatRoom.users[1]} />,
                headerLeftContainerStyle: {
                  backgroundColor: 'transparent'
                },
                headerRight: () => <ChatRightHeader chatRoomID={route.params.chatRoom.id} />,
                headerRightContainerStyle: {
                  backgroundColor: 'transparent'
                },
              })}
              name='ChatScreen'
              component={ChatScreen}
            />

            <Stack.Screen
              options={
                ({ navigation }) => ({
                  title: 'Tùy chọn'
                })
              }
              name='ChatRoomOptionScreen'
              component={ChatRoomOptionScreen}
            />

            <Stack.Screen
              options={
                ({ navigation }) => ({
                  title: 'Kho lưu trữ'
                })
              }
              name='MediaTab'
              component={MediaTab}
            />

          </Stack.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  );
}

