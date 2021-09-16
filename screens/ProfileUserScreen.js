import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import {
    Avatar,
    Title,
    Caption,
    Text,
    TouchableRipple,
} from 'react-native-paper'
// import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { theme } from '../core/theme';
import { color } from 'react-native-reanimated';

const myTheme = theme;
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default function ProfileUserScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View >
                <View style={styles.userInfoSection}>
                    <View style={styles.user}>
                        <Avatar.Image
                            source={{
                                uri: 'https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.6435-9/188172010_1690075374524458_4921122626087969103_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=NxrrsfMaURcAX_aWPDS&_nc_ht=scontent.fsgn5-4.fna&oh=f02c2023e77961898669ae2ef0c0a6fc&oe=615BDD7D'
                            }}
                            size={70}
                        />
                    </View>
                    <View>
                        <Title style={styles.title}>Trương Phước</Title>
                        <Caption style={styles.caption}>@phuoc2k</Caption>
                    </View>
                </View>
                <View style={styles.row}>
                    <Icon name="calendar" color={myTheme.colors.primary} size={20} />
                    <Text style={styles.textLocation}>17/07/2000</Text>
                </View>
                <View style={styles.row}>
                    <Icon name="map-marker-radius" color={myTheme.colors.primary} size={20} />
                    <Text style={styles.textLocation}>Hồ Chí Minh</Text>
                </View>
                <View style={styles.row}>
                    <Icon name="phone" color={myTheme.colors.primary} size={20} />
                    <Text style={styles.textLocation}> 0702704302</Text>
                </View>
                <View style={styles.row}>
                    <Icon name="email" color={myTheme.colors.primary} size={20} />
                    <Text style={styles.textLocation}>tdphuoc77@gmail.com</Text>
                </View>

                <View style={styles.infoBoxWrapper}>
                    <Caption style={styles.caption}>
                        <Icon
                            name="account-outline"
                            color={myTheme.colors.primary}
                            size={20} /> Bạn bè </Caption>
                    <Title>14000</Title>
                </View>
            </View>

            <View style={styles.menuWrapper}>
                <TouchableRipple onPress={() => { navigation.navigate("ProfileSettingScreen") }}>
                    <View style={styles.menuItem}>
                        <MaterialIcons name="settings" size={25} color={myTheme.colors.settingText} />
                        <Text style={styles.menuItemText}>Thay đổi thông tin cá nhân</Text>
                    </View>
                </TouchableRipple>

                {/* <TouchableRipple onPress={() => { }}>
                    <View style={styles.menuItem}>
                        <Icon name="key-variant" color={myTheme.colors.settingText} size={25} />
                        <Text style={styles.menuItemText}>Đổi mật khẩu</Text>
                    </View>
                </TouchableRipple> */}
            </View>
        </View >
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        flexDirection: 'column',
    },
    userInfoSection: {
        marginVertical: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },

    user: {
        marginRight: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    textLocation: {
        // color: '#777',
        marginLeft: 20,
    },

    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'column',
        height: windowHeight * 12 / 100,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    menuWrapper: {
        marginTop: 10,
    },

    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        // paddingHorizontal: 30,
    },
    menuItemText: {
        color: '#777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
    },

})
