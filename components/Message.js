import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import { Text as PaperText } from 'react-native-paper';
import { useTheme } from 'react-native-paper';
import { responsiveFontSize } from "react-native-responsive-dimensions";

const Message = ({ message, index, idRoom }) => {

    const theme = useTheme();

    // test data
    const Users = [{
        id: 'u1',
        name: 'Vadim',
        imageUri: 'https://nguoinoitieng.tv/images/nnt/100/0/beoj.jpg',
        status: true,
    }, {
        id: 'u2',
        name: 'Lukas',
        imageUri: 'https://nguoinoitieng.tv/images/nnt/100/0/beoj.jpg',
        status: true,
    }, {
        id: 'u3',
        name: 'Daniil',
        imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.jpg',
        status: true,
    }, {
        id: 'u4',
        name: 'Alex',
        imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.png',
        status: false,
    }, {
        id: 'u5',
        name: 'Vlad',
        imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/4.jpg',
        status: true,
    }, {
        id: 'u6',
        name: 'Elon Musk',
        imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/5.jpg',
        status: true,
    }, {
        id: 'u7',
        name: 'Adrian',
        imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/6.png',
        status: false,
    }, {
        id: 'u8',
        name: 'Borja',
        imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/7.png',
        status: false,
    }, {
        id: 'u9',
        name: 'Mom',
        imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/8.png',
        status: false,
    }, {
        id: 'u10',
        name: 'Angelina Jolie',
        imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/9.png',
        status: false,
    }]
    const Chats = [
        {
            id: '1',
            users: [{
                id: 'u1',
                name: 'Vadim',
                imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
            }, {
                id: 'u2',
                name: 'Lukas',
                imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg',
            }],
            messages: [{
                id: 'm1',
                content: 'How are you, Lukas!',
                createdAt: '2021-08-01T12:48:00.000Z',
                user: {
                    id: 'u1',
                    name: 'Vadim',
                },
            }, {
                id: 'm2',
                content: 'I am good, good',
                createdAt: '2021-08-03T14:49:00.000Z',
                user: {
                    id: 'u2',
                    name: 'Lukas',
                },
            }, {
                id: 'm3',
                content: 'What about you?',
                createdAt: '2021-08-03T14:49:40.000Z',
                user: {
                    id: 'u2',
                    name: 'Lukas',
                },
            }, {
                id: 'm4',
                content: 'Good as well, preparing for the stream now.',
                createdAt: '2021-08-03T14:50:00.000Z',
                user: {
                    id: 'u1',
                    name: 'Vadim',
                },
            }, {
                id: 'm5',
                content: 'How is your uni going?',
                createdAt: '2021-08-03T14:51:00.000Z',
                user: {
                    id: 'u1',
                    name: 'Vadim',
                },
            }, {
                id: 'm6',
                content: 'It is a bit tough, as I have 2 specializations. How about yours? Do you enjoy it?',
                createdAt: '2021-08-03T14:49:00.000Z',
                user: {
                    id: 'u2',
                    name: 'Lukas',
                },
            }, {
                id: 'm7',
                content: 'Big Data is really interesting. cai nay cua message 1 :).',
                createdAt: '2021-08-03T14:53:00.000Z',
                user: {
                    id: 'u1',
                    name: 'Vadim',
                },
            }, {
                id: 'm8',
                content: 'How is your uni going?',
                createdAt: '2021-08-03T14:51:00.000Z',
                user: {
                    id: 'u1',
                    name: 'Vadim',
                },
            }, {
                id: 'm9',
                content: 'It is a bit tough, as I have 2 specializations. How about yours? Do you enjoy it?',
                createdAt: '2021-08-03T14:49:00.000Z',
                user: {
                    id: 'u2',
                    name: 'Lukas',
                },
            }, {
                id: 'm10',
                content: 'Big Data is really interesting. cai nay cua message 1 :).',
                createdAt: '2021-08-03T14:53:00.000Z',
                user: {
                    id: 'u1',
                    name: 'Vadim',
                },
            }, {
                id: 'm11',
                content: 'How is your uni going?',
                createdAt: '2021-08-03T14:51:00.000Z',
                user: {
                    id: 'u1',
                    name: 'Vadim',
                },
            }, {
                id: 'm12',
                content: 'It is a bit tough, as I have 2 specializations. How about yours? Do you enjoy it?',
                createdAt: '2021-08-03T14:49:00.000Z',
                user: {
                    id: 'u2',
                    name: 'Lukas',
                },
            }, {
                id: 'm13',
                content: 'Big Data is 1.',
                createdAt: '2021-08-03T14:53:00.000Z',
                user: {
                    id: 'u1',
                    name: 'Vadim',
                },
            }, {
                id: 'm14',
                content: 'Big Data is 2.',
                createdAt: '2021-08-03T14:53:00.000Z',
                user: {
                    id: 'u1',
                    name: 'Vadim',
                },
            }, {
                id: 'm15',
                content: 'Big Data is 3.',
                createdAt: '2021-08-03T14:53:00.000Z',
                user: {
                    id: 'u1',
                    name: 'Vadim',
                },
            }]
        },
        {
            id: '2',
            users: [{
                id: 'u1',
                name: 'Vadim',
                imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
            }, {
                id: 'u3',
                name: 'Daniil',
                imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.jpg',
            }],
            messages: [{
                id: 'm1',
                content: 'How are you, Lukas!',
                createdAt: '2021-08-02T12:48:00.000Z',
                user: {
                    id: 'u1',
                    name: 'Vadim',
                },
            }, {
                id: 'm2',
                content: 'I am good, good',
                createdAt: '2021-08-03T14:49:00.000Z',
                user: {
                    id: 'u3',
                    name: 'Daniil',
                },
            }, {
                id: 'm3',
                content: 'What about you?',
                createdAt: '2021-08-03T14:49:40.000Z',
                user: {
                    id: 'u3',
                    name: 'Daniil',
                },
            }, {
                id: 'm4',
                content: 'Good as well, preparing for the stream now.',
                createdAt: '2021-08-03T14:50:00.000Z',
                user: {
                    id: 'u1',
                    name: 'Vadim',
                },
            }, {
                id: 'm5',
                content: 'How is your uni going?',
                createdAt: '2021-08-03T14:51:00.000Z',
                user: {
                    id: 'u1',
                    name: 'Vadim',
                },
            }, {
                id: 'm6',
                content: 'It is a bit tough, as I have 2 specializations. How about yours? Do you enjoy it?',
                createdAt: '2021-08-03T14:49:00.000Z',
                user: {
                    id: 'u3',
                    name: 'Daniil',
                },
            }]
        },
        {
            id: '3',
            users: [{
                id: 'u1',
                name: 'Vadim',
                imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
            }, {
                id: 'u4',
                name: 'Alex',
                imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.png',
            }],
            messages: [{
                id: 'm1',
                content: 'How are you, Lukas!',
                createdAt: '2021-08-10T12:48:00.000Z',
                user: {
                    id: 'u1',
                    name: 'Vadim',
                },
            }, {
                id: 'm2',
                content: 'I am good, good',
                createdAt: '2021-08-03T14:49:00.000Z',
                user: {
                    id: 'u4',
                    name: 'Lukas',
                },
            }, {
                id: 'm3',
                content: 'What about you?',
                createdAt: '2021-08-03T14:49:40.000Z',
                user: {
                    id: 'u4',
                    name: 'Lukas',
                },
            }, {
                id: 'm4',
                content: 'Good as well, preparing for the stream now.',
                createdAt: '2021-08-03T14:50:00.000Z',
                user: {
                    id: 'u1',
                    name: 'Vadim',
                },
            }, {
                id: 'm6',
                content: 'It is a bit tough, as I have 2 specializations. How about yours? Do you enjoy it?',
                createdAt: '2021-08-03T14:49:00.000Z',
                user: {
                    id: 'u4',
                    name: 'Lukas',
                },
            }, {
                id: 'm7',
                content: 'Big Data is really interesting. cai nay cua message 1 :).',
                createdAt: '2021-08-03T14:53:00.000Z',
                user: {
                    id: 'u1',
                    name: 'Vadim',
                },
            }, {
                id: 'm5',
                content: 'How is your uni going?',
                createdAt: '2021-08-03T14:51:00.000Z',
                user: {
                    id: 'u1',
                    name: 'Vadim',
                },
            }]
        },]

    // TÌM TIN NHẮN TRC ĐÓ ĐỂ TẠO ĐƯỜNG LINE NGĂN CÁCH TIN NHẮN GIỮA 1 KHOẢNG T/G DÀI, SẴN TIỆN LÀM HIỆU ỨNG TIN NHẮN
    // lay tin nhan trc do
    // dung api lay message nằm trc, dùng biến index (đã dc truyền bên ChatScreen)
    const messageBefore =
        Chats.find((item) => {
            return idRoom == item.id;
        })?.messages[index - 1];

    const isSameMessOFUserBefore = messageBefore?.user.id === message.user.id;

    // lay tin nhan sau
    // dung api lay message nằm sau, dùng biến index (đã dc truyền bên ChatScreen)
    const messageAfter =
        Chats.find((item) => {
            return idRoom == item.id;
        })?.messages[index + 1];
    const isSameMessOFUserAfter = messageAfter?.user.id === message.user.id;

    // ko can quan tam ==============================================================================
    // xac dinh vi tri message
    const isHeader = !isSameMessOFUserBefore && isSameMessOFUserAfter;
    const isCenter = isSameMessOFUserAfter && isSameMessOFUserBefore && messageAfter && messageBefore;
    const isFooter = isSameMessOFUserBefore;
    // ===============================================================================================

    const isMyMessage = message.user.id === 'u1'
    const userImgUri = Users.find((user) => {
        return user.id == message.user.id;
    })?.imageUri;

    if (isMyMessage) {
        return (
            <View
                style={[
                    isMyMessage ? styles.myContainer : styles.container,
                    { marginBottom: 5 }
                ]}
            >
                <Text style={[
                    styles.message,
                    styles.myMessage,
                    theme.dark ? styles.myDarkMessage : styles.myLightMessage
                ]}>
                    {message.content}
                </Text>
                {!messageAfter ?
                    <Image source={{ uri: '' + userImgUri }} style={styles.smallAvatar} /> :
                    <View style={styles.smallAvatar} />
                }
            </View>
        )
    }
    else {
        return (
            <View style={[styles.container, { marginBottom: 5 }]}>
                <Image source={{ uri: '' + userImgUri }} style={styles.avatar} />
                <Text style={[
                    styles.message,
                    theme.dark ? styles.darkMessage : styles.lightMessage
                ]}>
                    {message.content}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        maxWidth: '100%',
        margin: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingLeft: 10,
    },
    myContainer: {
        maxWidth: '100%',
        margin: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    message: {
        maxWidth: '70%',
        backgroundColor: '#3a3b3c',
        color: '#fff',
        padding: 8,
        borderRadius: 20,
        paddingHorizontal: 18,
        fontSize: responsiveFontSize(1.7),
    },
    myLightMessage: {
        backgroundColor: '#64868E',
        color: '#fff'
    },
    myDarkMessage: {
        backgroundColor: '#64868E',
        color: '#fff',
    },
    lightMessage: {
        backgroundColor: '#e6e6e6',
        color: '#000',
    },
    darkMessage: {
        backgroundColor: '#3a3b3c',
        color: '#fff',
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 30,
        marginRight: 10,
    },
    smallAvatar: {
        width: 15,
        height: 15,
        borderRadius: 50,
        marginHorizontal: 3,
    },
    messageHeader: {
        borderBottomLeftRadius: 5,
    },
    messageCenter: {
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
    },
    messageFooter: {
        borderTopLeftRadius: 5,
    },
    myMessageHeader: {
        borderBottomRightRadius: 5,
    },
    myMessageCenter: {
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
    },
    myMessageFooter: {
        borderTopRightRadius: 5,
    },
})
export default Message
