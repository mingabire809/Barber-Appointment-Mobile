import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './app/screen/authentication/Login';
import Sign_Up from './app/screen/authentication/Sign_Up';
import Booking from './app/screen/welcomeScreen/Booking';
import WelcomePage from './app/screen/welcomeScreen/WelcomePage';
import 'react-native-gesture-handler';
import React, {useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppBar from './app/screen/welcomeScreen/AppBar';
import Payment from './app/screen/transactions/Payment';
import Prices from './app/screen/services/Prices';
import Services from './app/screen/services/Services';
import Landing from './app/screen/landing/Landing';
import { Context, Provider } from './app/components/globalContext/globalContext';
import Navigator from './app/components/navigation/navigator';
const Stack = createStackNavigator();


export default function App() {
  const globalContext = useContext(Context)
  const isLoggedIn = globalContext;
  const token = globalContext;
  return (
    <Provider>
      <View style={{flex:1}}>
    <NavigationContainer>
      <Navigator/>
  </NavigationContainer>
  </View>
  </Provider>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


