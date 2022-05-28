import React, {useState} from 'react';
import { ImageBackground, View, StyleSheet, StatusBar, Text, Image, TextInput, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RadioButton } from 'react-native-paper';
import DateTimePickerModal from "react-native-modal-datetime-picker";

function Payment(props) {
    const [paymentMethod, setPaymentMethod] = useState();
    const [premium, setPremium ] = useState();
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [expiryDate, setExpiryDate] = useState();

    const showDatePicker = () => {
        setDatePickerVisibility(true);
      };
    
      const hideDatePicker = () => {
        setDatePickerVisibility(false);
      };
    
      const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        setExpiryDate(date);
        hideDatePicker();
      };
    return (
        <ImageBackground
        style={styles.background}
        source={require('../../assets/resized.jpg')}
        >
            <View
            style={styles.container}
            >
            <ScrollView style={styles.scrollview}>
                <View style={styles.scrollcontent}>
                <Text style={styles.text}>Select your mode of payment</Text>
            <View style={styles.radioOption}>
                <View style={styles.content}>
                <Image
                resizeMode='center' 
                style={styles.logo}
                source={require('../../assets/mpesa.png')}/>
                <RadioButton
                value='mpesa'
                status={paymentMethod === 'mpesa' ? 'checked': 'unchecked'}
                onPress={() => setPaymentMethod('mpesa')}
                />
                </View>
                <View style={styles.content}>
                <Image
                resizeMode='center' 
                style={styles.logo}
                source={require('../../assets/visa.png')}/>
                <RadioButton
                value='visacard'
                status={paymentMethod === 'visacard' ? 'checked': 'unchecked'}
                onPress={() => setPaymentMethod('visacard')}
                />
                </View>
                <View style={styles.content}>
                <Image
                resizeMode='center' 
                style={styles.logo}
                source={require('../../assets/mastercard2.png')}/>
                <RadioButton
                value='mastercard'
                status={paymentMethod === 'mastercard' ? 'checked': 'unchecked'}
                onPress={() => setPaymentMethod('mastercard')}
                />
                </View>
                <View style={styles.content}>
                <Image
                resizeMode='center' 
                style={styles.logo}
                source={require('../../assets/premium2.png')}/>
                <RadioButton
                value='premium'
                status={paymentMethod === 'premium' ? 'checked': 'unchecked'}
                onPress={() => setPaymentMethod('premium')}
                />
                </View>
                
            </View>
            
            {paymentMethod === 'mpesa' ? <View
            style={styles.mpesa}
            >
                <TextInput 
                placeholder='Enter your M-Pesa phone number'
                keyboardType="phone-pad"
                style={styles.input}
                
                />
                <TouchableOpacity style={styles.button2}>
                    <Text style={styles.text}>Confirm</Text>
                </TouchableOpacity>
            </View>: null}

            {paymentMethod === 'premium' ? <View style={styles.premium}>
            <Text style={styles.text}>Select your premium package</Text>
                <View style={styles.radioOption}>
                    <View style={styles.content}>
                        <Text>Premium 1</Text>
                        <RadioButton
                        value='premium 1'
                        status={premium === 'premium 1' ? 'checked': 'unchecked'}
                        onPress={() => setPremium('premium 1')}
                        />
                    </View>
                    <View style={styles.content}>
                        <Text>Premium 2</Text>
                        <RadioButton
                        value='premium 2'
                        status={premium === 'premium 2' ? 'checked': 'unchecked'}
                        onPress={() => setPremium('premium 2')}
                        />
                    </View>
                    <View style={styles.content}>
                        <Text>Premium 3</Text>
                        <RadioButton
                        value='premium 3'
                        status={premium === 'premium 3' ? 'checked': 'unchecked'}
                        onPress={() => setPremium('premium 3')}
                        />
                    </View>
                    <View style={styles.content}>
                        <Text>Premium 4</Text>
                        <RadioButton
                        value='premium 4'
                        status={premium === 'premium 4' ? 'checked': 'unchecked'}
                        onPress={() => setPremium('premium 4')}
                        />
                    </View>
                </View>
                <TouchableOpacity style={styles.button2}>
                    <Text style={styles.text}>Confirm</Text>
                </TouchableOpacity>
            </View>: null}

            {paymentMethod === 'mastercard' ? <View
            style={styles.card}
            >
                <TextInput 
                placeholder='Card holder name'
                style={styles.input}
                
                />
                <TextInput 
                placeholder='Card number'
                style={styles.input}
                
                />
                <TouchableOpacity 
                style={styles.button}
                onPress={showDatePicker}
                >
                    <Text style={styles.textButton}> Enter card expiry date</Text>
                </TouchableOpacity>
                <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                is24Hour={false}
                    />
                <TouchableOpacity style={styles.button2}>
                    <Text style={styles.text}>Confirm</Text>
                </TouchableOpacity>
            </View>: null}
            
            {paymentMethod === 'visacard' ? <View
            style={styles.card}
            >
                <TextInput 
                placeholder='Card holder name'
                style={styles.input}
                
                />
                <TextInput 
                placeholder='Card number'
                style={styles.input}
                
                />
                <TouchableOpacity 
                style={styles.button}
                onPress={showDatePicker}
                >
                    <Text style={styles.textButton}> Enter card expiry date</Text>
                </TouchableOpacity>
                <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                is24Hour={false}
                    />
                <TouchableOpacity style={styles.button2}>
                    <Text style={styles.text}>Confirm</Text>
                </TouchableOpacity>
            </View>: null}
            
                </View>
                
            </ScrollView>
            
            </View>
        </ImageBackground>
    );
}

export default Payment;

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
    scrollcontent: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 80,
        paddingTop:20,
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
        margin: 20,
        
        
        
    },
    button2:{
        height: 50, 
        backgroundColor:'darkorange',
        alignSelf:'center',
        textAlign: 'center',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 5,
        
        
        
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
        backgroundColor: 'rgba(211, 211, 211, 0.6)',
        flexDirection: 'row',
        padding: 5,
        width: '95%',
        alignSelf:'center',
        borderRadius: 20,
        alignItems: 'center',
        margin: 30
        
        
    },
    logo:{
        width: 100,
        height: 70,
        
    },
    content:{
        alignItems: 'center',
        margin: 20,
        marginRight: 30,
        display: 'flex',
        width: 100,
        flexDirection: 'row',
        padding:10,
    },
    input:{
        width: 350,
        height: 80,
        textAlign: 'center',
        borderRadius: 20,
        margin: 10,
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'darkgray',
        fontStyle:'italic',
        fontSize:20,
        
        
           
    },
    scrollview:{
        width: '100%',
        height: '100%',
        
        alignSelf: 'center',
        
        borderWidth: 5,
        borderRadius: 5,
        borderColor: 'transparent',
        
    },
    card:{
        width: '100%',
    },
    mpesa:{
        width: '100%',
        margin: 20,
    },
    premium:{
        width: '100%',
    },
})