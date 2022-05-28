import React, {useState} from 'react';
import {Pressable,StatusBar, Button, DrawerLayoutAndroid,Image, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, View, ScrollView, TouchableOpacity } from 'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks';
import { RadioButton } from 'react-native-paper';
import AppBar from './AppBar';
import DateTimePickerModal from "react-native-modal-datetime-picker";



function Booking({navigation}) {
    const [hairCut, setHairCut] = useState('None');
    const [extraService, setExtraService] = useState('None');
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [immediatePayment, setImmediatePayment] = useState('No');
    const [datePicked, setDatePicked] = useState();

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    setDatePicked(date);
    hideDatePicker();
  };
    


    return (
        <ImageBackground 
        style={styles.background}
        source={require('../../assets/resized.jpg')}>
            <View style={styles.container}>
                <Text style={styles.text2}>Select your hair cut</Text>
                
                <View style={styles.radioOption}>
                    
                <Text style={styles.text}>Undercut</Text>
                <RadioButton value="Undercut"
                color='white'
                status={hairCut === 'Undercut' ? 'checked': 'unchecked'}
                onPress={() => setHairCut('Undercut')}
                
                />
                <Text style={styles.text}>Trimmed</Text>
                 <RadioButton value="Trimmed"
                status={hairCut === 'Trimmed' ? 'checked': 'unchecked'}
                onPress={() => setHairCut('Trimmed')}
                />
                <Text style={styles.text}>Buzz cut</Text>
                 <RadioButton value="Buzz cut"
                status={hairCut === 'Buzz cut' ? 'checked': 'unchecked'}
                onPress={() => setHairCut('Buzz cut')}
                />
                
                </View>
                <Text style={styles.text2}>Select extra services</Text>

                <View style={styles.radioOption}>
                    
                <Text style={styles.text}>Face Washing</Text>
                <RadioButton value="Face Washing"
                status={extraService === 'Face Washing' ? 'checked': 'unchecked'}
                onPress={() => setExtraService('Face Washing')}
                
                />
                <Text style={styles.text}>Nail Clipping</Text>
                 <RadioButton value="Nail Clipping"
                status={extraService === 'Nail Clipping' ? 'checked': 'unchecked'}
                onPress={() => setExtraService('Nail Clipping')}
                />
                <Text style={styles.text}>Ear Washing</Text>
                 <RadioButton value="Ear Washing"
                 
                status={extraService === 'Ear Washing' ? 'checked': 'unchecked'}
                onPress={() => setExtraService('Ear Washing')}
                />
                
                </View>

                
                <TouchableOpacity 
                style={styles.button}
                onPress={showDatePicker}
                >
                    <Text style={styles.textButton}> Choose date and time</Text>
                </TouchableOpacity>
                
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        is24Hour={false}
      />
<Text style={styles.text2}>Do you wish to pay now?</Text>
<View style={styles.radioOption}>
                    
                    <Text style={styles.text}>Yes</Text>
                    <RadioButton value="Yes"
                    status={immediatePayment === 'Yes' ? 'checked': 'unchecked'}
                    onPress={() => {setImmediatePayment('Yes'), console.log(immediatePayment)}}
                    
                    />
                    <Text style={styles.text}>No</Text>
                     <RadioButton value="No"
                    status={immediatePayment === 'No' ? 'checked': 'unchecked'}
                    onPress={() => {setImmediatePayment('No'), console.log(immediatePayment)}}
                    />
                    
                    
                    </View>

                    <TouchableOpacity 
                style={styles.button2}
                onPress={()=>{navigation.navigate('Payment'), console.log(hairCut), console.log(extraService), console.log(datePicked), console.log(immediatePayment)}}
                >
                    <Text style={styles.text}>Proceed</Text>
                </TouchableOpacity>
                
                
            </View>

        </ImageBackground>
    );
}

export default Booking;

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
        color: 'lightgoldenrodyellow',
        
    },
    text2:{
        padding: 10,
        fontWeight:'800',
        fontStyle:'italic',
        fontSize:15,
        fontFamily: 'Roboto',
        color: 'darkorange',
        padding: 20,
        
    },
    textButton:{
        padding: 10,
        fontWeight:'800',
        fontStyle:'italic',
        fontSize:15,
        fontFamily: 'Roboto',
        color: 'darkorange',
        
    },
    button:{
        height: 50, 
        backgroundColor:'gray',
        alignSelf:'center',
        textAlign: 'center',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 40,
        
        
        
    },
    button2:{
        height: 50, 
        backgroundColor:'darkorange',
        alignSelf:'center',
        textAlign: 'center',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 40,
        
        
        
    },
    img:{
        borderRadius: 100,
        width:150,
        height: 150,
        marginTop: 170,
        alignSelf: 'center',
        
    },

    radioOption:{
        display: 'flex',
        flexWrap: 'wrap',
        backgroundColor: 'rgba(211, 211, 211, 0.4)',
        flexDirection: 'row',
        padding: 5,
        width: '95%',
        alignSelf:'center',
        borderRadius: 20,
        
    },


})