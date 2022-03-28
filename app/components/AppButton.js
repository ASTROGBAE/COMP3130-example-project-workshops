import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";

import AppColors from "../config/AppColors";
import AppText from "./AppText";

function AppButton({title,onPress}) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <AppText title={title} style={styles.text}/>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: AppColors.secondary,
        borderRadius: 50,
        width: '100%',
        padding: 15,
        justifyContent: 'center',
        alignItems:'center',
    },
    text: {
        color:AppColors.black,
        fontSize:16
    }
});

export default AppButton;