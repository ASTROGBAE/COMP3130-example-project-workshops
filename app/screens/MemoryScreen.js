import React, {useState} from 'react';
import { Dimensions, Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import ImageView from "react-native-image-viewing";

import AppScreen from '../components/AppScreen';
import AppColors from "../config/AppColors";
import AppText from "../components/AppText";
import AppCatButton from "../components/AppCatButton";
import AppBackTitle from '../components/AppBackTitle';
import DataManager from '../config/DataManager';


function MemoryScreen({route, navigation}) {
    const {id, category} = route.params
    let data = DataManager.getInstance();
    let memory = data.getMemory(id)
    const [visible, setIsVisible] = useState(false);
    return (
        <AppScreen statusBar={false}>
            <AppBackTitle 
            onPress={() => navigation.navigate('Options')} 
            onBack={() => navigation.navigate('Home')}/>
            <TouchableOpacity style={styles.image} onPress={() => setIsVisible(true)}>
                <Image source={memory.image} style={{flex:1, width:'100%'}} resizeMode='cover'/>
                <ImageView
                images={[memory.image]}
                imageIndex={0}
                visible={visible}
                onRequestClose={() => setIsVisible(false)}
                style={{flex:1}}
            />
            </TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.subcontainer}>
                    <View style={{flexDirection:'row'}}>
                        <MaterialCommunityIcons 
                            name = {'image-area'} 
                            size={26} 
                            color= {AppColors.primary}/>
                        <AppText title={memory.title} style={styles.subtitle}/>
                    </View>
                    <View style={{flex:0.1}}></View>
                    <View style={{flexDirection:'row'}}>
                        <MaterialCommunityIcons 
                            name = {'text-box'} 
                            size={26} 
                            color= {AppColors.primary}/>
                        <AppText title={memory.desc} 
                        style={[styles.subtitle, {fontSize:14}]}/>
                    </View>
                    <View style={{flex:0.1}}></View>
                    <View style={{flexDirection:'row'}}>
                        <MaterialCommunityIcons 
                            name = {'calendar-range'} 
                            size={26} 
                            color= {AppColors.primary}/>
                        <AppText title={data.getDateString(id)} style={styles.subtitle}/>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <MaterialCommunityIcons 
                            name = {'view-grid'} 
                            size={26} 
                            color= {AppColors.primary}/>
                        <AppCatButton title = 'Category'/>
                    </View>
                </View>
            </View>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    image: {
        flex:1,
        width:'100%',
    },
    container: {
        flex:0.7,
        width:'100%',
        backgroundColor: AppColors.white,
        justifyContent: "center",
        alignItems: "center"
    }, subcontainer: {
        flex:1,
        width:'85%',
        justifyContent: "center",
    }, subtitle: {
        color:AppColors.offBlack,
        fontSize:18,
    }, edit : {
        alignItems:'flex-end'
    }
})

export default MemoryScreen;