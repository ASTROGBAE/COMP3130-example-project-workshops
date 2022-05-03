import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";

import AppColors from "../config/AppColors";
import AppText from "./AppText";

// TODO add fonts to text?

let text = ""

function AppCatButton({title,onPress}) {
    text = title;
    if (onPress) {
        return (
            <View style={[styles.buttonBox, {width: text.length*13}]}>
                <TouchableOpacity onPress={onPress} style={[styles.button, {width: text.length*11}]}>
                    <View style={{flexDirection:'row'}}>
                    <MaterialCommunityIcons 
                            name = {'delete'} 
                            size={13} 
                            color= {AppColors.secondary}/>
                        <View style={{flex:0.1}}></View>
                        <AppText title={title} style={styles.text}/>
                    </View>
                </TouchableOpacity>
            </View>
        );
    } else {
        return (
            <View style={[styles.buttonBox, {width: text.length*13}]}>
                    <View style={[styles.button, {width: text.length*11}]}>
                        <AppText title={title} style={styles.text}/>
                    </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttonBox: {
        justifyContent: 'center',
        alignItems:'center',
        height: 22,
        },
    button: {
        backgroundColor: AppColors.primary,
        borderRadius: 12,
        flex:1,
        padding: 2,
        justifyContent: 'center',
        alignItems:'center',
    },
    text: {
        fontSize:14,
        transform: [{ translateX: 0 }, { translateY: -2 }]
    }
});

export default AppCatButton;