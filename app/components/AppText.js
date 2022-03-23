import React from "react";

import { Text, StyleSheet, View } from "react-native";
import AppColors from "../config/AppColors";

function AppText(props) {
    return (
        <View>
            <Text style={styles.text}>
                {props.children}</Text>
        </View>
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