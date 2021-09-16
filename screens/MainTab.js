import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import {
    Ionicons,
    FontAwesome5,
    MaterialCommunityIcons,
} from '@expo/vector-icons';

import ContactScreen from './ContactScreen';
import MainScreen from './MainScreen';
import ListFriendsScreen from './ListFriendsScreen';
import MoreScreen from './MoreScreen';

const Tab = createBottomTabNavigator();

const MainTab = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: '#64868E',
                tabBarInactiveTintColor: '#cccccc',
                tabBarIndicator: () => null,
                tabBarStyle: {
                    marginVertical: 0,
                    paddingTop: 5
                },
            })}
        >
            <Tab.Screen
                options={{
                    title: 'Chat',
                    tabBarIcon: ({ color: color }) => <Ionicons name="chatbubble" size={21} color={color} />,
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
                      marginLeft: responsiveHeight(2),
                    },
                    tabBarLabelStyle: styles.tabBarLabel,
                    tabBarIconStyle: styles.tabBarIcon,
                }}
                name="Chat"
                component={MainScreen}
            />
            <Tab.Screen
                options={{
                    title: 'Bạn bè',
                    tabBarIcon: ({ color: color }) => <FontAwesome5 name="user-friends" size={21} color={color} />,
                    tabBarLabelStyle: styles.tabBarLabel,
                    tabBarIconStyle: styles.tabBarIcon,
                }}
                name="Friends"
                component={ListFriendsScreen}
            />
            <Tab.Screen
                options={{
                    title: 'Danh bạ',
                    tabBarIcon: ({ color: color }) => <MaterialCommunityIcons name="contacts" size={21} color={color} />,
                    tabBarLabelStyle: styles.tabBarLabel,
                    tabBarIconStyle: styles.tabBarIcon,
                }}
                name="Contacts"
                component={ContactScreen}
            />
            <Tab.Screen
                options={{
                    title: 'Thêm',
                    tabBarIcon: ({ color: color }) => <Ionicons name="md-grid" size={21} color={color} />,
                    tabBarLabelStyle: styles.tabBarLabel,
                    tabBarIconStyle: styles.tabBarIcon,
                }}
                name="More"
                component={MoreScreen}
            />
        </Tab.Navigator>
    )
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
export default MainTab
