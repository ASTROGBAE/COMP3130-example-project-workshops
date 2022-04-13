import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

// import existing screens
import WelcomeScreen from '../screens/WelcomeScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import NewMemoryScreen from '../screens/NewMemoryScreen';
import HistoryScreen from '../screens/HistoryScreen';
import AccountScreen from '../screens/AccountScreen';
import OptionsScreen from '../screens/OptionsScreen';
import MemoryScreen from '../screens/MemoryScreen';

const AppStack = createStackNavigator();

function AuthNavigator() { // in options, add option to remove header, set to false
    return (
        <AppStack.Navigator>
            <AppStack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}}/>
            <AppStack.Screen name="Register" component={RegisterScreen} options={{headerShown:false}}/>
            <AppStack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
            <AppStack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
            <AppStack.Screen name="Categories" component={CategoriesScreen} options={{headerShown:false}}/>
            <AppStack.Screen name="NewMemoryScreen" component={NewMemoryScreen} options={{headerShown:false}}/>
            <AppStack.Screen name="HistoryScreen" component={HistoryScreen} options={{headerShown:false}}/>
            <AppStack.Screen name="AccountScreen" component={AccountScreen} options={{headerShown:false}}/>
            <AppStack.Screen name="OptionsScreen" component={OptionsScreen} options={{headerShown:false}}/>
            <AppStack.Screen name="MemoryScreen" component={MemoryScreen} options={{headerShown:false}}/>
        </AppStack.Navigator>
    );
}

export default AuthNavigator;