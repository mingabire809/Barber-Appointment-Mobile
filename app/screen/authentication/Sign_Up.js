import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import {Pressable,StatusBar, Image, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, View, ScrollView, TouchableOpacity } from 'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks';
import PasswordStrengthBar from 'react-password-strength-bar';

function Sign_Up(props) {
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

  
  

    const [image, setImage] = useState(null);
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
      };

      const [fullName, setFullName] = useState('');
      const [email, setEmail] = useState('');
      const [username, setUsername] = useState('');
      const [phoneNumber, setPhoneNumber] = useState('');
      const [password, setPassword] = useState('');
      const [confirmed_Password, setConfirmed_Password] = useState('');
    
    return (
        
       <ImageBackground
       style={styles.background}
       source={require('../../assets/wallpaper.jpg')}
       >
        <SafeAreaView>
            
            <View
            style={styles.container}
            >
                <ScrollView style={styles.scrollview}>
                    <View style={[styles.contentContainer, image && styles.contentContainerImage]}>
                    <Image
                style={styles.img} 
                source={require('../../assets/logo2.png')}/>
                <TextInput 
                style={styles.input}
                placeholder='Full Name*'
                onChangeText={newText => setFullName(newText)}
                defaultValue={fullName}
                />
                <TextInput 
                style={styles.input}
                placeholder='Email*'
                keyboardType="email-address"
                onChangeText={newText => setEmail(newText)}
                defaultValue={email}
                />
                <TextInput 
                style={styles.input}
                placeholder='Username*'
                onChangeText={newText => setUsername(newText)}
                defaultValue={username}
                />
                <TextInput 
                style={styles.input}
                placeholder='Phone Number*'
                keyboardType="phone-pad"
                onChangeText={newText => setPhoneNumber(newText)}
                defaultValue={phoneNumber}
                />
                <TouchableOpacity 
                style={styles.profile_uploader}
                onPress={pickImage}
                >
                    <Text style={styles.text}>Upload Profile Picture</Text>
                </TouchableOpacity>
                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                <TextInput 
                style={styles.input}
                placeholder='Password*'
                secureTextEntry={passwordVisibility}
                onChangeText={newText => setPassword(newText)}
                defaultValue={password}
                
                />
                {password.length > 0 && password.length <= 5 &&  <Text style={{color:'red'}}>Weak password</Text>}
                {password.length > 5 && password.length < 10  && <Text style={{color:'yellow'}}>Medium password</Text>}
                {password.length >= 10 && <Text style={{color:'green'}}>Strong password</Text>}
                
                <TextInput 
                style={styles.input}
                placeholder='Confirm Password*'
                secureTextEntry={passwordVisibility}
                onChangeText={newText => setConfirmed_Password(newText)}
                defaultValue={confirmed_Password}
                />
                {password!==confirmed_Password && <Text style={{color:'red'}}>Passwords do not match!!!</Text>}
                <TouchableOpacity 
                style={styles.paswordtoggle}
                onPress={handlePasswordVisibility}
                >
                    <Text style={styles.text3}>{passwordVisibility ? 'Show Password' : 'Hide Password'}</Text>
                </TouchableOpacity>
                
    
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>REGISTER</Text>
                </TouchableOpacity>
                
                    </View>
                    
                
                </ScrollView>
                
            
            </View>
        </SafeAreaView>
       </ImageBackground>
    );
}

export default Sign_Up;

const styles = StyleSheet.create({
    background:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,

    },

    container:{
        width: 400,
        height: 350,
        backgroundColor: 'rgba(211, 211, 211, 0.8)',
        position: 'relative',
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
        borderBottomLeftRadius:100,
        borderBottomRightRadius:100,
        alignItems: 'center',
        padding: 20,
        flexGrow: 1,
        flex: 1,
        justifyContent: 'center',
        

        
        

    },
    scrollview:{
        width: '100%',
        height: '100%',
        margin: 20,
        alignSelf: 'center',
        padding: 20,
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
    profile_uploader:{
        backgroundColor:'darkgray',
        height: 50,
        borderColor: 'black'
    },
    paswordtoggle:{
        backgroundColor:'transparent',
        height: 50,
        borderColor: 'black',
          },
   
    input:{
        width: '85%',
        height: '7%',
        textAlign: 'center',
        borderRadius: 20,
        margin: 20,
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'darkgray',
        fontStyle:'italic',
        fontSize:20,
        
        
           
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
        textDecorationLine: 'underline'
        
    },
    img:{
        borderRadius: 100,
        width:120,
        height: 120,
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
      contentContainerImage: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 100,
        paddingTop:65,
        width: '100%',
        height: '100%',
      }
})