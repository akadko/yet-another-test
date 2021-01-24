import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

const EmptyScreen = ({ text = 'No data.' }) => (
    <View style={styles.container}>
        <Text>{text}</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default EmptyScreen
