import React, { useRef, useState }  from 'react';
import { Appbar, Colors } from 'react-native-paper';
import Drawer from 'react-native-drawer';
import {Pressable,StatusBar, DrawerLayoutAndroid,Image, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, View, ScrollView, TouchableOpacity } from 'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks';

function WelcomePage(props) {
    return (
        <ImageBackground
        style={styles.background}
        
        source={require('../../assets/resized.jpg')}
        >
            <View style={styles.container}>
                <Appbar style={styles.appbar}>
                        <Appbar.Action icon='menu'/>
                        <Text>Barber Shop</Text>
                        <View></View>
                        </Appbar>
                    
                <Drawer></Drawer>
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


})
