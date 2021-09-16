import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import ChatItem from './ChatItem'

// testdata
const listChats = [{
    id: '1',
    users: [{
      id: 'u1',
      name: 'Vadim',
      imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
      status: true,
    }, {
      id: 'u2',
      name: 'Lukas',
      imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg',
      status: true,
    }],
    lastMessage: {
      id: 'm1',
      content: 'Well done this sprint, guys!',
      createdAt: '2020-10-03T14:48:00.000Z',
    }
  }, {
    id: '2',
    users: [{
      id: 'u1',
      name: 'Vadim',
      imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
      status: true,
    }, {
      id: 'u3',
      name: 'Daniil',
      imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.jpg',
      status: true,
    }],
    lastMessage: {
      id: 'm2',
      content: 'How are you doing?',
      createdAt: '2020-10-02T15:40:00.000Z',
    }
  }, {
    id: '3',
    users: [{
      id: 'u1',
      name: 'Vadim',
      imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
      status: true,
    }, {
      id: 'u4',
      name: 'Alex',
      imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.png',
      status: false,
    }],
    lastMessage: {
      id: 'm3',
      content: 'Hi, Vadim.',
      createdAt: '2020-10-02T14:48:00.000Z',
    }
  }, {
    id: '4',
    users: [{
      id: 'u1',
      name: 'Vadim',
      imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
      status: true,
    }, {
      id: 'u5',
      name: 'Vlad',
      imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/4.jpg',
      status: true,
    }],
    lastMessage: {
      id: 'm4',
      content: 'Can you review my last merge',
      createdAt: '2020-09-29T14:48:00.000Z',
    }
  }, {
    id: '5',
    users: [{
      id: 'u1',
      name: 'Vadim',
      imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
      status: true,
    }, {
      id: 'u6',
      name: 'Elon Musk',
      imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/5.jpg',
      status: true,
    }],
    lastMessage: {
      id: 'm5',
      content: 'I would be happy',
      createdAt: '2020-09-30T14:48:00.000Z',
    }
  }, {
    id: '6',
    users: [{
      id: 'u1',
      name: 'Vadim',
      imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
      status: true,
    }, {
      id: 'u7',
      name: 'Adrian',
      imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/6.png',
      status: false,
    }],
    lastMessage: {
      id: 'm6',
      content: 'I have a solution',
      createdAt: '2020-10-02T15:40:00.000Z',
    }
  }, {
    id: '7',
    users: [{
      id: 'u1',
      name: 'Vadim',
      imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
      status: true,
    }, {
      id: 'u8',
      name: 'Borja',
      imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/7.png',
      status: false,
    }],
    lastMessage: {
      id: 'm7',
      content: 'How are you doing?',
      createdAt: '2020-10-02T15:40:00.000Z',
    }
  }, {
    id: '8',
    users: [{
      id: 'u1',
      name: 'Vadim',
      imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
      status: true,
    }, {
      id: 'u9',
      name: 'Mom',
      imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/8.png',
      status: false,
    }],
    lastMessage: {
      id: 'm8',
      content: 'Dear, did you eat?',
      createdAt: '2020-09-27T15:40:00.000Z',
    }
  }, {
    id: '9',
    users: [{
      id: 'u1',
      name: 'Vadim',
      imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
      status: true,
    }, {
      id: 'u10',
      name: 'Angelina Jolie',
      imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/9.png',
      status: false,
    }],
    lastMessage: {
      id: 'm9',
      content: 'Meet me at the same place',
      createdAt: '2020-09-25T15:40:00.000Z',
    },
  }, {
    id: '10',
    users: [{
      id: 'u1',
      name: 'Vadim',
      imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
      status: true,
    }, {
      id: 'u11',
      name: 'Elles',
      imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/9.png',
      status: false,
    }],
    lastMessage: {
      id: 'm10',
      content: 'Meet me at the same place',
      createdAt: '2020-09-25T15:40:00.000Z',
    },
  }]

const ListChatRooms = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                data={listChats}
                renderItem={({ item }) =>
                    <ChatItem chatRoom={item} />
                }
                scrollEnabled={false}
            />
        </SafeAreaView>
    )
}

export default ListChatRooms
