import React from 'react'
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import {
    Ionicons,
    FontAwesome5,
    MaterialCommunityIcons,
} from '@expo/vector-icons';

import ContactScreen from './ContactScreen';
import MainScreen from './MainScreen';
import GroupChatsScreen from './GroupChatsScreen';
import MoreScreen from './MoreScreen';
import { useNavigation } from '@react-navigation/core';
import { useTheme } from '@react-navigation/native';
import { AuthContext } from '../context/Context';
import MessageIconNofication from '../components/TabBarIconNofication/MessageIconNofication';

const Tab = createBottomTabNavigator();
const MainTab = () => {

    const theme = useTheme();
    const { messNoficationCount } = React.useContext(AuthContext);

    const iconSize = 23;
    const tabBarHeight = responsiveHeight(7);

    const navigation = useNavigation();

    const goToProfile = () => {
        navigation.navigate('ProfileUserScreen')
    }

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                // tabBarActiveTintColor: '#fff',
                // tabBarInactiveTintColor: '#bdbdbd',
                tabBarIndicator: () => null,
                tabBarStyle: {
                    marginVertical: 0,
                    paddingTop: 5,
                    // backgroundColor: '#64868E',
                    height: tabBarHeight,
                },
                tabBarLabelStyle: styles.tabBarLabel,
                tabBarIconStyle: styles.tabBarIcon,
                headerStyle: {
                    // backgroundColor: '#64868E',
                },
                // headerTintColor: headerTextColor,
            })}
        >
            <Tab.Screen
                options={{
                    title: 'Tin nhắn',
                    tabBarIcon: ({ color: color }) => {
                        if (messNoficationCount <= 0)
                            return <Ionicons name="chatbubble" size={iconSize} color={color} />
                        return <MessageIconNofication iconSize={iconSize} color={color} num={messNoficationCount}/>
                    },
                    headerLeft: () => {
                        return (
                            <TouchableHighlight
                                underlayColor=" #cccccc"
                                onPress={() => { navigation.navigate('ProfileUserScreen') }}
                            >
                                <Image
                                    source={{
                                        uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXFxcX////CwsLGxsb7+/vT09PJycn19fXq6urb29ve3t7w8PDOzs7n5+f5+fnt7e30nlkBAAAFHUlEQVR4nO2dC5qqMAyFMTwUBdz/bq+VYYrKKJCkOfXmXwHna5uTpA+KwnEcx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3EcA2iO9cdIc5PUdO257y+BU39u66b4HplE3fk6VIcnqmNfl1+gksr6+iIucjl3WYukor7+re6Hoe1y1UhNO3zUd+fUFRmKpOa0Tt6dY5ubRCrOG/QFLk1WGmnt/JxzykcjdZ/jyxJDLlOV2l36AtcsJJb9boG3YcR3DuqODIE3ztYKPkDdmwRmpUToUaSaq++AvRgZMWbOpbQW8hdCAm8ZDugoikzREdCJ2okJPBx6azFLNOwoOgcxojJ98JkaTSJxMpklKrCAKhZGI0drTY/wU5lXoJYibannV9NYy4oozNEAkPHTjop+DTDxVGkIgYJNoyQQJtiIW+EMjGAjm649AjGIaqswcEFQKJ2QPlJbqytki6ZXAAZRJ52J2McaUowzAfs+uFzrYhnzaapphiPWdaJWShqxjqa6kTTQ205TVbsfMa6htL0iYOsXpJrQjHSmCkv1QGPtiHqlYcQ21Gj7fcDU8xOEUuNgSltPzexh+HqFlanCBHZ4OLhCV+gK/3OF6vWvucLv98MUOY2pwu/PS/+D2qJU7pYGbOvDFDW+bbON9p3o3oRxn0bfLgZTgSn6pSfrtr56qLHemtHPTK2319SzGvtjQ9qeb39WgS66Cm073nd0U1PzDdJCO3Gzn6TKpl9Zq7ujGWsQhlA3NwWIMwG9zM08Y/tBrR9VWeczv5CSQuuUNKIUTk23ZJ5RKfVhjnkXotfWIlgX2BSCDYbZR+QTcLhb3dKZDUY2M0d4KWItwhHRah/zsrOgKw4wycwjcgEVcgQDQo23CqSiWEJkFAfod2oE1uIFdA1OsCPqFXYNTjCfb8Ez+iX2x5sKLlVbhtqdDcar9ZevhnbZxoBUD35k23t0d304LYs1ELVbnfFaZ/REJJX9niP8Q19moZGo3m8XR/yBvOnjFfsXcI2c8ZuNo7WMP5HQh6yRGrlmFOJTnyTcT+zRlqPUBI2gTVWNUzUna1ERgecgF4GpNBQ38jGqxVLzQA1A31Rrhk6Yz9QEh/WND0GnuG9huhiTXJkxfAizTHLr6cbJKN6UCU6x/2DTRE1xEeEXi3O0ZUqBN4nJRzHhFB1JPlFTBZlI2kQ8zc3KJ1Le8DIRmFJiknuVS6RK4Ej/JtBfJErDSzOBiY4wJHX6Z1I4v1GUmdCPNirnLLeg3oJLcbX5PcpHNbRvOa1A956QmRPOUXVF+zkaUJynpkYR0bOMJH2nNej1pqyV/aKkz9jr5yj5vrXXz1F5SQLACiMapmierj2ikLyleKdlA/I/2oFxiglxx9B+mHwz0lf34IZQfhDRhlD6bhvgEAoPYooHkTczSIZTLC+cEExsoNKZiGBiY9cCfo/Y/SjIOBMQizWWTe73CMUasJx7jlD+DdKdWUKoY4PRYFtGpO0G1Lx4RaadgTtJhf4fiGqGIwKWCGuGIwKWqP+7IxYCzygjR9IAO5pC7Da9g70TBVpWRNgFBlgT8RV2WxHbKwJMv4BOaEaYaU2K16yZMN/qgV+G7IWIvwyZCxHeDQMsR8wg0DBDDXB5H2EV+hkEGmaoySHQsEJNFoGGFWrAq98JRhUMX1iMMMqLLEIpK5jCbd4vw9nSt/72lewXiN6jmdjfq8Hdknlk92ZwJnbIMMRM7JBhiFlUFoHd1UWaP1QKsPsHA5mkNB+Smn9JqV3wskatnQAAAABJRU5ErkJggg=='
                                    }}
                                    style={{
                                        width: responsiveHeight(4.5),
                                        height: responsiveHeight(4.5),
                                        borderRadius: responsiveHeight(5),
                                    }}
                                />
                            </TouchableHighlight>
                        )
                    },
                    headerLeftContainerStyle: {
                        marginLeft: responsiveHeight(2),
                    },
                }}
                name="Chat"
                component={MainScreen}
            />
            <Tab.Screen
                options={{
                    title: 'Danh bạ',
                    tabBarIcon: ({ color: color }) => <MaterialCommunityIcons name="contacts" size={iconSize} color={color} />,
                }}
                name="Contacts"
                component={ContactScreen}
            />
            <Tab.Screen
                options={{
                    title: 'Nhóm',
                    tabBarIcon: ({ color: color }) => <MaterialCommunityIcons name="account-group" size={iconSize + 5} color={color} />,
                }}
                name="Group"
                component={GroupChatsScreen}
            />
            <Tab.Screen
                options={{
                    title: 'Thêm',
                    tabBarIcon: ({ color: color }) => <Ionicons name="md-grid" size={iconSize} color={color} />,
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
        // backgroundColor: '#fff',
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
