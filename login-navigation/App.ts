import * as React from 'react';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import BlankScreen from './screens/BlankScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './styles';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />        
        <Stack.Screen name="Details" component={DetailsScreen} />    
        <Stack.Screen name="Blank" component={BlankScreen} />    
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App