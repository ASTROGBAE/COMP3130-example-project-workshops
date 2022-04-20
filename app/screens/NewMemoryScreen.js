import React, { useState, useEffect } from 'react';
import { Dimensions, Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {Formik} from 'formik'; // formik used here!
import * as yup from 'yup';
import * as ImagePicker from 'expo-image-picker';

import AppScreen from '../components/AppScreen';
import AppColors from "../config/AppColors";
import AppText from "../components/AppText";
import AppTextInput from '../components/AppTextInput';
import AppButton from "../components/AppButton";
import AppCatButton from "../components/AppCatButton";
import AppBackTitle from '../components/AppBackTitle';
import DataManager from '../config/DataManager';

let data = DataManager.getInstance();

function NewMemoryScreen({navigation}) {
    // schema 
    let schema = yup.object().shape( // yup validation code for title, details and date
        {
            title: yup.string().required().min(1).max(14).label("Title"),
            desc: yup.string().required().min(1).max(14).label("Description"),
    });
    // image picker code
    const [selectedImage, setSelectedImage] = React.useState(null);
    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert("Permission to access camera roll is required!");
          return;
        }
    
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        console.log(pickerResult);
        if (pickerResult.cancelled === true) {
            return;
          }
      
          setSelectedImage({ localUri: pickerResult.uri });
        };
      
        if (selectedImage !== null) {
            let imagePath = { uri: selectedImage.localUri };
          return (
            <AppScreen statusBar={true}>
                <View style={styles.container}>
                <Image
                    source={imagePath}
                    style={styles.image}
                />
                <Formik
                    initialValues={{ title: '', desc: ''}}
                    onSubmit={values => {
                        data.createMemory(imagePath, values.title, values.desc);
                        console.log("Memory created: " + values.title + ", " + values.desc);
                        navigation.navigate('Home');
                    }}
                    validationSchema={schema}
                >
                    {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                    <View>
                        <AppTextInput // title
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="image-area"
                            onBlur= {() => setFieldTouched("title")}
                            onChangeText = {handleChange("title")}
                        />
                        {touched.title && <AppText title={errors.title} style={{color:'red', fontSize:14}}/>}
                        <AppTextInput // desc
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="text-box"
                            onBlur= {() => setFieldTouched("desc")}
                            onChangeText = {handleChange("desc")}
                        />
                        {touched.desc && <AppText title={errors.desc} style={{color:'red', fontSize:14}}/>}
                        <AppButton onPress={handleSubmit} title="Create Memory" />
                    </View>
                    )}
                </Formik>
                </View>
            </AppScreen>
          );
        }  

    return (
        <AppScreen statusBar={true}>
            <View style ={{flex:0.2}}></View>
            <View style ={styles.buttoncontainer}>
                <AppButton onPress={openImagePickerAsync} title="Add Memory" />
            </View>
            
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    image: {
        flex:1,
        width:'100%',
    }, buttoncontainer : {
        flex:0.2,
        width:'100%',
        backgroundColor: AppColors.white,
        justifyContent: "center",
        alignItems: "center"
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

export default NewMemoryScreen;