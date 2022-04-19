import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

// import existing screens
import WelcomeScreen from '../screens/WelcomeScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import OptionsScreen from '../screens/OptionsScreen';
import MemoryScreen from '../screens/MemoryScreen';
import TabNavigator from './TabNavigator';

const AppStack = createStackNavigator();

function AuthNavigator() { // in options, add option to remove header, set to false
    return (
        <AppStack.Navigator>
            <AppStack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}}/>
            <AppStack.Screen name="Register" component={RegisterScreen} options={{headerShown:false}}/>
            <AppStack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
            <AppStack.Screen name="Start" component={TabNavigator} options={{headerShown:false}}/>
            <AppStack.Screen name="Options" component={OptionsScreen} options={{headerShown:false}}/>
            <AppStack.Screen name="MemoryScreen" component={MemoryScreen} options={{headerShown:false}}/>
        </AppStack.Navigator>
    );
}

export default AuthNavigator;