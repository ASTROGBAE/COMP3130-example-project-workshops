import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, ImageBackground, Platform } from 'react-native';

import AppText from '../components/AppText';
import AppButton from '../components/AppButton'; 
import AppScreen from '../components/AppScreen';
import {MaterialCommunityIcons} from '@expo/vector-icons'

const BlurRadiusValue = Platform.OS === 'android' ? 2.5 : 5.5;

function WelcomeScreen(props) {
    return (
        <AppScreen>
            <ImageBackground 
                source={require("../assets/pink-flowers.bmp")} 
                resizeMode="cover" 
                style={styles.background}
                blurRadius={BlurRadiusValue}
            >
                <View>
                    <AppText>Imagine</AppText>
                    <StatusBar style="auto" />
                </View>
                <View>
                    <AppButton title="Click here!"/>
                </View>
            </ImageBackground>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default WelcomeScreen;