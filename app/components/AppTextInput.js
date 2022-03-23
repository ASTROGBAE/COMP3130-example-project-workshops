import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
//import Ionicons from '@expo/vector-icons/Ioniconsr';
// for more icon info, see: https://docs.expo.dev/guides/icons/

import AppColors from '../config/AppColors'; 
import AppText from '../components/AppText';

function AppTextInput() {
    return (
        <View style={styles.container}> /*
            <TextInput style={AppText.text} {...otherProps}/>
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