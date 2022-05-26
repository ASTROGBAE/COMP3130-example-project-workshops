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
    //console.log("App image call: "+ image+" "+title+" "+date+" "+type+" "+onPress)
    // if all params missing, return null
    if (image === undefined && title === undefined && date === undefined && type === undefined && onPress === undefined) {
        //console.log("All params missing, returning null")
        return null;
    }
    // return null if any param is missing (except text-related)
    if (image === undefined || type === undefined || onPress === undefined) {
        //console.log("Image, type or onPress missing, returning null")
        return null;
    }
    // IMAGE logic 
    if (typeof image !== 'number' || !data.containsImage(image)) { // invalid image input
        //console.log("Image invalid, returning null")
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
        //console.log("Invalid type input, returning null")
        return null;
    }
    // Text logic (can be based on title or date)
    let text = null;
    if (title !== undefined && date !== undefined) { // title and date option
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
    } else if (title !== undefined && date === undefined) { // only title
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
    } else if (title === undefined && date !== undefined) { // only date
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
        //console.log("Title or date present, returning component");
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
    //console.log("No text, returning component");
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