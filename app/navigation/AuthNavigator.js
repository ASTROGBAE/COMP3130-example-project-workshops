import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

// import existing screens
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';

const AppStack = createStackNavigator();

function AuthNavigator() { // in options, add option to remove header, set to false
    return (
        <AppStack.Navigator>
            <AppStack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}}/>
            <AppStack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
        </AppStack.Navigator>
    );
}

export default AuthNavigator;