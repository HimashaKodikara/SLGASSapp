import * as React from 'react';
import MapView,{PROVIDER_GOOGLE,Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions,BackHandler,Alert,TouchableOpacity } from 'react-native';

export default function Map({navigation}) {
 
  return (
    <View style={styles.body}>
      <MapView style={styles.map}
     
      provider={PROVIDER_GOOGLE}
  region={{
     latitude: 7.8731,
     longitude:80.7718,
     latitudeDelta: 2.0922,
     longitudeDelta:  2.0922,
   }}  />
   <Marker
   coordinate={{ latitude: 7.8731,longitude:80.7718}}>
       </Marker>
       <TouchableOpacity style={styles.button} >
               <Text style={styles.btnText}>Search</Text>
           </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
 body:{
     flex:1,
    
 },
 map:{
   
  height:Dimensions.get('window').height,
  width:Dimensions.get('window').width,
 
},
button:{
    height:500
}
});