import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const PostItem = ({ title, body }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text>{body}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 8,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
    },
})

export default PostItem
