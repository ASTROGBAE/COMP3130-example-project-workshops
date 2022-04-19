import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons'

import AppColors from "../config/AppColors";
import AppText from "./AppText";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const imageWidth = Dimensions.get('window').width;

function AppBackTitle({onPress, onBack}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onBack} style={styles.button}>
                <MaterialCommunityIcons name="cog" color={AppColors.white} size={40} />
            </TouchableOpacity>
            <View style={{width:imageWidth*0.45}}></View>
            <TouchableOpacity onPress={onPress} style={styles.button}>
                <MaterialCommunityIcons name="cog" color={AppColors.white} size={40} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 0.1,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        position:'absolute',
        backgroundColor:'red'
    },
    title: {
        fontSize: 30,
    }
});

export default AppBackTitle;