import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons'

import AppColors from "../config/AppColors";

function AppClouds() {
    return (
        <View stype={styles.icon}>
            <MaterialCommunityIcons 
                name={'cloud'} 
                size={110} color={AppColors.white+60}
                style={{transform: [{ translateX: -100 }, { translateY: 0 }]}}/>
            <MaterialCommunityIcons 
                name={'cloud'} 
                size={60} color={AppColors.white+60}
                style={{transform: [{ translateX: 140 }, { translateY: -100 }]}}/>
            <MaterialCommunityIcons 
                name={'cloud'} 
                size={70} color={AppColors.white+60}
                style={{transform: [{ translateX: 100 }, { translateY: -100 }]}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    icon:{
        flex: 1,
    }
});

export default AppClouds;