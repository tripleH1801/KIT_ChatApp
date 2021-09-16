import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { useNavigation } from '@react-navigation/core'
// import { emailValidator } from '../helpers/emailValidator'
// import { passwordValidator } from '../helpers/passwordValidator'

export default function LoginScreen() {
    const [sdt, setSdt] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })

    const navigation = useNavigation();

    const onLoginPressed = () => {
        navigation.navigate('Chat')
    }

    return (
        <Background>
            {/* <BackButton goBack={navigation.goBack} /> */}
            <Logo />
            <Text style={styles.header}> ĐĂNG NHẬP </Text>
            <TextInput
                label="Số điện thoại"
                returnKeyType="next"
                value={sdt.value}
                onChangeText={(text) => setSdt({ value: text, error: '' })}
                error={!!sdt.error}
                errorText={sdt.error}
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
            />
            <TextInput
                label="Mật khẩu"
                returnKeyType="done"
                value={password.value}
                onChangeText={(text) => setPassword({ value: text, error: '' })}
                error={!!password.error}
                errorText={password.error}
                secureTextEntry
            />
            <View style={styles.forgotPassword}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('ResetPasswordScreen')}
                >
                    <Text style={styles.forgot}> Quên mật khẩu ?</Text>
                </TouchableOpacity>
            </View>
            <Button mode="contained" onPress={onLoginPressed}>
                ĐĂNG NHẬP
            </Button>
            <View style={styles.row}>
                <Text>không có tài khoản ? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
                    <Text style={styles.link}>Đăng ký</Text>
                </TouchableOpacity>
            </View>
        </Background>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 21,
        color: theme.colors.primary,
        fontWeight: 'bold',
        paddingVertical: 12,
    },
    forgotPassword: {
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 24,
    },
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    forgot: {
        fontSize: 13,
        color: 'blue',
        fontWeight: 'bold',
    },
    link: {
        fontWeight: 'bold',
        color: theme.colors.primary,
    },
})