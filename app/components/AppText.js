import React from "react";

import { Text, StyleSheet } from "react-native";
import AppColors from "../config/AppColors";

function AppText(props) {
    return (
        <Text style={styles.text}>
            {props.children}</Text>
    );
}

export default AppText;

const styles = StyleSheet.create({
    text: {
        fontSize: 48,
        fontWeight: "bold",
        color:AppColors.white
    }
})