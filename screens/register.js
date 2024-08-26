import React from 'react';
import { StyleSheet,View,Text,Button,TextInput,TouchableOpacity, ImageBackground,placeholder} from 'react-native';



export default function Content({navigation}){

   
    const pressHandeler = () =>{
        
        navigation.push('Thank');
     }
    const pressHandel = () =>{
        navigation.goBack();
    }
    return(
       
    <View style={styles.container}>
        
       <View style = {styles.reforms}>
           <Text style={styles.header}>Registration</Text>
           <TextInput style={styles.textinput} placeholder='Your Name'
           underlineColorAndroid={'transparent'}/>

           <TextInput style={styles.textinput} placeholder='Your Email'
               underlineColorAndroid={'transparent'}/>

           < TextInput style={styles.textinput} placeholder='Your Password'
              secureTextEntry={true} underlineColorAndroid={'transparent'}/>

            <TouchableOpacity  onPress={pressHandeler} style={styles.button}>
                <Text style={styles.btnText} onPress={pressHandeler}>Sign Up</Text>
                
            </TouchableOpacity>
       </View>
      
       </View>
      
    )
}

const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#36485f',
        justifyContent:'center',
        paddingLeft:60,
        paddingRight:60
    },
 
     
  header:{
      fontSize:30,
      color:'#fff',
      paddingBottom:10,
      marginBottom:40,
      borderBottomColor:'#199187',
      borderBottomWidth:3,
      
  },textinput:{
    color:'#fff',
      alignSelf:'stretch',
      height:40,
      marginBottom:30,
    
      borderBottomColor:'white',
      borderBottomWidth:1,
      fontSize:20
  },
  button:{
      alignSelf:'stretch',
      alignItems:"center",
      padding:20,
      backgroundColor:'#59cbbd',
      marginTop:30,
  },
  btnText:{
      color:'#fff',
      fontWeight:'bold'
  }
});