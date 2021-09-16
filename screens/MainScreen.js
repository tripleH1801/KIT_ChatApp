import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View, Text, StyleSheet, LogBox } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import ListChatRooms from '../components/ListChatRooms'
import HeaderSearchBar from '../components/HeaderSearchBar'

const MainScreen = () => {
    LogBox.ignoreLogs([
        'VirtualizedLists should never be nested',
    ])
    return (
        <ScrollView style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            <HeaderSearchBar/>
            <ListChatRooms/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        
    }
})


export default MainScreen
