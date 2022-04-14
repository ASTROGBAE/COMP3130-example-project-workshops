import React from 'react';
import { StyleSheet, View, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import AppButton from '../components/AppButton'; 
import AppScreen from '../components/AppScreen';
import AppImage from '../components/AppImage';
import AppColors from "../config/AppColors";
import AppLogo from '../components/AppLogo'; 
import AppClouds from '../components/AppClouds'; 

// TODO onPress={() => navigation.navigate('Details')}

function HomeScreen({navigation}) {
    return (
        <AppScreen>
            <AppImage image={require('../assets/blue-mars.jpeg')} title='Blue'/>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
})

export default HomeScreen;