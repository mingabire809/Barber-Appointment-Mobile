import React, { useRef, useState }  from 'react';
import { Appbar, Colors } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {Pressable,StatusBar, DrawerLayoutAndroid,Image, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, View, ScrollView, TouchableOpacity } from 'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks';
import Booking from './Booking';
import { Context } from '../../components/globalContext/globalContext';


function WelcomePage({navigation, route}) {
    const Drawer = createDrawerNavigator();
    const Stack = createStackNavigator();

    const globalContext = useContext(Context)
    const isLoggedIn = globalContext;
    return (
        <ImageBackground
        style={styles.background}
        
        source={require('../../assets/resized.jpg')}
        >
            <View style={styles.container}>
                {/*
                <Appbar style={styles.appbar}>
                        <Appbar.Action icon='menu'/>
                        <Appbar.Content title='Barber shop' style={styles.text}/>
                       
                        </Appbar>
                */ }
                        {/*<NavigationContainer style={styles.appbar}>
                        <Drawer.Navigator useLegacyImplementation>
                        <Drawer.Screen name='Screen' component={Services}/>
                        <Drawer.Screen name='Screens' component={Services}/>
                    </Drawer.Navigator>
                        </NavigationContainer> */}

                        <Image 
                        source={require('../../assets/logo2.png')}
                        style={styles.img}
                        />

                <TouchableOpacity 
                onPress={() => navigation.navigate('Booking')}
                style={styles.button}>
                    <Text style={styles.text}>Book Appointment!</Text>
                </TouchableOpacity>
                    
                
                </View>
            

        </ImageBackground>
    );
}

export default WelcomePage;

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

    appbar:{
        width: '100%',
        backgroundColor: 'darkorange',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        
        
    },
    text:{
        padding: 10,
        fontWeight:'800',
        fontStyle:'italic',
        fontSize:15,
        fontFamily: 'Roboto',
        
    },
    button:{
        height: 50, 
        backgroundColor:'darkorange',
        alignSelf:'center',
        textAlign: 'center',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 250,
        
        
    },
    img:{
        borderRadius: 100,
        width:150,
        height: 150,
        marginTop: 170,
        alignSelf: 'center',
        
    },


})
