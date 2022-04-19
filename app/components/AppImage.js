import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View, Image, ImageBackground } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import AppColors from "../config/AppColors";
import AppText from "./AppText";

// TODO add fonts to text?
const imageWidth = Dimensions.get('window').width*0.9;
const imageHeight = Dimensions.get('window').height*0.9;

// TODO refactor code below, very messy

function AppImage({image, title, subtitle, date, type}) {
    // figure out width and height based on type
    // default 
    let imageWidth = Dimensions.get('window').width;
    let imageHeight = Dimensions.get('window').height;
    if (type === 'Big') {
        imageWidth *= 0.9;
        imageHeight *= 0.9;
    } else if (type === 'Small') {
        imageWidth *= 0.4;
        imageHeight *= 0.2;
    }
    let text = null;
    if (title && date) { // title and date option
        console.log(title+date)
        text = (
            <View style={{flex:1, 
                height : imageHeight, 
                width: imageWidth,
                justifyContent: 'flex-end', alignItems: 'center',
                position: 'absolute'}}>
                <AppText title={title} style = {{fontSize: 28}}/>
                <AppText title={
                    date.getDate()+"/"+date.getMonth()+1+"/"+date.getFullYear()}
                    style = {{fontSize: 20}}
                    />
                <View style={{height : imageHeight*0.2}}></View>
            </View>
        );
    } if (title && !date) { // only title
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
    }
    // render items
    if (title || subtitle || date) {
        return (
            <View style={styles.container}>
                <TouchableOpacity>
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
                            height : imageHeight*1.022, 
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