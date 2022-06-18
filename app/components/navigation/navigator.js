import React, {useContext} from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import WelcomePage from "../../screen/welcomeScreen/WelcomePage";
import Booking from "../../screen/welcomeScreen/Booking";
import Payment from "../../screen/transactions/Payment";
import Prices from "../../screen/services/Prices";
import Services from "../../screen/services/Services";
import Landing from "../../screen/landing/Landing";
import Login from "../../screen/authentication/Login";
import Sign_Up from "../../screen/authentication/Sign_Up";
import { Context } from '../../components/globalContext/globalContext';
import AppBar from "../../screen/welcomeScreen/AppBar";
import Membership from "../../screen/services/Membership";

const Stack = createStackNavigator();

function Navigator(props){
    const globalContext = useContext(Context)
    const {isLoggedIn} = globalContext;
return (
    <Stack.Navigator
    initialRouteName="Landing"
    screenOptions={{
      header: (props) => <AppBar {...props}/>,
    }}
    >
      
      {isLoggedIn ? 
      <Stack.Group>
      <Stack.Screen name="WelcomePage" component={WelcomePage} />
      <Stack.Screen name="Booking" component={Booking} />
      <Stack.Screen name='Payment' component={Payment} />
      <Stack.Screen name='Prices' component={Prices} />
      <Stack.Screen name='Services' component={Services} />
      <Stack.Screen name='Membership' component={Membership} />
      
      </Stack.Group>
      :
      
      
     
     <Stack.Group>
     <Stack.Screen name="Landing" component={Landing} options={{headerShown: false}}/>
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
      <Stack.Screen name="Sign_Up" component={Sign_Up} options={{headerShown: false}}/> 
      </Stack.Group>
}
    </Stack.Navigator>
)
}

export default Navigator;