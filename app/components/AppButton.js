import React from "react";

import { Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import AppColors from "../config/AppColors";

function AppButton(props) {
    return (
        <Button // TODO use touchable opacity and view objects instead of button as its not very customisable
        // onPress={onPressLearnMore}
        title={props.children}
        //color
        accessibilityLabel="Learn more about this purple button"
      />
    );
}

export default AppButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor:'black'
    }
    // button: {
    //     color: AppColors.secondary,
    //     borderRadius: 50,
    //     padding: 10,
    //     marginTop:10,
    // }
});