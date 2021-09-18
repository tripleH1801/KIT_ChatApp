import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';

import MainTab from './MainTab';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import ProfileUserScreen from './ProfileUserScreen';
import AccountSettingScreen from './AccountSettingScreen'
import ProfileSettingScreen from './ProfileSettingScreen';
import ChatScreen from './ChatScreen';
import ChatLeftHeader from '../components/ChatScreenHeader/ChatLeftHeader'
import ChatRightHeader from '../components/ChatScreenHeader/ChatRightHeader';
import ChatRoomOptionScreen from './ChatRoomOptionScreen';
import MediaTab from './MediaTab';

const Stack = createStackNavigator();

const RootNavigation = () => {
    return (
        <Stack.Navigator initialRouteName='MainTab'>

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
    )
}

export default RootNavigation
