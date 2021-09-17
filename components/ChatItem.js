import { useNavigation } from '@react-navigation/core';
import { useTheme } from '@react-navigation/native';
import moment from 'moment';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native';
import { Text as PaperText } from 'react-native-paper';
import { responsiveFontSize, responsiveHeight } from "react-native-responsive-dimensions";
import BubbleAvatar from './BubbleAvatar';

const ChatItem = ({ chatRoom }) => {

    const navigation = useNavigation();
    const theme = useTheme();

    const anotherUser = chatRoom.users[1];
    if (anotherUser.id === 'u1')
        return null;

    const onPress = () => {
        navigation.navigate('ChatScreen', { chatRoom: chatRoom })
    }

    return (
        <TouchableHighlight
            underlayColor={theme.dark ? "#333" : '#e6e6e6'}
            onPress={onPress}
        >
            <View style={styles.container}>
                <BubbleAvatar user={anotherUser} />
                <View style={styles.chatContent}>
                    <PaperText style={[styles.userName]}>
                        {anotherUser.name}
                    </PaperText>
                    <View style={styles.messageWrapper}>
                        <PaperText style={[styles.lastMessage]}>
                            {chatRoom.lastMessage.content}
                        </PaperText>
                        <PaperText style={[styles.dotSpace, styles.text]}>.</PaperText>
                        <PaperText style={[styles.createdAt, styles.text]}>
                            {moment(chatRoom.lastMessage.createdAt).format('HH:mm')}
                            {/* cap nhat */}
                        </PaperText>
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
    container: {
        flexDirection: 'row',
        // marginHorizontal: responsiveHeight(1.2),
        padding: 9
    },
    chatContent: {
        flex: 1,
        marginHorizontal: responsiveHeight(1),
        flexDirection: 'column',
        justifyContent: 'center',
    },
    userName: {
        marginVertical: responsiveHeight(0.5),
        fontSize: responsiveFontSize(2),
        fontWeight: '700'
    },
    messageWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    lastMessage: {
        fontSize: responsiveFontSize(1.7),
    },
    dotSpace: {

    },
    createdAt: {
        fontSize: responsiveFontSize(1.6),
        marginLeft: 9
    },
    seenWrapper: {
        justifyContent: 'flex-end'
    },
    seenIcon: {
        bottom: 0,
        right: 0,
        width: 18,
        height: 18,
        borderRadius: 10,
    }
})
export default ChatItem
