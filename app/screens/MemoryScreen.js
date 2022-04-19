import React from 'react';
import { Dimensions, Image, StyleSheet, View, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import AppButton from '../components/AppButton'; 
import AppScreen from '../components/AppScreen';

import AppColors from "../config/AppColors";
import AppLogo from '../components/AppLogo'; 
import AppClouds from '../components/AppClouds'; 
import DataManager from '../config/DataManager';

const imageWidth = Dimensions.get('window').width;
const imageHeight = Dimensions.get('window').height;

function MemoryScreen({route, navigation}) {
    const {id} = route.params
    let data = DataManager.getInstance();
    let memory = data.getMemory(id)
    console.log(memory)
    return (
        <AppScreen statusBar={false}>
            <Image source={memory.image} style={{
                        flex:1, 
                        height : imageHeight, 
                        width: imageWidth, 
                        backgroundColor:'red',
                    }} resizeMode='cover'/>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        width:'100%',
        backgroundColor: AppColors.white,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default MemoryScreen;