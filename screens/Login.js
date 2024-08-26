import React,{useRef,useEffect} from 'react';
import { StyleSheet,View,Text,Button, Animated,TextInput,TouchableOpacity,ImageBackground} from 'react-native';
import  { useState } from "react";
import { initializeApp } from "firebase/app";
import {Card} from 'react-native-paper';
import { app} from "../firebaseConfig";
import { getAuth, signInWithEmailAndPassword ,signOut,
  onAuthStateChanged,GoogleAuthProvider} from "firebase/auth";

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 100,
        duration: 10000,
      }
    ).start();
  }, [fadeAnim])

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
}


export default function Home({navigation}){
    
    
    let auth = getAuth();
    const image = {uri:"https://lankasara.com/wp-content/uploads/2021/06/gas.jpg"};
    const [data,setData] = useState({
      email: '',
      password: ''
    });
    const handleInput = (event) =>{
      let inputs = {[event.target.name]:event.target.Value}
      setData({...data,...inputs});
    }

    const handleSubmit = () => {
      signInWithEmailAndPassword(auth,data.email,data.password)
       .then((userCredential)=>{
         console.log(response.user);
        alert("lod");
        navigation.push('Dashboard');
        const user = userCredential.user;
       })
       .catch((err)=>{
        alert("b");
        alert(err.message)
       });
    };
    
const pressHandeler = () =>{
   //mnavigation.navigate(' ReviewDetails');
   navigation.push('Dashboard');
}
const pressHandele = () =>{
  //mnavigation.navigate(' ReviewDetails');
  navigation.push('ForgotPassword');
}
const pressHandel = () =>{
    
    navigation.push('Register');
 }
 
    return(
        <View style={styles.container}>
             <ImageBackground source={image} resizeMode="cover">
            <FadeInView>  
            <View style={styles.inputView}>  
            <TextInput
           style={styles.TextInput}
          placeholder="Email"
          name="email"
          type="email"
          Value='email'
          placeholderTextColor="#003f5c"
          onChange={event => handleInput(event)}
        />
       
        <TextInput
          style={styles.TextInput}
          name="password"
          type="password"
          Value='password'
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChange={event => handleInput(event)}
        />
      </View>
      </FadeInView>
      <TouchableOpacity onPress={pressHandele} >
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
    
          <TouchableOpacity onPress={handleSubmit } style={styles.Login}>
             <Text onPress={handleSubmit}  style={styles.text}>Login</Text>
            </TouchableOpacity> 
        
     
     
          <TouchableOpacity onPress={pressHandel} style={styles.Register}>
            <Text onPress={pressHandel} style={styles.text}>Register</Text>
      </TouchableOpacity>
      
      </ImageBackground>    
        </View>

        
    )
}
const styles = StyleSheet.create({
    container:{
        
        flex:1,
       
        
    },TextInput:{
        height: 50,
       
    padding: 10,
    marginLeft: 20,
    },
 
    forgot_button: {
      height: 30,
      marginBottom: 30,
      textAlign:'center',
      fontSize:20,
      fontWeight:'bold'
     
   
    },
    TextInput: {
        height: 50,
        padding: 10,
        margin: 20,
        textAlign:'center',
        backgroundColor:'#f0e68c',
        borderRadius:80,
        fontSize:15
       
      },inputView:{
          marginTop:150
      },Login:{
            alignSelf:'stretch',
        alignItems:"center",
        padding:10,
        backgroundColor:'#59cbbd',
        marginTop:100,
        marginLeft:70,
        marginRight:70
        
        
      },
      Register:{
        alignSelf:'stretch',
      alignItems:"center",
      padding:10,
      backgroundColor:'#59cbbd',
      marginTop:50,
      marginLeft:70,
      marginRight:70,
      marginBottom:0
        
      },text:{
          color:'white',
          fontSize:20
      }
    
})
