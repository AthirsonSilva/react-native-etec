import React, { useState} from 'react';
import { Text, View, TextInput, FlatList } from 'react-native';
import styles from './styles';
import getIMC from './getImc';
import { TouchableOpacity } from 'react-native';

const App = () => {


  const renderItem = ({ item }) => (
    <Item title={ item.title } condition={ item.condition } />
  );

  const Item = ({ title, condition }) => (
    <View style={styles.item}>
      <Text style={ styles.listTitle }>{ title }: { condition }</Text>
    </View>
  );

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
    },
]

  const [height, setHeight] = useState()
  const [weight, setWeight] = useState()
  const [imc, setImc] = useState()

  const divide = () => {
    setImc(getIMC((parseFloat(weight) * 10000) / (parseFloat(height) * parseFloat(height))))
  } 
  
  const clear = () => setHeight('') && setWeight('') && setImc('')
 
  return(
        <View style={ styles.container }>

          <View>
            <Text style={ styles.title }> Somando dois Valores </Text>
          </View>

          <View style={ styles.lilMargin }>
            <Text> Your height:  </Text>          
            <TextInput              
              style={ styles.textInputs }
              placeholder='Enter your height in (cm). Example: 1.80'
              placeholderTextColor='#000'
              autoFocus={true}
              keyboardType={'numeric'}

              onChangeText = {text =>setHeight(text)}
            />            
          </View>           

          <View style={ styles.lilMargin }>
            <Text> Your weight:  </Text>          
            <TextInput
              style={styles.textInputs}
              placeholder='Enter your weight in (kg). Example: 80'
              placeholderTextColor='#000'              
              keyboardType={'numeric'}

              onChangeText = {text =>setWeight(text)}
            />            
          </View>           

          <View style={ styles.lilMargin }>
            <TouchableOpacity
              style={ styles.button }
              onPress = {() => divide()}
            >
                <Text>Get IMC</Text>
            </TouchableOpacity>
          </View>

          <View style={ styles.lilMargin }>
              <Text style={styles.answer}> Your IMC: {imc}  </Text>
          </View>

          <View style={ styles.lilMargin }>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
          
        </View>
  );
}

export default App