import React,{useEffect} from 'react';
import { StyleSheet,View,Text,Button ,state,Image,TouchableOpacity,onPress,ImageBackground,ScrollView,BackHandler
  ,Alert} from 'react-native';
import MapView,{ PROVIDER_GOOGLE } from 'react-native-maps'



export default function Petrol({navigation}){
     const image = {uri:"https://static.vecteezy.com/system/resources/previews/001/849/553/original/modern-gold-background-free-vector.jpg"};
    
        const pressHandell = () =>{
            
            navigation.push('Litro');
         }
         const pressLaufgs = () =>{
            
            navigation.push('Laugfs');
         }
         const pressMap = () =>{
             navigation.push('Map');
         }

    const pressHandeler = () =>{
        navigation.goBack();
    }    
    return(
        <ScrollView style={styles.container}>
            
            <Text style={styles.heading}>LP Gas</Text>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <View style={styles.photos}>
                <View style={styles.cont}>
                <TouchableOpacity  onPress={pressHandell}>  
                    <Image
                    style={styles.logo}
                    source={{uri: 'http://www.sundaytimes.lk/210418/uploads/litro_15042021_B05_CMY.jpg'}}
                 
                    />
                        <Text style={styles.text} >Litro</Text>
                    </TouchableOpacity >
                </View>
                <View style={styles.cont}>
                <TouchableOpacity  onPress={pressLaufgs}> 
                    <Image
                    style={styles.logo}
                    source={{uri: "http://www.newswire.lk/wp-content/uploads/2021/08/Screenshot_20210812-111411_Chrome.jpg"}}
                    /><Text style={styles.text}>Laugfs</Text>
                      </TouchableOpacity> 
                    </View>
             </View>
           <TouchableOpacity onPress={pressMap}> 
             <MapView style={styles.map}
             provider={PROVIDER_GOOGLE}
         region={{
            latitude: 7.8731,
            longitude:80.7718,
            latitudeDelta: 2.0922,
            longitudeDelta:  2.0922,
          }}/> 
         </TouchableOpacity>
                    
          <Text style={styles.area}>Notification Center</Text>  
          </ImageBackground>
        </ScrollView>
    )
        }


const styles = StyleSheet.create({
    container:{
       
       
    },
    logo:{
        height:150,
        width:150
    },
    photos:{
        flexDirection:'row',
        justifyContent:'space-around',
        margin:10,
        marginTop:50
    },cont:{
        flexDirection:'column'    
    },
    text:{
        fontSize:25,
        color:'white'
    },
    map:{
    
      height:250,
      width:380,
      margin:10,
     marginTop:80
    },
    heading:{
        textAlign:'center',
        fontSize:30,
        backgroundColor:'#800000',
        padding:10,
        color:'white'
    },area:{
        width:370,
        backgroundColor:'grey',
        height:150,
        marginTop:50,
        color:'white',
        marginLeft:10,
        marginRight:10,
        marginBottom:20
    }, 
    image: {
      flex: 1,
      justifyContent: "center",
      position:"relative"
      ,width:'100%'
    }
});