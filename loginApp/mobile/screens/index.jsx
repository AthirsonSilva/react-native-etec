import { SafeAreaView, StatusBar, Text } from 'react-native'
import AuthScreen from './AuthScreen/index.jsx'
import React from 'react'
import styles from './styles.js'

export default function Screen() {
    return (
        <SafeAreaView style={styles.container}>
            <AuthScreen />
            <StatusBar style='auto' />
        </SafeAreaView>
    )
}