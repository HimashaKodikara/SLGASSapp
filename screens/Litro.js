import React, { useState } from 'react';
import { StyleSheet,View,Text,Dimensions,Button,TouchableOpacity,onVlaueChange,ImageBackground,TextInput,Alert} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import {Card} from 'react-native-paper';


export default function ReviewDetails(){
   
    const  createTwoButtonAlert = () =>
   Alert.alert(
     "Notification",
     "We send the nearest Fuall station to you email",
     [
       {
         text: "Cancel",
         onPress: () => console.log("Cancel Pressed"),
         style: "cancel"
       },
       { text: "OK", onPress: () => console.log("OK Pressed") }
     ]
   );
   const [selectedValue,setSelectedValue]= useState("Mobile");
    
    return(
        <View style={styles.container}>
            
                 <View style={styles.cont}>
                     <Card style={styles.card}>
                    <Text style={styles.pic}>Select Weight of Gas</Text>
                    
                    <Picker 
                    style={styles.picke}
                    selectedValue={selectedValue}
                    
                    onValueChange={(itemValue,itemIndex) => setSelectedValue(itemValue)}
                    
                    >
                        <Picker.Item label="5 Kg" value="5 Kg"/>
                        <Picker.Item label="12.5 Kg" value="12.5 Kg"/>
                        <Picker.Item label="37.5 Kg" value="37.5 Kg"/>
                    </Picker>

                    <Text   style={styles.pick}>Distric</Text>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Type your city "
                        placeholderTextColor="#003f5c"
                    />
                    <Text   style={styles.pick}>Town</Text>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Type your Town "
                        placeholderTextColor="#003f5c"
                    />
            
           </Card>
           <TouchableOpacity style={styles.button} onPress={createTwoButtonAlert}>
               <Text style={styles.btnText} onPress={createTwoButtonAlert}>Search</Text>
           </TouchableOpacity>
           </View>
          
        
        </View>
    )
}
const styles = StyleSheet.create({
  container:{
      
     
  },cont:{
    justifyContent:'center',
   

  },
  card:{
     marginTop:100,
      margin:10,
      backgroundColor:'#87cefa'
  },
  pick:{
    height:50,
    width:100,
    fontWeight:'bold',
    marginLeft:150,
    marginRight:100,
    marginTop:50,
    fontSize:20 
 },pic:{
   fontSize:20,
   fontWeight:'bold',
   marginLeft:90
 },
    TextInput:{
     height: 50,
       
    padding: 10,
    marginLeft: 20,
    height: 50,
    padding: 10,
    margin: 20,
    textAlign:'center',
    backgroundColor:'red',
    borderRadius:0,
    fontSize:15
},picke:{
    fontSize:20,
   marginLeft:90
},

btnText:{
    
    fontWeight:'bold',
    fontSize:25,
    textAlign:'center'
},
button:{
  

    padding:10,
    marginTop:50,
    marginLeft:50,
    marginRight:50,
    backgroundColor:'#59cbbd',
   
    
},
});