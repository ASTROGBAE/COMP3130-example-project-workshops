import React, {useState} from 'react';
import { Dimensions, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import ImageView from "react-native-image-viewing";

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
    const [visible, setIsVisible] = useState(false);
    return (
        <AppScreen statusBar={false}>
            <TouchableOpacity style={styles.container} onPress={() => setIsVisible(true)}>
                <Image source={memory.image} style={styles.container} resizeMode='cover'/>
            </TouchableOpacity>
            <ImageView
            images={[memory.image]}
            imageIndex={0}
            visible={visible}
            onRequestClose={() => setIsVisible(false)}
            style={{flex:1}}
            />
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