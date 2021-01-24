import React, { useState } from 'react'
import { Text, TextInput, View, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Button from './Button';

const LoginForm = ({ onLogin }) => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [saveData, setSaveData] = useState(false)

    const onLoginPress = () => {
        onLogin(login, saveData)
    }

    return (
        <>
            <TextInput
                value={login}
                onChangeText={setLogin}
                placeholder="Enter login"
                style={styles.input}
            />
            <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Enter password"
                style={styles.input}
                secureTextEntry
            />
            <View style={styles.checkboxRow}>
                <CheckBox value={saveData} onValueChange={setSaveData} animationDuration={0} />
                <Text style={styles.checkboxLabel}>Remember me</Text>
            </View>
            <Button text="Log in" onPress={onLoginPress} style={styles.button} />
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        paddingBottom: 16,
        fontSize: 18,
    },
    checkboxRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
    },
    checkboxLabel: {
        paddingLeft: 8,
        fontSize: 18,
    },
    button: {
        marginTop: 16,
    },
})

export default LoginForm
