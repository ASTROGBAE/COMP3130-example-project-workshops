import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import {Formik} from 'formik';

import AppText from '../components/AppText';
import AppColors from '../config/AppColors'; 
import AppButton from '../components/AppButton'; 
import AppTextInput from '../components/AppTextInput';

function LoginScreen(props) {
    //const [user, setUser] = useState();
    return (
        <View style={styles.container}>
            <View>
                <AppText>Imagine</AppText>
                <StatusBar style="auto" />
            </View>
            <AppTextInput // appText input
                autoCapitalize="none"
                autoCorrect={false}
                icon="email"
                placeholder="Email Address"
                keyboardType="email-address"
                textContentType="emailAddress"
            />
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