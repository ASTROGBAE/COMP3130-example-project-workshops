import React from 'react';
import { Platform, StatusBar, StyleSheet, View, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import AppColors from "../config/AppColors";

// TODO figure out how to deal with iOS for statusBar?

function AppScreen({children, style}) {
    return (
        <View style = {[styles.screen,style]}> 
            {Platform.OS === 'android' ?
            <StatusBar backgroundColor={AppColors.primary}/>:null}
            <LinearGradient
                colors={[AppColors.primary, AppColors.tertiary+80]}
                start={{x: 0.5, y: 0}}
                end={{x: 0.5, y: 1}}
                style={{flex:1}}>
                <SafeAreaView style = {styles.container}>
                    {children}
                </SafeAreaView>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor: AppColors.primary,
    }, 
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default AppScreen;