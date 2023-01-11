import axios, { AxiosError, AxiosResponse } from 'axios'
import * as dotenv from 'dotenv'
import Joi from 'joi'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Text, TextInput, View } from 'react-native'
import styles from './style'
dotenv.config()

const API_URL = process.env.URL || 'http://127.0.0.1:8000'

const LoginScreen = ({ navigation }: any) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [message, setMessage] = useState('')

	const schema = Joi.object({
		emailCliente: Joi.string()
			.email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
			.required(),
		senhaCliente: Joi.string()
			.pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
			.required()
	})

	async function handleSubmit(e: any) {
		e.preventDefault()

		const packets = {
			emailCliente: email,
			senhaCliente: password
		}

		if (schema.validate(packets)) {
			await axios({
				method: 'post',
				url: `${API_URL}/api/loginCliente`,
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				data: JSON.stringify({
					emailCliente: email,
					senhaCliente: password
				})
			})
				.then((response: AxiosResponse) =>
					console.log('Response: ' + JSON.stringify(response.data))
				)
				.catch((error: AxiosError) =>
					console.log(
						'ERROR:: ' +
							JSON.stringify(
								error.response?.data || error.message
							)
					)
				)
		} else {
			setMessage('Preencha todos os campos corretamente')
		}
	}

	return (
		<View style={styles.container}>
			<Form onSubmit={handleSubmit}>
				<Form.Label
					style={{
						fontSize: 32,
						fontWeight: 'bold',
						marginBottom: 20,
						color: '#963333'
					}}
				>
					Login
				</Form.Label>
				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<Form.Label>Email</Form.Label>
					<br></br>
					<TextInput
						style={styles.formInput}
						onChangeText={(text) => setEmail(text)}
						placeholder='Enter email'
					/>
				</Form.Group>

				<Form.Group className='mb-3' controlId='formBasicPassword'>
					<Form.Label>Senha</Form.Label>
					<br></br>
					<TextInput
						style={styles.formInput}
						secureTextEntry={true}
						onChangeText={(text) => setPassword(text)}
						placeholder='Password'
					/>
				</Form.Group>
				<Button variant='outline-danger' type='submit'>
					Entrar
				</Button>

				<View style={{ marginVertical: '5%' }}>
					<Form.Group className='mb-3' controlId='formBasicCheckbox'>
						<Text
							style={{
								color: '#000000'
							}}
							onPress={() => navigation.navigate('Register')}
						>
							Não possui uma conta?{' '}
							<Text style={{ color: '#963333' }}>
								Cadastre-se
							</Text>
						</Text>
					</Form.Group>
				</View>
			</Form>
		</View>
	)
}

export default LoginScreen
