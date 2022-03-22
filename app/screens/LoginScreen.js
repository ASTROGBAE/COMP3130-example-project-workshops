import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import {Formik} from 'formik';

import AppText from '../components/AppText';
import AppColors from '../config/AppColors'; 
import AppButton from '../components/AppButton'; 

const [user, setUser] = useState();

function LoginScreen(props) {
    return (
        <View style={styles.container}>
            <View>
                <AppText>Imagine</AppText>
                <StatusBar style="auto" />
            </View>
            <Formik 
                InitialValues={{user:''}}
                onSubmit = {values=> console.log(values)}
            >
                {({handleChange, handleSubmit}) => (
                    <>
                    <TextInput 
                    placeholders="Username"
                    keyboardType="phone-pad"
                    textContentType='none'
                    onChangeText={handleChange('user')}
                    />
                    </>
                )}
            </Formik>
        </View>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.primary,
        alignItems: 'center',
        justifyContent: 'center',
      },
    });