import React from 'react'
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import styles from '../styles'

const DetailsScreen = ({ navigation }: any) => {
	return (
		<View style={styles.body}>
			<ImageBackground
				style={styles.bgimage}
				source={require('../assets/rock.gif')}
			>
				<View style={{ marginTop: '40vh' }}>
					<Text style={[styles.title, { color: '#fff' }]}>
						Details Screen
					</Text>
					<TouchableOpacity
						style={styles.button}
						onPress={() => navigation.navigate('Blank')}
					>
						<Text>Go to blank screen</Text>
					</TouchableOpacity>
				</View>
			</ImageBackground>
		</View>
	)
}

export default DetailsScreen
