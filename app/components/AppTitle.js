import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons'

import AppColors from "../config/AppColors";
import AppText from "./AppText";

const imageWidth = Dimensions.get('window').width;

function AppTitle({title, onPress, onBack}) {
    let optional = null;
    let positionIfBack = null; // will add position absolute to styling if back available
    if (onBack) { // add backbutton
        positionIfBack = {position:'absolute'}
        optional = (
            <TouchableOpacity onPress={onBack} style={styles.button}>
                <MaterialCommunityIcons name="cog" color={AppColors.white} size={40} />
            </TouchableOpacity>
        )
    }
    let titleComponent = null
    if (title) {
        titleComponent = (
            <View style={{
                height:1.5,
                width:imageWidth*0.3,
                backgroundColor:AppColors.white,
                }}></View>
        )
    }
    return (
        <View style={[styles.container, positionIfBack]}>
            {optional}
            <View style={{flexDirection:'column',}}>
                <AppText title={title} style={styles.title}/>
                {titleComponent}
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