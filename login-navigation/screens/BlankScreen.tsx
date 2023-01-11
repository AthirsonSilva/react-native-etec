import React from 'react'
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import styles from '../styles'

const BlankScreen = ({ navigation }: any) => {
	return (
		<View style={styles.body}>
			<ImageBackground
				style={styles.bgimage}
				source={require('../assets/pikachu.gif')}
			>
				<View style={{ marginTop: '40vh' }}>
					<Text style={[styles.title, { color: '#fff' }]}>
						Blank Screen
					</Text>
					<TouchableOpacity
						style={styles.button}
						onPress={() => navigation.navigate('Home')}
					>
						<Text>Go to home screen</Text>
					</TouchableOpacity>
				</View>
			</ImageBackground>
		</View>
	)
}

export default BlankScreen
