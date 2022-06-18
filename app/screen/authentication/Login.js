import React, {useContext, useState} from 'react';
import {TouchableOpacity ,Button,StatusBar, Image, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks';
import * as SecureStore from 'expo-secure-store'
import { Context } from '../../components/globalContext/globalContext';
import { BottomNavigation } from 'react-native-paper';
import WelcomePage from '../welcomeScreen/WelcomePage';



function Login({navigation, route, props}) {
    const globalContext = useContext(Context)
    const {isLoggedIn, setIsLoggedIn, domain, token, setToken, getToken}= globalContext
    const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState('eye');
  const handlePasswordVisibility = () => {
    if (rightIcon === 'eye') {
      setRightIcon('eye-off');
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === 'eye-off') {
      setRightIcon('eye');
      setPasswordVisibility(!passwordVisibility);
    }
  };
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')

/*  function handleLogin(){
    console.log(username)
    console.log(password)
    console.log('Logging In')
    console.log(isLoggedIn)
    setIsLoggedIn(true)
    
    navigation.navigate("WelcomePage")
    
  }*/

  async function handleLogin(){
      setError("")
        let body = JSON.stringify({
            'username': username,
            'password': password
        })

      fetch(`${domain}/login`,{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: body
      })
      .then(res => {
          if (res.ok){
              return res.json()
          } else {
              setError("Wrong username or password")
              throw res.json()
          }
      })
      .then(json => {
          console.log('LOGGED IN')
          console.log(json)
          //setToken(json)
          setIsLoggedIn(true)
          getToken(json.token)
      }).then(
        fetch(`${domain}/member/username/`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `token ${ await SecureStore.getItemAsync('token')}`
            },
        }).then(res => {
            if (res.ok){
                return res.json()
            } else {
                throw res.json()
            }
            
        }).then(json => {
            console.log(json)
            navigation.navigate("WelcomePage")
        }).catch(error => {
            console.log(error)
        }) 
      )
      .catch(error => {
          console.log(error)
      })

  }

   
    return (
        <ImageBackground
        style={styles.background} 
        source={require('../../assets/wallpaper.jpg')}>
            <Image
                style={styles.img} 
                source={require('../../assets/logo2.png')}/>
            <SafeAreaView>
                
            <View style={styles.container}>
                
                <TextInput 
                style={styles.input}
                placeholder='Username'
                onChangeText={newText => setUserName(newText)}
                defaultValue={username}
                />
                <TextInput
                
                style={styles.input}
                placeholder='Password'
                secureTextEntry={passwordVisibility}
                onChangeText={newText => setPassword(newText)}
                defaultValue={password}
                />
                {error.length > 0 && <Text style={{color:'red'}}>{error}</Text>}
                <TouchableOpacity 
                style={styles.paswordtoggle}
                onPress={handlePasswordVisibility}
                >
                    <Text style={styles.text3}>{passwordVisibility ? 'Show Password' : 'Hide Password'}</Text>
                </TouchableOpacity>
                 <TouchableOpacity style={styles.button} onPress={() => handleLogin()}>
                    <Text style={styles.text2}>LOGIN</Text>
                </TouchableOpacity>
                
                <Text style={styles.text}>Or</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text2} onPress={() => navigation.navigate('Sign_Up')}>REGISTER</Text>
                </TouchableOpacity>
               
            </View>
            </SafeAreaView>
            
        </ImageBackground>
    );
}

export default Login;

const styles = StyleSheet.create({
    background:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,

    },

    container:{
        width: 400,
        height: 400,
        backgroundColor: 'rgba(211, 211, 211, 0.8)',
        position: 'relative',
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
        alignItems: 'center',
        
        

    },

    input:{
        width: '85%',
        height: '13%',
        textAlign: 'center',
        borderRadius: 20,
        margin: 20,
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'darkgray',
        fontStyle:'italic',
        fontSize:20,
        
           
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
    text2:{
        padding: 10,
        fontWeight:'800',
        fontStyle:'italic',
        fontSize:15,
        fontFamily: 'Roboto',
    },
    text:{
        padding: 10,
    },
    paswordtoggle:{
        backgroundColor:'transparent',
        height: 50,
        borderColor: 'black',
          },
    text3:{
        padding: 10,
        fontWeight:'800',
        fontStyle:'italic',
        fontSize:15,
        fontFamily: 'Roboto',
        textDecorationLine: 'underline'
        
    },
    img:{
        borderRadius: 100,
        width:120,
        height: 120,
        position: 'absolute',
        top: 70,
        alignItems:'center',
    }
})