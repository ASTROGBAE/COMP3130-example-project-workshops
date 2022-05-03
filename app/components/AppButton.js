import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";

import AppColors from "../config/AppColors";
import AppText from "./AppText";

// TODO add fonts to text?

function AppButton({title,onPress}) {
    return (
        <View style={styles.buttonBox}>
            <TouchableOpacity onPress={onPress} style={styles.button}>
                <AppText title={title} style={styles.text}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonBox: {
        justifyContent: 'center',
        alignItems:'center',
        flex:0.5,
        height:10,
        },
    button: {
        backgroundColor: AppColors.primary,
        borderRadius: 20,
        width: 300,
        padding: 7,
        justifyContent: 'center',
        alignItems:'center',
    },
    text: {
        fontSize:16
    }
});

export default AppButton;