import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Avatar, Caption, Drawer, Switch, Title, TouchableRipple } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core'
import { theme } from '../core/theme'

const MoreScreen = () => {
    const [isDarkTheme, setIsDarkTheme] = React.useState(false);
    const [isUser, setIsUser] = React.useState(true)

    const navigation = useNavigation();

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    }
    return (
        <View style={styles.container}>
            <DrawerContentScrollView>
                <View style={styles.drawerContent}>

                    <View style={styles.userInfoSection}>

                        <View style={styles.user}  >
                            <Avatar.Image source={{
                                uri: 'https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.6435-9/188172010_1690075374524458_4921122626087969103_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=NxrrsfMaURcAX_aWPDS&_nc_ht=scontent.fsgn5-4.fna&oh=f02c2023e77961898669ae2ef0c0a6fc&oe=615BDD7D'
                            }}
                                size={50} />
                            <View style={styles.userText}>
                                <Title style={styles.title} >Trương Phước</Title>
                                <Caption style={styles.caption} >@phuoc2k</Caption>
                            </View>
                        </View>

                    </View>

                    <Drawer.Section style={styles.drawerSection}>

                        <DrawerItem
                            icon={({ color, size }) => (
                                <Ionicons
                                    name="person-circle-outline"
                                    size={size}
                                    color={theme.colors.primary}
                                />
                            )}
                            label='Trang cá nhân'
                            onPress={() => { navigation.navigate('ProfileScreen') }}
                        />

                        {/* <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="account-group-outline"
                                    size={size}
                                    color={theme.colors.primary}
                                />
                            )}
                            label='Bạn bè'
                            onPress={() => { }}
                        />

                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="account-box-outline"
                                    size={size}
                                    color={theme.colors.primary}
                                />
                            )}
                            label='Danh bạ'
                            onPress={() => { }}
                        /> */}

                        <DrawerItem
                            icon={({ color, size }) => (
                                <Ionicons
                                    name="settings-sharp"
                                    size={size}
                                    color={theme.colors.primary}
                                />
                            )}
                            label='Cài đặt tài khoản'
                            onPress={() => { navigation.navigate('AccountSettingScreen') }}
                        />
                    </Drawer.Section>

                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => { toggleTheme() }}>
                            <View style={styles.preference}>
                                <Text>Chế độ tối</Text>
                                <View pointerEvents="none">
                                    <Switch value={isDarkTheme} />
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>

                </View>
            </DrawerContentScrollView>

            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="location-exit"
                            color={theme.colors.error}
                            size={size}
                        />
                    )}
                    label='Đăng Xuất'
                    labelStyle={{
                        color : theme.colors.error
                    }}
                    onPress={() => { navigation.navigate('LoginScreen') }}
                />
            </Drawer.Section>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        flexDirection: 'column'
    },

    drawerContent: {
        flex: 1,
    },

    userInfoSection: {
        paddingLeft: 20,
    },

    user: {
        flexDirection: 'row',
        // marginTop: 15,
        alignItems: 'center'
    },

    userText: {
        flexDirection: 'column',
        marginLeft: 15
    },


    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },

    caption: {
        fontSize: 14,
        lineHeight: 14,
    },

    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },

    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },

    Paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },

    drawerSection: {
        marginTop: 15,
    },

    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    },

    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16
    }

});
export default MoreScreen
