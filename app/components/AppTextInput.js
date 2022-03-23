import React from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
// for more icon info, see: materialdesignicons.com 

import AppColors from '../config/AppColors'; 
import AppText from '../components/AppText';

function AppTextInput() {
    return (
        <View style={styles.container}>
            <Text>Sup</Text>
            {/* <MaterialCommunityIcons 
            name = {icon} 
            size={22}
            color= {AppColors.primary}/>
            <TextInput style={AppText.text} {...otherProps}/> */}
        </View>
    );
}

export default AppTextInput;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderRadius: 25,
        padding: 10,
        marginVertical: 10,
        width:'100%',
    }
})