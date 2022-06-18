import React, {useContext, useEffect, useState} from 'react';
import { ImageBackground, View, StyleSheet, StatusBar, Text, ActivityIndicator, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Context } from '../../components/globalContext/globalContext';
import * as SecureStore from 'expo-secure-store'

function Membership({navigation, route, props}) {
    const globalContext = useContext(Context)
    const {isLoggedIn, setIsLoggedIn, domain, token, setToken, getToken}= globalContext
    const [membership, setMembership] = useState('');
    const [premium, setPremium] = useState('');

    const[buyPremium, setBuyPremium] = useState(false);

    const premiumBuying = async (membership) =>{
        let body = JSON.stringify({
            'membership': membership,
            
        })

      fetch(`${domain}/premium/premium/`,{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `token ${ await SecureStore.getItemAsync('token')}`
          },
          body: body
      })
      .then(res => {
          if (res.ok){
              return res.json()
          } else {
              
              throw res.json()
          }
      })
      .then(json => {
        console.log(membership)
          console.log('Premium bought successfully!!')
          console.log(json)
          navigation.navigate("Membership")
          
      })
      .catch(error => {
          console.log(error)
      })
    }

    const fetchMembership = async () => {
        fetch(`${domain}/membership/membership/`,{
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
            //console.log(json)
            setMembership(json)
            
        }).catch(error => {
            console.log(error)
        }) 
      }
    
      const fetchPremiums = async () => {
        fetch(`${domain}/premium/premium/`,{
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
            //console.log(json)
            setPremium(json)
            
        }).catch(error => {
            console.log(error)
        }) 
      }
      
      useEffect(() => {
        fetchMembership();
    }, []);
    useEffect(() => {
    fetchPremiums();
    }, []);

    return (
        <ImageBackground style={styles.background} source={require('../../assets/resized.jpg')}>
            <View style={styles.container}>
                <ScrollView style={styles.scrollview}>
                {membership.length > 0 ?     
                <View style={styles.membershipcontainer}>
                    
                    <Text style={styles.text3}>Membership</Text>
                    
                    {membership.map(memberships => (
                    
                <View style={styles.membership}>
                    
                    <Text style={styles.membershiptext}>Membership Name: {memberships.name}</Text>
                    <Text style={styles.membershiptext}>Membership Price: {memberships.price}$</Text>
                    <Text style={styles.membershiptext}>Membership Duration: {memberships.duration} months</Text>
                    <Text style={styles.membershiptext}>Membership discount: {memberships.discount}</Text>
                    <TouchableOpacity style={styles.button}
                    onPress={()=> Alert.alert(`Premium ${memberships.name} buying`, `Price: ${memberships.price}$`,[{text: "No", onPress: ()=> console.log("No")}, {text: "Yes", onPress: async ()=> {premiumBuying(memberships.name)}}])}
                    >
                        <Text style={styles.text}>Buy</Text>
                    </TouchableOpacity>
                </View>
                
                    ))}
                
                </View>:<ActivityIndicator size='large' style={styles.activity}/>}

                {premium.length > 0 ?     
                <View style={styles.premiumcontainer}>
                    
                    <Text style={styles.text3}>Your active membership premium</Text>
                    {premium.map(premiums => (
                    
                <View style={styles.membership}>
                    <Text style={styles.membershiptext}>Reference Number: {premiums.premium_reference_number}</Text>
                    <Text style={styles.membershiptext}>Membership Name: {premiums.membership}</Text>
                    <Text style={styles.membershiptext}>Expiry date: {premiums.expiry_date}</Text>
                    <Text style={styles.membershiptext}>balance: {premiums.balance}$</Text>
                    <Text style={styles.membershiptext}>coupon: {premiums.coupon}</Text>
                </View>
                    ))}
                
                </View>:<ActivityIndicator size='large' style={styles.activity}/>}
                </ScrollView>
                
                
                
            </View>
        </ImageBackground>
    );
}

export default Membership;

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
    scrollview:{
        width: '100%',
        height: '100%',
        alignSelf: 'center',
        padding: 5,
        borderWidth: 5,
        borderRadius: 5,
        borderColor: 'transparent',
        margin: 10,
        
    },
    buying:{
        zIndex: 999,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        width: 350,
        height: 650,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',

    },
    button:{
        height: 50, 
        backgroundColor:'darkorange',
        width : 100,
        textAlign: 'center',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 10,
        alignSelf: 'center',
        margin: 20,
        
    },
    text3:{
        padding: 10,
        fontWeight:'800',
        fontStyle:'italic',
        fontSize:15,
        fontFamily: 'Roboto',
        textDecorationLine: 'underline',
        color: 'black',
        alignSelf: 'center',
        
    },
    text:{
        padding: 10,
        fontWeight:'800',
        fontStyle:'italic',
        fontSize:15,
        fontFamily: 'Roboto',
        
    },
    membershipcontainer:{
        width: '100%',
        backgroundColor: 'rgba(211, 211, 211, 0.5)',
        padding: 10,
        marginTop:13,
        marginBottom: 13,
        borderRadius: 30,
        
    },
    premiumcontainer:{
        width: '100%',
        backgroundColor: 'rgba(211, 211, 211, 0.5)',
        marginTop:13,
        marginBottom: 13,
        borderRadius: 30,
       
    },
    membership:{
        
        backgroundColor: 'lightgray',
        margin: 10,
        borderRadius: 15,
        borderColor: 'black'
        
        
    },
    activity:{
        
        flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      },
    membershiptext:{
        margin: 5,
        fontWeight: 'bold',
        fontSize: 16,
    },
})