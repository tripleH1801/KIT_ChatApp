import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View, Text, StyleSheet, LogBox } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import ListChatRooms from '../components/ListChatRooms'

const ListFriendsScreen = () => {
    LogBox.ignoreLogs([
        'VirtualizedLists should never be nested',
    ])
    return (
        <ScrollView style={styles.container}>
            <Text>LISt friends</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        
    }
})


export default ListFriendsScreen
