import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, ImageBackground, Platform } from 'react-native';

import AppText from '../components/AppText';
import AppButton from '../components/AppButton'; 
import AppScreen from '../components/AppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import AppColors from "../config/AppColors";
import AppLogo from '../components/AppLogo'; 
import AppClouds from '../components/AppClouds'; 

function WelcomeScreen({navigation}) {
    return (
        <AppScreen>
            <AppLogo/>
            <AppClouds/>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
})

export default WelcomeScreen;