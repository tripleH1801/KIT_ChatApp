import React from 'react'
import { View, Text, Image } from 'react-native'
import { StyleSheet } from "react-native";
import { responsiveFontSize, responsiveHeight } from "react-native-responsive-dimensions";

const BubbleAvatar = ({user}) => {
    return (
        <View style={styles.imageWrapper}>
        <Image
            source={{
                uri: '' + user.imageUri,
            }}
            style={styles.userAvatar}
        />
        {/* {user.status && <View style={styles.activeIcon}></View>} */}
    </View>
    )
}

const styles = StyleSheet.create({
    imageWrapper:{
        position: 'relative',
        marginHorizontal: 8
    },
    userAvatar:{
        width: responsiveHeight(7),
        height: responsiveHeight(7),
        borderRadius: responsiveHeight(8),
    },
    activeIcon:{
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 18,
        height: 18,
        borderRadius: 10,
        borderWidth: 3,
        borderStyle: 'solid',
        borderColor: '#000',
        backgroundColor: '#18be12'
    },
})
export default BubbleAvatar
