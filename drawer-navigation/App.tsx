import { FontAwesome, MaterialIcons } from '@expo/vector-icons'
import {
	BottomTabBar,
	createBottomTabNavigator
} from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import * as React from 'react'

import AccountScreen from './screens/AccountScreen'
import BookScreen from './screens/BookScreen'
import HomeScreen from './screens/HomeScreen'
import MapsScreen from './screens/MapsScreen'

const color = '#963333'

const Tab = createBottomTabNavigator()

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen
					name='Home'
					component={HomeScreen}
					options={{
						tabBarIcon: () => (
							<MaterialIcons
								name='account-circle'
								size={24}
								color={color}
							/>
						),
						headerShown: false
					}}
				/>
				<Tab.Screen
					name='Maps'
					component={MapsScreen}
					options={{
						tabBarIcon: () => (
							<MaterialIcons
								name='account-circle'
								size={24}
								color={color}
							/>
						),
						headerShown: false
					}}
				/>
				<Tab.Screen
					name='Books'
					component={BookScreen}
					options={{
						tabBarIcon: () => (
							<MaterialIcons
								name='account-circle'
								size={24}
								color={color}
							/>
						),
						headerShown: false
					}}
				/>

				<Tab.Screen
					name='Account'
					component={AccountScreen}
					options={{
						tabBarIcon: () => (
							<MaterialIcons
								name='account-circle'
								size={24}
								color={color}
							/>
						),
						headerShown: false
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	)
}

export function bottomTabs() {
	;<BottomTabBar.Navigator>
		<BottomTabBar.Screen
			name='Home'
			component={HomeScreen}
			options={{
				TabBarIcon: (color: string) => (
					<MaterialIcons
						name='account-circle'
						size={24}
						color={color}
					/>
				)
			}}
		/>
	</BottomTabBar.Navigator>
}

function TabBarIcon(props: any) {
	return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />
}
