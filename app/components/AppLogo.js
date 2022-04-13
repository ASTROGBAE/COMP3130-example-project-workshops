import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons'

import AppColors from "../config/AppColors";

function AppLogo() {
    return (
        <View stype={styles.icon}>
            <MaterialCommunityIcons 
                name={'moon-waning-crescent'} 
                size={230} color={AppColors.secondary}
                style={{transform: [{ rotate: "-45deg" }]}}/>
            <View style={{transform: [{ translateX: 130 }, { translateY: -230 }]}}>
                <MaterialCommunityIcons 
                    name={'star-four-points'} 
                    size={30} color={AppColors.secondary}/>
                <MaterialCommunityIcons 
                    name={'star-four-points'} 
                    size={20} color={AppColors.secondary}
                    style={{transform: [{ translateX: -10 }]}}/>
                <MaterialCommunityIcons 
                    name={'star-four-points'} 
                    size={50} color={AppColors.secondary}
                    style={{transform: [{ translateX: 30 }, { translateY: -10 }]}}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    icon:{
        flex: 1,
    }
});

export default AppLogo;