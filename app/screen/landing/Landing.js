import React, {useContext} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Context } from '../../components/globalContext/globalContext';

function Landing({navigation, route, props}) {

    const globalContext = useContext(Context)
    const {isLoggedIn} = globalContext;
    return (
        <View>
            <Text>Hello User</Text>
            <Text>You are {(isLoggedIn) ? '': 'Not'} logged in</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Landing;