import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import Register from './screens/register';
import Dashboard from './screens/Dashboard';
import Laugfs from './screens/Laugfs';
import Litro from './screens/Litro';
import ForgotPassword from './screens/ForgotPassword';
import Map from './screens/Map';
import Thank from './screens/Thank';
import { app} from "./firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const image = {uri:"https://cdn.mos.cms.futurecdn.net/xz4NVQhHaHShErxar7YLn.jpg"};
function Loginhead() {
  const title= "Login"
  return (
    <View style={styles.view}>
    <Text style={styles.text}>{title}</Text>
    <Image
      style={styles.loginlogo}
      source={image}
    />
   </View>
  );
}

function Registerhead() {
  const title= "Register"
  return (
    <View style={styles.view}>
    <Text style={styles.text}>{title}</Text>
    <Image
      style={styles.logo}
      source={image}
    />
   </View>
  );
}

function Dashboardhead() {
  const title= "Dashboard"
  return (
    <View style={styles.view}>
    <Text style={styles.text}>{title}</Text>
    <Image
      style={styles.logoDash}
      source={image}
    />
   </View>
  );
}

function Forgotheader() {
  const title= "Register"
  return (
    <View style={styles.view}>
    <Text style={styles.text}>{title}</Text>
    <Image
      style={styles.logo}
      source={image}
    />
   </View>
  );
}




function Litrohead() {
  const title= "Litro"
  return (
    <View style={styles.view}>
    <Text style={styles.text}>{title}</Text>
    <Image
      style={styles.logo}
      source={image}
    />
   </View>
  );
}
function Laughhead() {
  const title= "Laugfs"
  return (
    <View style={styles.view}>
    <Text style={styles.text}>{title}</Text>
    <Image
      style={styles.logo}
      source={image}
    />
   </View>
  );
}
function Maphead() {
  const title= "Map"
  return (
    <View style={styles.view}>
    <Text style={styles.text}>{title}</Text>
    <Image
      style={styles.logo}
      source={image}
    />
   </View>
  );
}
const styles = StyleSheet.create({
 logo:{
   height:50,
   width:70,
   marginLeft:190
   
 },
 text:{
   flexDirection:'row',
   fontSize:23,
   fontWeight:'bold',
 
 },view:{
   flexDirection:'row',
   justifyContent:'space-around',
 },loginlogo:{
      marginLeft:250,
      height:50,
      width:70,
 },logoDash:{
  marginLeft:140,
  height:50,
  width:70,
 }

})

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <PaperProvider>
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} 
      options={{
            headerTitle: (props) => <Loginhead {...props} /> 
         }}/>
      <Stack.Screen name="Register" component={Register}
       options={{
         headerTitle: (props) => < Registerhead {...props} /> 
        
      }}/>
      <Stack.Screen name="Dashboard" component={Dashboard}
        options={{
          headerTitle: (props) => < Dashboardhead {...props} /> 
         
       }}/>
      <Stack.Screen name="Laugfs" component={Laugfs}
        options={{
          headerTitle: (props) => < Laughhead {...props} /> 
         
       }}/>
      <Stack.Screen name="Litro" component={Litro}
        options={{
          headerTitle: (props) => <Litrohead {...props} /> 
         
       }}/>
      <Stack.Screen name="ForgotPassword" component={ForgotPassword}
        options={{
          headerTitle: (props) => < Forgotheader {...props} /> 
         
       }}/>
      <Stack.Screen name="Map" component={Map}
        options={{
          headerTitle: (props) => < Maphead {...props} /> 
         
       }}/>
      <Stack.Screen name="Thank" component={Thank}
        options={{
          headerTitle: (props) => < Registerhead {...props} /> 
         
       }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
  );
}

