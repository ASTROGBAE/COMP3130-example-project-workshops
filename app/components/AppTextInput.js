import React from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
// for more icon info, see: materialdesignicons.com 

import AppColors from '../config/AppColors'; 
import AppText from '../components/AppText';

// TODO text input not working?

function AppTextInput({icon, ...otherProps}) {
    return (
        <View style={styles.container}>
                {icon && <MaterialCommunityIcons name = {icon} size={26} color= {AppColors.primary}/>}
            <TextInput style={styles.textInput} {...otherProps}/>
        </View>
    );
}

export default AppTextInput;
// TODO refactor style names
const styles = StyleSheet.create({
    container: { // empty space around text input
        backgroundColor: '#cfcfcf',
        flexDirection:'row',
        borderRadius: 9,
        padding: 10,
        marginVertical: 10,
        width:"100%",
    }, 
    textInput: { // grey area
        //alignItems: "center",
        width:"80%",
    },
})