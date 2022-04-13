import React from "react";

import { Text, StyleSheet, View } from "react-native";
import AppColors from "../config/AppColors";

function AppText({title, ...rest}) {
    return (
        <Text {...rest} style={styles.text}>
            {title}
        </Text>
    );
}

export default AppText;

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontWeight: "bold",
        color:AppColors.white
    }
})