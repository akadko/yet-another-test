import React from 'react'
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native'

interface Props {
    text: string,
    onPress?: () => void,
    style?: ViewStyle,
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 16,
        paddingVertical: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'blue',
        borderRadius: 8,
    },
    text: {
        fontSize: 20,
        color: 'white',
    },
})

const Button: Props => React$Node = ({ text, onPress, style }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, style]} activeOpacity={0.7}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button
