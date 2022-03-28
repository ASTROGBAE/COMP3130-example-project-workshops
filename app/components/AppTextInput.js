import React from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
// for more icon info, see: materialdesignicons.com 

import AppColors from '../config/AppColors'; 
import AppText from '../components/AppText';

function AppTextInput({icon, ...otherProps}) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name = {icon} size={22} color= {AppColors.black}/>}
            <TextInput style={AppText.text} {...otherProps}/>
        </View>
    );
}

export default AppTextInput;

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.white,
        flexDirection: 'row',
        borderRadius: 25,
        padding: 10,
        marginVertical: 10,
        width:'100%',
    }
})