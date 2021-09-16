import { useNavigation } from '@react-navigation/core';
import moment from 'moment';
import React from 'react'
import { View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native'
import { responsiveFontSize, responsiveHeight } from "react-native-responsive-dimensions";
import BubbleAvatar from './BubbleAvatar';

const ChatItem = ({chatRoom}) => {

    const navigation = useNavigation();
    
    const anotherUser = chatRoom.users[1];
    if (anotherUser.id === 'u1')
        return null;

    const onPress = ()=>{
        navigation.navigate('ChatScreen', { chatRoom: chatRoom })
    }

    return (
        <TouchableHighlight
            underlayColor=" #cccccc"
            onPress={onPress}
        >
            <View style={styles.container}> 
                <BubbleAvatar user={anotherUser} />
                <View style={styles.chatContent}>
                    <Text style={[styles.userName, styles.text]}>
                        {anotherUser.name}
                    </Text>
                    <View style={styles.messageWrapper}>
                        <Text style={[styles.lastMessage, styles.text]}>
                            {chatRoom.lastMessage.content}
                        </Text>
                        <Text style={[styles.dotSpace, styles.text]}>.</Text>
                        <Text style={[styles.createdAt, styles.text]}>
                            {moment(chatRoom.lastMessage.createdAt).format('HH:mm')}
                            {/* cap nhat */}
                        </Text>
                    </View>
                </View>
                <View style={styles.seenWrapper}>
                    <Image
                        source={{
                            uri: '' + anotherUser.imageUri,
                        }}
                        style={styles.seenIcon}
                    />
                </View>
            </View>
        </TouchableHighlight>
    )
}
const styles = StyleSheet.create({
    text:{
        color: '#000',
    },
    container:{
        flexDirection: 'row',
        // marginHorizontal: responsiveHeight(1.2),
        padding: 9
    },
    chatContent:{
        flex: 1,
        marginHorizontal: responsiveHeight(1),
        flexDirection: 'column',
        justifyContent: 'center',
    },
    userName:{
        marginVertical: responsiveHeight(0.5),
        fontSize: responsiveFontSize(2),
        fontWeight: '700'
    },
    messageWrapper:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    lastMessage:{
        fontSize: responsiveFontSize(1.7),
    },
    dotSpace:{

    },
    createdAt:{
        fontSize: responsiveFontSize(1.6),
        marginLeft: 9
    },
    seenWrapper:{
        justifyContent: 'flex-end'
    },
    seenIcon:{
        bottom: 0,
        right: 0,
        width: 18,
        height: 18,
        borderRadius: 10,
    }
})
export default ChatItem
