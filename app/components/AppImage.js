import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View, Image, ImageBackground } from "react-native";
import DataManager from '../config/DataManager';

import AppColors from "../config/AppColors";
import AppText from "./AppText";

function AppImage({image, title, date, type, onPress}) {
    // figure out width and height based on type
    // universal variables to calculate
    let data = DataManager.getInstance();
    let imageWidth = Dimensions.get('window').width;
    let imageHeight = Dimensions.get('window').height;
    let gradientHeight = 0;
    // if all params missing, return null
    if (!image && !title && !date && !type && !onPress) {
        console.log("no params present!")
        return null;
    }
    // return null if any param is missing (except text-related)
    if (!image || !type || !onPress) {
        return null;
    }
    // IMAGE logic 
    if (typeof image !== 'number' || !data.containsImage(image)) { // invalid image input
        return null;
    } 
    // TYPE logic
    if (type === 'Big') {
        imageWidth *= 0.9;
        imageHeight *= 0.9;
        gradientHeight = imageHeight*0.93;
    } else if (type === 'Small') {
        imageWidth *= 0.4;
        imageHeight *= 0.2;
        gradientHeight = imageHeight;
    } else { // invalid type input
        return null;
    }
    // Text logic (can be based on title or date)
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
    } // if no title or date, will just render without text
    // render items
    if (title || date) {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={onPress}>
                    <Image source={image} style={{
                        flex:1, 
                        height : imageHeight, 
                        width: imageWidth, 
                        borderRadius:29,
                    }} resizeMode='cover'/>
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