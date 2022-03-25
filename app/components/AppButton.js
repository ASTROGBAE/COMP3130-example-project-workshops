import React from "react";
import { Alert, Text, StyleSheet, TouchableOpacity, View } from "react-native";

import AppColors from "../config/AppColors";
import AppText from "./AppText";

function AppButton({title,onPress}) {
    return (
        <TouchableOpacity>
            <View style={styles.button}>
                    <Text style={[styles.text, AppText.styles]}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default AppButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: AppColors.primary,
        borderRadius: 50,
        padding: 15,
        width: '100%',
    },
    text: {
        fontSize:16
    }
});