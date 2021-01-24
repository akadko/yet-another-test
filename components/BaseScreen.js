import React from 'react'
import { View, StyleSheet } from 'react-native';

const BaseScreen = ({ children }) => <View style={styles.screen}>{children}</View>

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: 32,
        paddingTop: 16,
    },
})

export default BaseScreen
