import React, { useState } from 'react'
import {
	FlatList,
	ListRenderItem,
	Text,
	TextInput,
	TouchableOpacity,
	View
} from 'react-native'
import getIMC from './getImc'
import styles from './styles'

type ItemProps = {
	title: string
	condition: string
}

const App = () => {
	const renderItem = ({ title, condition }: ItemProps) => (
		<Item title={title} condition={condition} />
	)

	const Item = ({ title, condition }: ItemProps) => (
		<View style={styles.item}>
			<Text style={styles.listTitle}>
				{title}: {condition}
			</Text>
		</View>
	)

	const DATA = [
		{
			id: 1,
			title: 'Underweight',
			condition: '< 18'
		},
		{
			id: 2,
			title: 'Normal',
			condition: '18.5 - 24.9'
		},
		{
			id: 3,
			title: 'Overweight',
			condition: '25 - 29.9'
		},
		{
			id: 4,
			title: 'Obesity I',
			condition: '30 - 34.9'
		},
		{
			id: 5,
			title: 'Obesity II',
			condition: '35 - 39.9'
		},
		{
			id: 6,
			title: 'Obesity II',
			condition: '40 >'
		}
	]

	const [height, setHeight] = useState<number>(0)
	const [weight, setWeight] = useState<number>(0)
	const [imc, setImc] = useState<string>('')

	const divide = () => {
		setImc(getIMC((weight * 10000) / (height * height)))
	}

	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.title}> Add two values </Text>
			</View>

			<View style={styles.lilMargin}>
				<Text> Your height: </Text>
				<TextInput
					style={styles.textInputs}
					placeholder='Enter your height in (cm). Example: 1.80'
					placeholderTextColor='#000'
					autoFocus={true}
					keyboardType={'numeric'}
					onChange={(e) => setHeight(parseFloat(e.nativeEvent.text))}
				/>
			</View>

			<View style={styles.lilMargin}>
				<Text> Your weight: </Text>
				<TextInput
					style={styles.textInputs}
					placeholder='Enter your weight in (kg). Example: 80'
					placeholderTextColor='#000'
					keyboardType={'numeric'}
					onChange={(e) => setWeight(parseFloat(e.nativeEvent.text))}
				/>
			</View>

			<View style={styles.lilMargin}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => divide()}
				>
					<Text>Get IMC</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.lilMargin}>
				<Text style={styles.answer}> Your IMC: {imc} </Text>
			</View>

			<View style={styles.lilMargin}>
				<FlatList
					data={DATA}
					renderItem={
						renderItem as unknown as ListRenderItem<ItemProps>
					}
					keyExtractor={(item) => item.id.toString()}
				/>
			</View>
		</View>
	)
}

export default App
