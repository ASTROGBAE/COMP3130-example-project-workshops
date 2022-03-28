import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

// import existing screens
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';

const AppStack = createStackNavigator();

function AuthNavigator() {
    return (
        <AppStack.Navigator>
            <AppStack.Screen name="Welcome" component={WelcomeScreen}/>
            <AppStack.Screen name="Login" component={LoginScreen}/>
        </AppStack.Navigator>
    );
}

export default AuthNavigator;