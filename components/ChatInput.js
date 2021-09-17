import React, { useState } from 'react'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'
import { TextInput as PaperTextInput } from 'react-native-paper';
import { FontAwesome5, FontAwesome, Ionicons, AntDesign } from '@expo/vector-icons';
import { TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import ChatBoxExtension from './ChatBoxExtension';
import { useNavigation, useTheme } from '@react-navigation/native';
import { responsiveFontSize, responsiveHeight } from "react-native-responsive-dimensions";

const ChatInput = () => {

    const theme = useTheme();
    const [message, setMessage] = useState('');
    const [isChatInputFocus, setIsChatInputFocus] = useState(false);

    const navigate = useNavigation();

    // const openExtensions = (activeExtension) => {
    //     if (activeExtension === ExtensionName) {
    //         setExtensionName('');
    //         setExtensionVisible(false);
    //     }
    //     else {
    //         setExtensionName(activeExtension);
    //         setExtensionVisible(true);
    //     }
    // }

    const sendMessage = () => {
        setMessage('');
    }
    const like = () => {
    }
    const sendOrLike = () => {
        message ?
            sendMessage()
            :
            like()
    }

    return (
        <View
            style={[
                styles.wrapper
            ]}
        >
            <View style={styles.container}>

                <ChatBoxExtension
                    // openExtensions={openExtensions}
                    // isStretch={!isChatInputFocus}
                    // setIsChatInputFocus={setIsChatInputFocus}
                    // setExtensionVisible={setExtensionVisible}
                />

                <View style={styles.chatBoxWrapper}>
                    <View style={[
                        styles.chatBox,
                        theme.dark ? styles.darkBackground : styles.lightBackground,
                    ]}>
                        <TextInput
                            placeholder='Aa'
                            placeholderTextColor='#a4a7ad'
                            multiline={true}
                            style={styles.chatInput}
                            value={message}
                            onChangeText={setMessage}
                            onTouchEnd={() => {
                                setIsChatInputFocus(true);
                            }}
                            onBlur={() => {
                                setIsChatInputFocus(false);
                            }}
                        />
                        <TouchableHighlight
                            style={styles.subButtonChatBox}
                            underlayColor={'#98B4A6'}
                            onPress={() => { console.log('emoji'); }}
                        >
                            <FontAwesome5 name="smile" size={24} color="#64868E" style={styles.subIconChatBox} />
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={styles.buttonWrapper}>
                    <TouchableHighlight
                        style={[styles.button, styles.likeButton]}
                        underlayColor={'#98B4A6'}
                        onPress={sendOrLike}
                    >
                        {message ?
                            <Ionicons name="send" size={24} color="#64868E" /> :
                            <AntDesign name="like1" size={24} color="#64868E" />
                        }
                    </TouchableHighlight>
                </View>
            </View >
        </View>
    )
}

const styles = StyleSheet.create({
    darkBackground: {
        backgroundColor: '#3a3b3c',
    },
    lightBackground: {
        backgroundColor: '#D1E4D1',
    },
    wrapper: {
        minHeight: responsiveHeight(6),
        maxHeight: '40%',
        justifyContent: 'flex-end',
        borderTopColor: '#98B4A6',
        borderTopWidth: 0.2
    },
    extensions: {
        height: responsiveHeight(25),
        backgroundColor: 'white',
    },
    container: {
        // backgroundColor: '#fff',
        minHeight: responsiveHeight(6),
        maxHeight: '100%',
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    buttonWrapper: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        alignItems: 'flex-end',
        paddingVertical: 8,
    },
    button: {
        height: responsiveHeight(5),
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: responsiveHeight(1.8),
        marginRight: -responsiveHeight(1),
        borderRadius: 30,
    },
    likeButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 0,
        paddingHorizontal: 10,
    },
    icon: {

    },
    chatBoxWrapper: {
        flex: 1,
        height: "100%",
        flexDirection: 'row',
        marginHorizontal: 8,
        paddingVertical: 8,
    },
    chatBox: {
        flex: 1,
        height: "100%",
        flexDirection: 'row',
        borderRadius: 20,
        padding: 5,
        alignItems: 'flex-end',
    },
    chatInput: {
        flex: 1,
        padding: 0,
        paddingHorizontal: 14,
        height: '100%',
        fontSize: responsiveFontSize(1.9),
        color: '#fff',
    },
    subButtonChatBox: {
        borderRadius: 20,
        padding: 5,
        margin: -5
    },
    subIconChatBox: {
        margin: 3,
    }
})
export default ChatInput
