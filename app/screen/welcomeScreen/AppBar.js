import React, {useState} from 'react';
import { Appbar, Colors, Menu, Provider } from 'react-native-paper';
import {StyleSheet, StatusBar, View} from 'react-native';
function AppBar({navigation, back}) {

const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

    return (
        <Appbar.Header style={styles.appbar}>
                        
                        {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
                        <Appbar.Content title='Barber shop' style={styles.text}/>
                       
                              <Provider>
                                  <View style={[styles.menuView, back && styles.menuViewWithBack]}>
                                  <Menu
                           visible={visible}
                           onDismiss={closeMenu}
                           anchor ={
                               <Appbar.Action icon='menu' color='black' onPress={openMenu}/>
                           }
                           >   
                               <Menu.Item title='Home' onPress={()=> console.log('Home')}/>
                               <Menu.Item title='Profile' onPress={()=> console.log('Profile')}/>
                               <Menu.Item title='Services' onPress={()=>navigation.navigate('Services')}/>
                               <Menu.Item title='Prices' onPress={()=> console.log('Prices')}/>
                               <Menu.Item title='Membership' onPress={()=> console.log('Membership')}/>
                               <Menu.Item title='Logout' onPress={()=> console.log('Logout')}/>
                           </Menu>
                                  </View>
                              
                              </Provider>
                          
                                
                          
                          
                       
                       
                        </Appbar.Header>
    );
}

export default AppBar;

const styles = StyleSheet.create({
    appbar:{
        width: '100%',
        backgroundColor: 'darkorange',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  
        
    },

    menuView:{
        width: 60,
        position: 'relative',
        left: 130
    },
    menuViewWithBack:{
        width: 60,
        position: 'relative',
        left: 110
    }
})