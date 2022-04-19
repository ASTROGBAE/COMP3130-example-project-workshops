import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View, Image, ImageBackground } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import AppColors from "../config/AppColors";
import AppText from "./AppText";

// TODO add fonts to text?
const imageWidth = Dimensions.get('window').width*0.9;
const imageHeight = Dimensions.get('window').height*0.9;

// TODO refactor code below, very messy

function AppImage({image, title, subtitle, date, type, onPress}) {
    // figure out width and height based on type
    // default 
    let imageWidth = Dimensions.get('window').width;
    let imageHeight = Dimensions.get('window').height;
    let gradientHeight = 0;
    if (type === 'Big') {
        imageWidth *= 0.9;
        imageHeight *= 0.9;
        gradientHeight = imageHeight*0.93;
    } else if (type === 'Small') {
        imageWidth *= 0.4;
        imageHeight *= 0.2;
        gradientHeight = imageHeight;
    }
    let text = null;
    if (title && date) { // title and date option
        text = (
            <View style={{flex:1, 
                height : imageHeight, 
                width: imageWidth,
                justifyContent: 'flex-end', alignItems: 'center',
                position: 'absolute'}}>
                <AppText title={title} style = {{fontSize: 28}}/>
                <AppText title={date}
                    style = {{fontSize: 20}}
                    />
                <View style={{height : imageHeight*0.2}}></View>
            </View>
        );
    } else if (title && !date) { // only title
        text = (
            <View style={{flex:1, 
                height : imageHeight, 
                width: imageWidth,
                justifyContent: 'flex-end', alignItems: 'center',
                position: 'absolute'}}>
                <AppText title={title} style = {{fontSize: 22}}/>
                <View style={{height : imageHeight*0.1}}></View>
            </View>
        );
    } else if (!title && date) { // only date
        text = (
            <View style={{flex:1, 
                height : imageHeight, 
                width: imageWidth,
                justifyContent: 'flex-end', alignItems: 'center',
                position: 'absolute'}}>
                <AppText title={
                    date}
                    />
                <View style={{height : imageHeight*0.1}}></View>
            </View>
        );
    }
    // render items
    if (title || subtitle || date) {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={onPress}>
                    <Image source={image} style={{
                        flex:1, 
                        height : imageHeight, 
                        width: imageWidth, 
                        borderRadius:29,
                    }} resizeMode='cover'/>
                    <LinearGradient 
                        colors={['#00000000', '#000000']} 
                        style={{
                            position:'absolute', 
                            height : gradientHeight, 
                            width: imageWidth, 
                            borderRadius:29}}>
                    </LinearGradient>
                    {text}
                </TouchableOpacity>
            </View>
        );
    } else {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image source={image} style={styles.image} resizeMode='cover'/>
            </TouchableOpacity>
        </View>
    )};
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems:'center',
        flex:1,
    },
});

export default AppImage;