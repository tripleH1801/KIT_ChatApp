import { useRoute } from '@react-navigation/core'
import React from 'react'
import { View, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import ChatInput from '../components/ChatInput'
import Message from '../components/Message'

const ChatScreen = () => {

    const route = useRoute();
    const { chatRoom } = route.params;

    // data ảo
    const databaseListMessage = [
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
            }, {
                id: 'm16',
                content: 'Big Data is 4.',
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


    // lay danh sach messae tu idroom

    const chatMessages = databaseListMessage.find((item) => {
        return item.id === chatRoom.id;
    });

    // const chatMessages = databaseListMessage[0];
    // số âm vì load từ tin nhắn mới nhất (từ cuối danh sách messages).
    const LOAD_MESSAGE_COUNT = -20;
    let messages = [];
    if (chatMessages != undefined) {
        messages = chatMessages.messages.slice(LOAD_MESSAGE_COUNT);
    }

    return (
        <View
            style={{ height: '100%', flexDirection: 'column', justifyContent: 'space-between' }}
        >
            <View
                style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'column', backgroundColor: '#fff' }}
            >
                {messages.length <= 0 ?
                    <View
                        style={{justifyContent: 'center', alignItems: 'center', height: '100%'}}
                    >
                        <Text>Bạn chưa có tin nhắn với người này</Text>
                    </View> :
                    <FlatList
                        inverted //auto nằm cuối danh sách
                        data={messages.reverse()}
                        renderItem={({ item }) => (
                            <Message
                                message={item}
                                index={chatMessages.messages.indexOf(item)}
                                idRoom={chatMessages.id}
                            />
                        )}
                        style={{

                        }}
                    />
                }

                <View style={{ flex: 10000 }}></View>
            </View>
            <ChatInput />
        </View>
    )
}

export default ChatScreen
