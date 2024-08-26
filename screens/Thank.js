import React from 'react';
import { StyleSheet,View,Text,Button,TouchableOpacity } from 'react-native';
export default function ReviewDetails({navigation}){
   
    const pressHandeler = () =>{
        
        navigation.push('Dashboard');
     }
    const pressHandele = () =>{
        navigation.goBack();
    }
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Thank you for Register!</Text>
            <TouchableOpacity onPress={pressHandeler} style={styles.button}>
                <Text style={styles.btnText} onPress={pressHandeler}>Continue</Text>
                
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
   container:{
    flex:1,
    backgroundColor:'#36485f',
    justifyContent:'center',
    paddingLeft:20,
    
   },text:{
       fontSize:30,
       color:'white',
       textAlign:'center'
   },
   btnText:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:25
},
button:{
    alignSelf:'stretch',
    alignItems:"center",
    padding:20,
    backgroundColor:'#59cbbd',
    marginRight:20,
    marginTop:300
    
},
});