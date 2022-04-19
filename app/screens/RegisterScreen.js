import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import {Formik} from 'formik'; // formik used here!
import * as yup from 'yup';
import * as ImagePicker from 'expo-image-picker';
import {MaterialCommunityIcons} from '@expo/vector-icons'

import AppButton from '../components/AppButton'; 
import AppScreen from '../components/AppScreen';
import AppColors from "../config/AppColors";
import DataManager from '../config/DataManager';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';

// TODO onPress={() => navigation.navigate('Details')}

const data = DataManager.getInstance();

function RegisterScreen({navigation}) {
    const [selectedImage, setSelectedImage] = React.useState(null);

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
        alert('Permission to access camera roll is required!');
        return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();

        if (pickerResult.cancelled === true) {
        return;
        }

        setSelectedImage({ localUri: pickerResult.uri });
    };

    if (selectedImage !== null) {
        return (
        <View style={styles.container}>
            <Image
            source={{ uri: selectedImage.localUri }}
            style={styles.thumbnail}
            />
        </View>
        );
    }
      
    let schema = yup.object().shape( // yup validation stuff
        {
            name: yup.string().required().min(1).max(14).label("Name"),
            email: yup.string().required().email().label("Email"),
            password: yup.string().required().min(4).max(14).label("Password"),
        }
    );

    return (
        <AppScreen statusBar={false}>
            <View style={{flex:0.1}}></View>
            <View style={styles.container}>
            <TouchableOpacity onPress={openImagePickerAsync}>
                <MaterialCommunityIcons 
                    name={'star-four-points'} 
                    size={40} color={AppColors.primary}/>
            </TouchableOpacity>
            <Formik
                    initialValues={{ name: '', email: '', password:'', }}
                    onSubmit={values => {
                        data.createUser(values.name, values.email);
                        console.log("User created: " + values.name + ", " + values.email);
                        navigation.navigate('Start')
                    }}
                    validationSchema={schema}
                >
                    {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                    <View>
                        <AppTextInput // name
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="account"
                            onBlur= {() => setFieldTouched("name")}
                            onChangeText = {handleChange("name")}
                        />
                        {touched.name && <AppText title={errors.name} style={{color:'red', fontSize:14}}/>}
                        <AppTextInput // email
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="email"
                            keyboardType="email-address"
                            textContentType="emailAddress"
                            onBlur= {() => setFieldTouched("email")}
                            onChangeText = {handleChange("email")}
                        />
                        {touched.email && <AppText title={errors.email} style={{color:'red', fontSize:14}}/>}
                        <AppTextInput // password
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            secureTextEntry={true}
                            textContentType="password"
                            onBlur= {() => setFieldTouched("password")}
                            onChangeText = {handleChange("password")}
                        />
                        {touched.password && <AppText title={errors.password} style={{color:'red', fontSize:14}}/>}
                        <AppButton onPress={handleSubmit} title="Register" />
                    </View>
                    )}
                </Formik>
            </View>
            <View style={{flex:0.2}}></View>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        width:'100%',
        backgroundColor: AppColors.white,
        alignItems: "center"
    }, thumbnail: {
        width: 300,
        height: 300,
        resizeMode: "contain"
      }
})

export default RegisterScreen;