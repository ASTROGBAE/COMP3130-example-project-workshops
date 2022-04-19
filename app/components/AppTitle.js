import React from "react";
import { Dimensions, Text, StyleSheet, TouchableOpacity, View } from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons'

import AppColors from "../config/AppColors";
import AppText from "./AppText";

const imageWidth = Dimensions.get('window').width;

function AppTitle({title, onPress}) {
    return (
        <View style={styles.container}>
            <View style={{flexDirection:'column',}}>
                <AppText title={title} style={styles.title}/>
                <View style={{
                    height:1.5,
                    width:imageWidth*0.3,
                    backgroundColor:AppColors.white,
                    }}></View>
            </View>
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
    },
    title: {
        fontSize: 30,
    }
});

export default AppTitle;