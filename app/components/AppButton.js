import React from "react";
import { Alert, Text, StyleSheet, Button, TouchableOpacity, View } from "react-native";

import AppColors from "../config/AppColors";

function AppButton(props) {
    return (
        <View>
            <Button // TODO use touchable opacity and view objects instead of button as its not very customisable
                onPress={() => Alert.alert('Simple Button pressed')}
                title={props.children}
                //color
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    );
}

export default AppButton;

const styles = StyleSheet.create({
    button: {
        color: AppColors.secondary,
        borderRadius: 50,
        padding: 10,
        marginTop:10,
    }
});