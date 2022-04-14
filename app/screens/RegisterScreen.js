import React from 'react';
import { StyleSheet, View, ImageBackground, Platform, Alert } from 'react-native';
import {Formik} from 'formik'; // formik used here!
import * as yup from 'yup';

import AppButton from '../components/AppButton'; 
import AppScreen from '../components/AppScreen';
import AppColors from "../config/AppColors";
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';

// TODO onPress={() => navigation.navigate('Details')}

function RegisterScreen({navigation}) {

    let schema = yup.object().shape( // yup validation stuff
        {
            email: yup.string().required().email().label("Email"),
            password: yup.string().required().min(4).max(8).label("Email"),
        }
    );

    return (
        <AppScreen>
            <View style={{flex:0.1}}></View>
            <View style={styles.container}>
            <Formik
                    initialValues={{ email: '', password:'', }}
                    onSubmit={values => console.log(values)}
                    validationSchema={schema}
                >
                    {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                    <View>
                        <AppTextInput // email
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="email"
                            keyboardType="email-address"
                            textContentType="emailAddress"
                            onBlur= {() => setFieldTouched("email")}
                            onChangeText = {handleChange("email")}
                        />
                        {touched.email && <AppText title={errors.email} style={{color:'red', fontSize:16}}/>}
                        <AppTextInput // password
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            secureTextEntry={true}
                            textContentType="password"
                            onBlur= {() => setFieldTouched("password")}
                            onChangeText = {handleChange("password")}
                        />
                        <AppTextInput // password
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            secureTextEntry={true}
                            textContentType="password"
                            onBlur= {() => setFieldTouched("password")}
                            onChangeText = {handleChange("password")}
                        />
                        <AppTextInput // password
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            secureTextEntry={true}
                            textContentType="password"
                            onBlur= {() => setFieldTouched("password")}
                            onChangeText = {handleChange("password")}
                        />
                        {touched.password && <AppText title={errors.password} style={{color:'red', fontSize:16}}/>}
                        <AppButton onPress={() => navigation.navigate('Start')} 
                        title="Register" />
                    </View>
                    )}
                </Formik>
            </View>
            <View style={{flex:0.4}}></View>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:0.5,
        width:'100%',
        backgroundColor: AppColors.white,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default RegisterScreen;