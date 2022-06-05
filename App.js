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
const Stack = createStackNavigator();

export default function App() {
  const globalContext = useContext(Context)
  const isLoggedIn = globalContext;
  const token = globalContext;
  return (
    <Provider>
    <NavigationContainer>
    <Stack.Navigator
    initialRouteName="Landing"
    screenOptions={{
      header: (props) => <AppBar {...props}/>,
    }}
    >
      {(!isLoggedIn || !token) ? 
      <>
      <Stack.Screen name="Landing" component={Landing} options={{headerShown: false}}/>
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
      <Stack.Screen name="Sign_Up" component={Sign_Up} options={{headerShown: false}}/>
      </>
      :
      
      
     
     <> 
      <Stack.Screen name="WelcomePage" component={WelcomePage} />
      <Stack.Screen name="Booking" component={Booking} />
      <Stack.Screen name='Payment' component={Payment} />
      <Stack.Screen name='Prices' component={Prices} />
      <Stack.Screen name='Services' component={Services} />
      </>
}
    </Stack.Navigator>
  </NavigationContainer>
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


