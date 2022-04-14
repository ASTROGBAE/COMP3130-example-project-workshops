import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View, Image, ImageBackground } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import AppColors from "../config/AppColors";
import AppText from "./AppText";

// TODO add fonts to text?
const windowWidth = Dimensions.get('window').width;

function AppButton({image, title, subtitle}) {
    if (title || subtitle) {
        return (
            <View style={styles.container}>
                <TouchableOpacity>
                    <ImageBackground
                        style={styles.image}
                        imageStyle={{ borderRadius: 29}}
                        source={image}
                        resizeMode='cover'>
                        <LinearGradient 
                            colors={['#00000000', '#000000']} 
                            style={{height : '100%', width : '100%'}}>
                        </LinearGradient>
                    </ImageBackground>

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
        width:windowWidth*0.9,
        borderRadius:29,
    },
});

export default AppButton;