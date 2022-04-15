import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View, Image, ImageBackground } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import AppColors from "../config/AppColors";
import AppText from "./AppText";

// TODO add fonts to text?
const imageWidth = Dimensions.get('window').width*0.9;
const imageHeight = Dimensions.get('window').height*0.9;

function AppImage({image, title, subtitle}) {
    if (title || subtitle) {
        return (
            <View style={styles.container}>
                <TouchableOpacity>
                    <Image source={image} style={styles.image} resizeMode='cover'/>
                    <LinearGradient 
                        colors={['#00000000', '#000000']} 
                        style={{
                            position:'absolute', 
                            height : imageHeight, 
                            width: imageWidth, 
                            borderRadius:29}}>
                    </LinearGradient>
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
    image: {
        flex:1, 
        height : imageHeight, 
        width: imageWidth, 
        borderRadius:29,
    },
});

export default AppImage;