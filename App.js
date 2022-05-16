import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './app/screen/authentication/Login';
import Sign_Up from './app/screen/authentication/Sign_Up';
import WelcomePage from './app/screen/welcomeScreen/WelcomePage';

export default function App() {
  return (
    <WelcomePage/>
   
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


