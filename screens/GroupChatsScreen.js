import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View, Text, StyleSheet, LogBox } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import ListChatRooms from '../components/ListChatRooms'

const GroupChatsScreen = () => {
    LogBox.ignoreLogs([
        'VirtualizedLists should never be nested',
    ])
    return (
        <View style={styles.container}>
            <Text>LISt group chat</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})


export default GroupChatsScreen
