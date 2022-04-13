import React from 'react';
import { StyleSheet, View, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import AppButton from '../components/AppButton'; 
import AppScreen from '../components/AppScreen';

import AppColors from "../config/AppColors";
import AppLogo from '../components/AppLogo'; 
import AppClouds from '../components/AppClouds'; 

// TODO onPress={() => navigation.navigate('Details')}

function AccountScreen({navigation}) {
    return (
        <AppScreen>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        width:'100%',
        backgroundColor: AppColors.white,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default AccountScreen;