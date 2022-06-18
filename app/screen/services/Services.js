import React, {useState, useContext, useEffect} from 'react';
import {ActivityIndicator,TouchableOpacity ,Button,StatusBar, Image, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Context } from '../../components/globalContext/globalContext';
import * as SecureStore from 'expo-secure-store'
import { Keyframe } from 'react-native-reanimated';
function Services(props) {
    const [openHairCut, setOpenHairCut] = useState(false);
    const [openExtraServices, setOpenExtraServices] = useState(false);
    const globalContext = useContext(Context)
    const {isLoggedIn, setIsLoggedIn, domain, token, setToken, getToken}= globalContext
    const [haircuts, setHaircuts] = useState('');
    const [services, setServices] = useState('');

    function openHair(haircut){
        setOpenHairCut(true)
    }
    function closeHair(){
        setOpenHairCut(false)
        setHaircutDetail('')
    }
    function openExtra(){
        setOpenExtraServices(true)
    }
    function closeExtra(){
        setOpenExtraServices(false)
        setServiceDetail('')
    }
    const[haircutDetail, setHaircutDetail] = useState("");
    const[serviceDetail, setServiceDetail] = useState("");


    
   // const[haircutDetailparms, setHaircutDetailParams] = useState(haircut);
   // const[serviceDetailparms, setServiceDetailParams] = useState(extra_services);
    const hairDetails = async (haircut) => {
        fetch(`${domain}/services/haircut/${haircut}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `token ${await SecureStore.getItemAsync('token')}`
            },
        }).then(res => {
            if (res.ok){
                return res.json()
            } else {
                throw res.json()
            }
            
        }).then(json => {
            console.log(json)
            setHaircutDetail(json)
            
        }).catch(error => {
            console.log(error)
        }) 
      }
      const serviceDetails = async (extra_services) => {
        fetch(`${domain}/services/extra_services/${extra_services}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `token ${await SecureStore.getItemAsync('token')}`
            },
        }).then(res => {
            if (res.ok){
                return res.json()
            } else {
                throw res.json()
            }
            
        }).then(json => {
            console.log(json)
            setServiceDetail(json)
            
        }).catch(error => {
            console.log(error)
        }) 
      }
      useEffect(() => {
        hairDetails();
      }, [])
      useEffect(() => {
        serviceDetails();
      }, [])
    const fetchHair = async () => {
        fetch(`${domain}/services/haircut/`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `token ${await SecureStore.getItemAsync('token')}`
            },
        }).then(res => {
            if (res.ok){
                return res.json()
            } else {
                throw res.json()
            }
            
        }).then(json => {
            console.log(json)
            setHaircuts(json)
            
        }).catch(error => {
            console.log(error)
        }) 
      }
    
      const fetchServices = async () => {
        fetch(`${domain}/services/extra_services/`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `token ${await SecureStore.getItemAsync('token')}`
            },
        }).then(res => {
            if (res.ok){
                return res.json()
            } else {
                throw res.json()
            }
            
        }).then(json => {
            console.log(json)
            setServices(json)
            
        }).catch(error => {
            console.log(error)
        }) 
      }
      
      useEffect(() => {
        fetchHair();
    }, []);
    useEffect(() => {
    fetchServices();
    }, []);

    return (
       <ImageBackground
       style={styles.background}
       source={require('../../assets/resized.jpg')}
       >
           <View style={styles.container}>
               <ScrollView style={styles.scrollview}>
                   <View style={styles.contentContainer}>
                   <Text style={[openExtraServices ? styles.text3contentopen: styles.text3]}>Hair cut</Text>
    
                   
                   <View style={[openExtraServices ? styles.servicesopen: styles.services]}>
                   {haircuts.length > 0 ?(
                    <>
                    
                        {haircuts.map(haircut=>(
                        <TouchableOpacity style={[openHairCut ? styles.contentopen: styles.content ]}
                        onPress={() => [hairDetails(haircut.hair_cut_type), openHair()]}  
                        >
                        <Image 
                            source={{uri: haircut.picture}}
                            style={styles.img}
                            />
                        <Text style={styles.text}>{haircut.hair_cut_type}</Text>
                        
                        
                
                        
                        </TouchableOpacity>
                    ))}
                    </>
                    
                ): <ActivityIndicator size='large' style={styles.activity}/>}
                       {openHairCut ? 
                       <>
                       {haircutDetail.length > 0 ? (
                        <View style={styles.open}>
                            <>
                            {haircutDetail.map(hairdetail => (
                                <>
                                <Image 
                            source={{uri:hairdetail.picture}}
                            style={styles.imgdetails}
                            />
                            <Text style={styles.text4}>{hairdetail.hair_cut_type}</Text>
                            <Text style={styles.text4}>{hairdetail.price}$</Text>
                            <Text style={styles.text4}>Description of the haircut and how it's done </Text>
                            <Text style={styles.text3} onPress={()=> closeHair()}>Close</Text>
                                </>
                            ))}
                            </>
                        </View>
                       ):<ActivityIndicator size='large' style={styles.activity}/>}
                       </>: null}
                   </View>

                    <Text style={[openHairCut ? styles.text3contentopen: styles.text3]}>Extra services</Text>
                    <View style={[openHairCut ? styles.servicesopen: styles.services]}>
                    {services.length > 0 ?(
                    <>
                    
                        {services.map(service=>(
                        <TouchableOpacity style={[openExtraServices ? styles.contentopen: styles.content]}
                        onPress={() => [serviceDetails(service.type_of_service), openExtra()]}  
                        >
                        <Image 
                            source={{uri: service.service_picture}}
                            style={styles.img}
                            />
                        <Text style={styles.text}>{service.type_of_service}</Text>
                        <Text style={styles.text}>{service.service_price}$</Text>
                
                        
                        </TouchableOpacity>
                    ))}
                    </>
                    
                ): <ActivityIndicator size='large' style={styles.activity}/>}
                    {openExtraServices ? 
                    <>
                       {serviceDetail.length > 0 ? (
                        <View style={styles.open}>
                            <>
                            {serviceDetail.map(servicedetail => (
                                <>
                                <Image 
                            source={{uri:servicedetail.service_picture}}
                            style={styles.imgdetails}
                            />
                            <Text style={styles.text4}>{servicedetail.type_of_service}</Text>
                            <Text style={styles.text4}>{servicedetail.service_price}$</Text>
                            <Text style={styles.text4}>Description of the service and how it's done </Text>
                            <Text style={styles.text3} onPress={()=> closeExtra()}>Close</Text>
                                </>
                            ))}
                            </>
                        </View>
                       ):<ActivityIndicator size='large' style={styles.activity}/>}
                       </>
                    : null}
                    

                   </View>
                   </View>
              
               </ScrollView>
               

           </View>
       </ImageBackground>
    );
}

export default Services;

const styles = StyleSheet.create({
    background:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,

    },

    container:{
        width: '100%',
        height: '100%',
        
    },
    services:{
        display: 'flex',
        flexWrap: 'wrap',
        backgroundColor: 'rgba(211, 211, 211, 0.6)',
        flexDirection: 'row',
        padding: 5,
        width: '95%',
        alignSelf:'center',
        borderRadius: 20,
        alignItems: 'center',
        margin: 10,
        minHeight: 250,
        
        
    },
    servicesopen:{
        display: 'none',
        flexWrap: 'wrap',
        backgroundColor: 'rgba(211, 211, 211, 0.6)',
        flexDirection: 'row',
        padding: 5,
        width: '95%',
        alignSelf:'center',
        borderRadius: 20,
        alignItems: 'center',
        margin: 10,
        
        
    },
    open:{
    
        zIndex:999,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        width: 350,
        height: 650,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
       
        
       
    },
    text4:{
        padding: 10,
        fontWeight:'800',
        fontStyle:'italic',
        fontSize:15,
        fontFamily: 'Roboto',
        color: 'darkorange'
        
    },
    contentopen: {
        margin:10,
        display: 'none'
     },
    scrollview:{
        width: '100%',
        height: '100%',
        alignSelf: 'center',
        padding: 5,
        borderWidth: 5,
        borderRadius: 5,
        borderColor: 'transparent',
        
    },
    button:{
        height: 50, 
        backgroundColor:'darkorange',
        width : 100,
        textAlign: 'center',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 10,
        
    },
   
    content: {
       margin:10,
    },
    contentclicked: {
        margin:10,
        display: 'none',
     },
    text:{
        padding: 10,
        fontWeight:'800',
        fontStyle:'italic',
        fontSize:15,
        fontFamily: 'Roboto',
        
    },
    text3:{
        padding: 10,
        fontWeight:'800',
        fontStyle:'italic',
        fontSize:15,
        fontFamily: 'Roboto',
        textDecorationLine: 'underline',
        color: 'darkorange'
        
    },
    text3contentopen:{
        padding: 10,
        fontWeight:'800',
        fontStyle:'italic',
        fontSize:15,
        fontFamily: 'Roboto',
        textDecorationLine: 'underline',
        color: 'darkorange',
        display: 'none'
        
    },
    img:{
        borderRadius: 10,
        width:120,
        height: 120,
        justifyContent:'center',
        alignItems:'center',
    },
    imgdetails:{
        borderRadius: 10,
        width:330,
        height: 450,
        justifyContent:'center',
        alignItems:'center',
    },
    contentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 80,
        paddingTop:20,
        width: '100%',
        height: '100%',
      },
      activity:{
        
        flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      },
      
})