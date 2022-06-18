import React, {useState} from 'react';
import {TouchableOpacity ,Button,StatusBar, Image, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

function Prices(props) {
    return (
        <ImageBackground style={styles.background} source={require('../../assets/resized.jpg')}>
            <View style={styles.container}>
            <View style={styles.price}>
                <Text style={styles.pricetext}>Haircut  <Text>............................... </Text> Price</Text>
                <Text>Haircut  <Text>............................... </Text> Price</Text>
                <Text>Haircut  <Text>............................... </Text> Price</Text>
                <Text>Haircut  <Text>............................... </Text> Price</Text>
                <Text>Haircut  <Text>............................... </Text> Price</Text>
                <Text>Haircut  <Text>............................... </Text> Price</Text>
                <Text>Haircut  <Text>............................... </Text> Price</Text>
                
            </View>
            </View>
        </ImageBackground>
    );
}

export default Prices;

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
    pricetext:{
        fontSize: 18,
        marginBottom:10,
        marginTop:10,
        fontWeight: '800',
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
    price:{
        backgroundColor: 'white',
        alignItems: 'center',
        padding: 30,
        margin: 30,
        flexGrow: 1,
    },
    img:{
        borderRadius: 100,
        width:150,
        height: 150,
        marginTop: 170,
        alignSelf: 'center',
        
    },


})
