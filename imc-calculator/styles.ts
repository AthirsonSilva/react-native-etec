import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container:{
      backgroundColor:'#fff',
      height:'100%'
  
    },
  
    title:{
      color:'#000',
      fontSize:25,
      textAlign:'center',
      marginTop:25,
      marginBottom:10
    },

    listTitle: {
      fontSize: 24,
      textAlign: 'center',
    },
  
    textInputs:{
      borderWidth:1,
      borderColor:'#000',
      color:'#000',
      borderRadius:40,
      paddingLeft: 25,
      height:60    
    },
  
    answer:{
      color:'#000',
      fontSize:25,
      textAlign:'center',
      marginTop:30
    },
    lilMargin: {
      margin: 15
    },
    button: {
      alignItems: "center",
      backgroundColor: "#ddd",
      padding: 10,
      marginHorizontal: 15,
      borderRadius: 10
    },
    item: {
      backgroundColor: '#ddd',
      padding: 5,
      paddingVertical: 10,
      marginVertical: 5,
      marginHorizontal: 15,
      borderRadius: 10,
    },
    image: {
      width: '10vh',
      weight: '10vw',
      resizeMode: 'stretch'
    }
});

export default styles