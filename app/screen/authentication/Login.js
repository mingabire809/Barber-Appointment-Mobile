import React, {useState} from 'react';
import {TouchableOpacity ,Button,StatusBar, Image, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks';

function Login(props) {
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
                />
                <TextInput
                
                style={styles.input}
                placeholder='Password'
                secureTextEntry={passwordVisibility}
                />
                <TouchableOpacity 
                style={styles.paswordtoggle}
                onPress={handlePasswordVisibility}
                >
                    <Text style={styles.text3}>{passwordVisibility ? 'Show Password' : 'Hide Password'}</Text>
                </TouchableOpacity>
                 <TouchableOpacity style={styles.button}>
                    <Text style={styles.text2}>LOGIN</Text>
                </TouchableOpacity>
                
                <Text style={styles.text}>Or</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text2}>REGISTER</Text>
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