import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from '../styles'

const HomeScreen = ({ navigation }: any) => {
	const [username, setUsername] = useState<string>('')
	const [password, setPassword] = useState<string>('')

	const checkPassword = (password: string) => {
		if (password === '123') {
			return true
		}

		return false
	}

	const checkUsername = (username: string) => {
		if (username === 'admin') {
			return true
		}

		return false
	}

	const checkCredentials = () => {
		if (checkUsername(username) && checkPassword(password)) {
			navigation.navigate('Details')
		} else if (checkUsername(username) && !checkPassword(password)) {
			window.alert('Incorrect password')
		} else if (!checkUsername(username)) {
			window.alert('This user does not exist')
		} else {
			window.alert('Invalid credentials')
		}
	}

	return (
		<View style={styles.container}>
			<Image
				source={require('../assets/emoji.png')}
				style={styles.image}
			/>
			<View style={styles.lilMargin}>
				<Text> Username: </Text>
				<TextInput
					style={styles.textInputs}
					placeholder='Enter your username. Example: foo'
					placeholderTextColor='#000'
					autoFocus={true}
					onChangeText={(input) => setUsername(input)}
				/>
			</View>

			<View style={styles.lilMargin}>
				<Text> Password: </Text>
				<TextInput
					style={styles.textInputs}
					placeholder='Enter your password. Example: mypass123'
					placeholderTextColor='#000'
					onChangeText={(input) => setPassword(input)}
				/>
			</View>

			<View style={styles.lilMargin}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => checkCredentials()}
				>
					<Text>Login</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default HomeScreen
