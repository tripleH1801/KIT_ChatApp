import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BubbleAvatar from './BubbleAvatar'

const ContactItem = ({ contact }) => {

    // lay sdt tu contact tim user tren api
    const anotherUser = {
        id: 'u2',
        name: 'Lukas',
        imageUri: 'https://nguoinoitieng.tv/images/nnt/100/0/beoj.jpg',
        status: true
    }

    return (
        <View style={styles.container}>
            <BubbleAvatar user={anotherUser} />
            <View style={styles.infoWrapper}>
                <Text style={styles.userName}>{contact.name}</Text>
                <Text style={styles.userNumbers}>{contact.phoneNumber}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        marginHorizontal: 5,
        marginVertical: 10
    },
    infoWrapper:{
        flexDirection: 'column',
        flex: 1
    },
    userName:{
        fontWeight: 'bold'
    },
    userNumbers:{

    }
})

export default ContactItem
