import React, {useState} from 'react';
import {TouchableOpacity ,Button,StatusBar, Image, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
function Services(props) {
    const [openHairCut, setOpenHairCut] = useState(false);
    const [openExtraServices, setOpenExtraServices] = useState(false);

    function openHair(){
        setOpenHairCut(true)
    }
    function closeHair(){
        setOpenHairCut(false)
    }
    function openExtra(){
        setOpenExtraServices(true)
    }
    function closeExtra(){
        setOpenExtraServices(false)
    }
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
                       {openHairCut ? <View style={styles.open}>
                            <Image 
                            source={require('../../assets/undercut.jpg')}
                            style={styles.imgdetails}
                            />
                            <Text style={styles.text4}>Undercut</Text>
                            <Text style={styles.text4}>Price</Text>
                            <Text style={styles.text4}>Description of the haircut and how it's done </Text>
                            <Text style={styles.text3} onPress={()=> closeHair()}>Close</Text>
                        </View>: null}
                   
                   
                        <TouchableOpacity style={[openHairCut ? styles.contentopen: styles.content ]} onPress={() => openHair() }>
                            <Image 
                            source={require('../../assets/undercut.jpg')}
                            style={styles.img}
                            />
                            <Text style={styles.text}>Undercut</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[openHairCut ? styles.contentopen: styles.content]} onPress={() => console.log('Hair cut pressed')}>
                            <Image 
                            source={require('../../assets/undercut.jpg')}
                            style={styles.img}
                            />
                            <Text style={styles.text}>Undercut</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[openHairCut ? styles.contentopen: styles.content]} onPress={() => console.log('Hair cut pressed')}>
                            <Image 
                            source={require('../../assets/undercut.jpg')}
                            style={styles.img}
                            />
                            <Text style={styles.text}>Undercut</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[openHairCut ? styles.contentopen: styles.content]} onPress={() => console.log('Hair cut pressed')}>
                            <Image 
                            source={require('../../assets/undercut.jpg')}
                            style={styles.img}
                            />
                            <Text style={styles.text}>Undercut</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[openHairCut ? styles.contentopen: styles.content]} onPress={() => console.log('Hair cut pressed')}>
                            <Image 
                            source={require('../../assets/undercut.jpg')}
                            style={styles.img}
                            />
                            <Text style={styles.text}>Undercut</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[openHairCut ? styles.contentopen: styles.content]} onPress={() => console.log('Hair cut pressed')}>
                            <Image 
                            source={require('../../assets/undercut.jpg')}
                            style={styles.img}
                            />
                            <Text style={styles.text}>Undercut</Text>
                        </TouchableOpacity>
                   </View>

                    <Text style={[openHairCut ? styles.text3contentopen: styles.text3]}>Extra services</Text>
                    <View style={[openHairCut ? styles.servicesopen: styles.services]}>
                    {openExtraServices ? <View style={styles.open}>
                            <Image 
                            source={require('../../assets/undercut.jpg')}
                            style={styles.imgdetails}
                            />
                            <Text style={styles.text4}>Face washing</Text>
                            <Text style={styles.text4}>Price</Text>
                            <Text style={styles.text4}>Description of the services and how it's done </Text>
                            <Text style={styles.text3} onPress={()=> closeExtra()}>Close</Text>
                        </View>: null}
                    <TouchableOpacity style={[openExtraServices ? styles.contentopen: styles.content]} onPress={() => openExtra()}>
                            <Image 
                            source={require('../../assets/undercut.jpg')}
                            style={styles.img}
                            />
                            <Text style={styles.text}>Face washing</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[openExtraServices ? styles.contentopen: styles.content]} onPress={() => console.log('Extra services pressed')}>
                            <Image 
                            source={require('../../assets/undercut.jpg')}
                            style={styles.img}
                            />
                            <Text style={styles.text}>Face washing</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[openExtraServices ? styles.contentopen: styles.content]} onPress={() => console.log('Extra services pressed')}>
                            <Image 
                            source={require('../../assets/undercut.jpg')}
                            style={styles.img}
                            />
                            <Text style={styles.text}>Face washing</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[openExtraServices ? styles.contentopen: styles.content]} onPress={() => console.log('Extra services pressed')}>
                            <Image 
                            source={require('../../assets/undercut.jpg')}
                            style={styles.img}
                            />
                            <Text style={styles.text}>Face washing</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[openExtraServices ? styles.contentopen: styles.content]} onPress={() => console.log('Extra services pressed')}>
                            <Image 
                            source={require('../../assets/undercut.jpg')}
                            style={styles.img}
                            />
                            <Text style={styles.text}>Face washing</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[openExtraServices ? styles.contentopen: styles.content]} onPress={() => console.log('Extra services pressed')}>
                            <Image 
                            source={require('../../assets/undercut.jpg')}
                            style={styles.img}
                            />
                            <Text style={styles.text}>Face washing</Text>
                        </TouchableOpacity>

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
      
})