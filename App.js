import React, { useEffect } from 'react';
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
import { AuthContext } from './context/Context'
import { ActivityIndicator, StatusBar, View } from 'react-native';
import RootNavigation from './screens/RootNavigation';
import RootAuthenication from './screens/RootAuthenication';

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

  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);

  const initLoginProps = {
    isLoading: true,
    userId: null,
    userToken: null,
  }
  const loginReducer = (prevProps, action) => {
    switch (action.type) {
      case 'FIRST_GET_TOKEN':
        return {
          ...prevProps,
          // userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevProps,
          userId: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevProps,
          userId: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevProps,
          userId: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  }

  const [loginProps, dispatch] = React.useReducer(loginReducer, initLoginProps);

  // lam cac ham xai chung cho tat ca cac screen
  const authContext = React.useMemo(() => ({
    signIn: (phoneNumber, password) => {
      let userToken = null;
      if (phoneNumber == '123' && password == '123') {
        userToken = 'logintoken';
      }
      dispatch({ type: 'LOGIN', id: '123', token: userToken })
    },
    signOut: () => {
      dispatch({ type: 'LOGOUT' })
    },
    register: () => {
      dispatch({ type: 'REGISTER', token: 'firsttimetoken' })
    },
    toggleTheme: () => {
      setIsDarkTheme(isDarkTheme => !isDarkTheme);
    },
    messNoficationCount: MESS_NOFICATION_COUNT,
  }), []);

  useEffect(() => {
    let userToken;
    userToken = null;
    setTimeout(() => {
      dispatch({ type: 'FIRST_GET_TOKEN', token: userToken })
    }, 1000)
  })

  if (loginProps.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' color='gray' />
      </View>
    )
  }

  return (
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={theme}>
          {/* <StatusBar barStyle={isDarkTheme ? 'light-content' : 'dark-content'} /> */}
          <StatusBar barStyle='light-content' />

          {loginProps.userToken == null ?
            (<RootAuthenication />) :
            (<RootNavigation />)
          }

        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  );
}

