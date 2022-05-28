import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './app/screen/authentication/Login';
import Sign_Up from './app/screen/authentication/Sign_Up';
import Booking from './app/screen/welcomeScreen/Booking';
import WelcomePage from './app/screen/welcomeScreen/WelcomePage';
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppBar from './app/screen/welcomeScreen/AppBar';
import Payment from './app/screen/transactions/Payment';
const Stack = createStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
    <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      header: (props) => <AppBar {...props}/>,
    }}
    >
      <Stack.Screen name="Home" component={WelcomePage} />
      <Stack.Screen name="Booking" component={Booking} />
      <Stack.Screen name='Payment' component={Payment} />
    </Stack.Navigator>
  </NavigationContainer>
   
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


