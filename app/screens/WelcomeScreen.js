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

function WelcomeScreen({navigation}) {
    return (
        <AppScreen statusBar={false}>
            <View style={styles.graphics}>
                <AppLogo/>
            </View>
            <View style={{flex:0.8}}></View>
            <View style={styles.container}>
                <View style={{flex:0.1}}></View>
                <AppButton 
                title="Register"
                onPress={() => navigation.navigate('Register')} />
                <AppButton 
                title="Login"
                onPress={() => navigation.navigate('Login')} />
                <View style={{flex:0.1}}></View>
            </View>
            <View style={{flex:0.1}}></View>
            <View style={styles.graphics}>
                <AppClouds/>
            </View>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:0.7,
        width:'100%',
        backgroundColor: AppColors.white,
        justifyContent: "center",
        alignItems: "center"
    }, graphics: {
        flex:1,
        alignItems: "center"
    }
})

export default WelcomeScreen;