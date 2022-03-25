import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import {Formik} from 'formik';

import AppText from '../components/AppText';
import AppColors from '../config/AppColors'; 
import AppButton from '../components/AppButton'; 
import AppTextInput from '../components/AppTextInput';
import AppScreen from '../components/AppScreen';

function LoginScreen(props) {
    //const [user, setUser] = useState();
    return (
        <AppScreen style={styles.container}>
            <View>
                <AppText>Imagine</AppText>
                <StatusBar style="auto" />
            </View>
            <View>
                <AppButton title="Click here!"/>
            </View>
            {/* <AppTextInput // appText input
                autoCapitalize="none"
                autoCorrect={false}
                icon="email"
                placeholder="Email Address"
                keyboardType="email-address"
                textContentType="emailAddress"
            /> */}
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    containter:{

    }
})

export default LoginScreen;