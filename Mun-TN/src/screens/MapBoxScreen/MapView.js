import  React,{ useEffect, useRef, useState } from 'react';
import MapView, {Circle, Marker, MarkerAnimated} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions,Image,SafeAreaView, NativeEventEmitter } from 'react-native';
import {firebase} from '../../../firebase/config';
import { Button ,FAB} from 'react-native-paper';
import * as Loaction from "expo-location"
import MapDirections from "react-native-maps-directions"
const window=Dimensions.get('window')
export default function MapViewComponent (){
  const mapref=useRef()
 const [ marginBottom,setmarginBottom]=useState(1)
 const [truckdata,settruckdata]=useState([])
 const [position,setposition]=useState({
   latitude:0,
  longitude:0,
 })
 const [location,setLocation]=useState({ latitude:36.891696,
  longitude:10.1815426,
  latitudeDelta: 0.09,
  longitudeDelta: 0.04})
 const [errormsg,seterrormsg]=useState(null)
  var gettrucks=async()=>{
    firebase.firestore().collection("trucks").onSnapshot(document=>{
      const list=[]
      document.forEach(doc=>{
        list.push({
          id:doc.id,
          coords:doc.data().coords
        })
      })
      settruckdata(list)
    })
  }
  useEffect(()=>{
    gettrucks()
  },[])
var trucks=[
  {
    coords:{
      latitude:36.891696,
  longitude:10.1815426,
  latitudeDelta: 0.09,
  longitudeDelta: 0.04
    }

},{
  coords:{
    latitude:37.050020,
    longitude:11.014420,
    latitudeDelta: 0.09,
  longitudeDelta: 0.04
    
  }
},
{
  coords:{
    latitude:36.8022,
    longitude:10.1106,
    latitudeDelta: 0.09,
  longitudeDelta: 0.04
  }
},{
  coords:{
    latitude: 36.8132,
    longitude: 10.1339,
    latitudeDelta: 0.09,
  longitudeDelta: 0.04
  }
}
]
  var getlocation=async ()=>{
    let {status}=await Loaction.requestForegroundPermissionsAsync()
    if(status=="granted"){
      seterrormsg("permission denied")
    }
    let location= await  Loaction.getCurrentPositionAsync({})
  
    setLocation(location.coords)
    
  }
  var addlocation=()=>{
    console.log(location)
    
  }
    return (
    <View style={{flex:1}}>
<MapView provider="google" style={{flex:1,marginBottom:marginBottom,position:"absolute",width:"100%",height:"100%"}} ref={mapref}


      showsMyLocationButton={true}
      showsUserLocation={true} >
      <MapDirections origin={{latitude:37.050020,
        longitude:11.014420,
        latitudeDelta: 0.09,
      longitudeDelta: 0.04}}
      
      destination={{ latitude:36.891696,
        longitude:10.1815426,
        latitudeDelta: 0.09,
        longitudeDelta: 0.04}}
        strokeWidth={2}
        strokeColor='red'
        apikey=''
      
      />

{truckdata.map(truck=>(
  <View>
  <Marker coordinate={truck.coords} draggable={true} onDragStart={(e)=>{
    console.log("drag start" +e.nativeEvent.coordinate)
  }}
  onDragEnd={(e)=>{
    console.log("drag ended",e.nativeEvent.coordinate)
  }}
  >
  <Image source={require("./6306633.png")} style={{height:20,width:20}}/>

  </Marker>
  <Circle center={{latitude:truck.coords.latitude,longitude:truck.coords.longitude}} radius={1000}/>
  </View>
  
))}

</MapView> 
<FAB icon="plus" style={{marginTop:400,width:50,marginLeft:"90%"}} onPress={()=>{
  
  console.log(location)

  getlocation()}}/>

   </View>
    
  
  )
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    flex:1,
  },
});


/* import * as React from 'react';
import Geolocation from '@react-native-community/geolocation';
Geolocation.setRNConfiguration(config);
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions ,Image} from 'react-native';
const latitudeDelta=0.025
const longitudeDelta=0.025
export default class MapViewComponent extends React.Component {
  state={
    region:{
      latitudeDelta,
      longitudeDelta,
      latitude:33.7444613,
      longitude:-118.3870173
    }
  }
  componentDidMount(){
    this.handleUserLocation();
  }
  handleUserLocation=()=>{
    Geolocation.getCurrentPosition(pos=>{
      alert(JSON.stringify(pos))
    })
  }
onChangeValue = region=>{
   alert(JSON.stringify(region)) 
  this.setState({region})
}
  render() {
    return(
    <View style={{flex:1}}>
      <MapView 
      style={{flex:1}}
      initialRegion = {this.state.region}
      onRegionChangeComplete={this.onChangeValue}
      ref= {ref=>this.map=ref}
      />
     
    </View>
  );
}
}

 */