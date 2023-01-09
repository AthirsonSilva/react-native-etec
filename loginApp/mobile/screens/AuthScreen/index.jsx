import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Platform, SafeAreaView, ImageBackground } from 'react-native'
import styles from "./styles";

const API_URL = Platform.OS === 'ios' ? 'http://127.0.0.1:5000' : 'http://10.0.2.2:5000'

const AuthScreen = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const [isError, setIsError] = useState(false)
    const [message, setMessage] = useState('')
    const [isLogin, setIsLogin] = useState(true)

    const onChangeHandler = () => {
        setIsLogin(!isLogin)
        setMessage('')
    }

    const onLoggedIn = token => {
        fetch(`${API_URL}/private`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        }).then(async response => {
            try {
                const jsonResponse = await response.json()
                if (response.status === 200) {
                    setMessage(jsonResponse.message)
                }
            } catch (error) {
                console.error(error)
            }
        })
    }

    const onSubmitHandler = () => {
        const payload = {
            email,
            name,
            password,
        };
        fetch(`${API_URL}/${isLogin ? 'login' : 'signup'}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
        .then(async response => { 
            try {
                const jsonResponse = await response.json()
                if (response.status !== 200) {
                    setIsError(true)
                    setMessage(jsonResponse.message)
                } else {
                    onLoggedIn(jsonResponse.token)
                    setIsError(false)
                    setMessage(jsonResponse.message)
                }
            } catch (error) {
                console.error(error)
            }
        })
        .catch(error => {
            console.error(error)
        })
    }

    const getMessage = () => {
        const status = isError ? 'Error' : 'Success'
        return status + message
    }

    const image = require('../../public/images/background.jpg')

    return (
        <SafeAreaView>
            <ImageBackground source={image} style={styles.image}>
                <View style={styles.card}>
                    <Text style={styles.heading}>
                        { isLogin ? 'Login' : 'Register' }
                    </Text>
                    <View style={styles.form}>
                        <View style={styles.inputs}>
                            <TextInput style={styles.input} placeholder="Email" autoCapitalize="none" onChangeText={setEmail}></TextInput>
                            {!isLogin && <TextInput style={styles.input} placeholder="Name" onChangeText={setName}></TextInput>}
                            <TextInput secureTextEntry={true} style={styles.input} placeholder="Password" onChangeText={setPassword}></TextInput>
                            <Text style={[styles.message, {color: isError ? 'red' : 'green'}]}>{message ? getMessage() : null}</Text>
                            <TouchableOpacity style={styles.button} onPress={onSubmitHandler}>
                                <Text style={styles.buttonText}>Done</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonAlt} onPress={onChangeHandler}>
                                <Text style={styles.buttonAltText}>{isLogin ? 'Sign Up' : 'Log In'}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default AuthScreen