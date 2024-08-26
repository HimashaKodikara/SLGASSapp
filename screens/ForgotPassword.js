import React, { Component, Fragment } from 'react';
import { Text, SafeAreaView, View, StyleSheet,TextInput ,TouchableOpacity} from 'react-native';
import { Card } from 'react-native-paper';

export default function ForgotPassword({navigation}){
    const pressHandel = () =>{
        
        navigation.push('Login');
      }
  
    return (
        <SafeAreaView style={styles.container}>
            <Card style={styles.card}>
          <Text style={styles.text}>
              Type your Email we will help reset your password
          </Text>
          <TextInput
           
           style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
        <TouchableOpacity onPress={pressHandel} style={styles.button}>
            <Text onPress={pressHandel} style={styles.tex}>Continue</Text>
        </TouchableOpacity>
       </Card>
      </SafeAreaView>
    );
  }


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f08080',
      
    },
    text: {
      color: '#333',
      fontSize: 24,
      marginLeft: 25,
      marginRight:25,
     
    },
    TextInput: {
      margin: 25,
      backgroundColor:'#ff69b4',
      height: 50,
      textAlign:'center',
       
    padding: 10,
    marginLeft: 20,
    },
    button:{
      alignSelf:'stretch',
    alignItems:"center",
    padding:10,
    backgroundColor:'#59cbbd',
    marginTop:150,
    marginLeft:70,
    marginRight:70,
    marginBottom:0
      
    },tex:{
        color:'white',
        fontSize:20
    },card:{
        marginTop:150,
        padding:10
    }
  });
