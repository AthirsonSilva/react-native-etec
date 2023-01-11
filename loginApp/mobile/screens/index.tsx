import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import AuthScreen from './AuthScreen/index.js'
import styles from './styles.js'

export default function Screen() {
	return (
		<SafeAreaView style={styles.container}>
			<AuthScreen />
			<StatusBar />
		</SafeAreaView>
	)
}
