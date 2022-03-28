import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import {Formik} from 'formik';

import AppText from '../components/AppText';
import AppButton from '../components/AppButton'; 
import AppScreen from '../components/AppScreen';
import AppTextInput from '../components/AppTextInput'; 
import {MaterialCommunityIcons} from '@expo/vector-icons'
import AppColors from '../config/AppColors';

function LoginScreen(props) {
    //const [user, setUser] = useState();
    return (
        <AppScreen>
            <View style={styles.background}>
                <MaterialCommunityIcons name={'account'} size={80} color={AppColors.white}/>
                <AppText>Login</AppText>
                <StatusBar style="auto" />
                
                <AppTextInput // appText input
                autoCapitalize="none"
                autoCorrect={false}
                icon="email"
                placeholder="Email Address"
                keyboardType="email-address"
                textContentType="emailAddress"
            />
            </View>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default LoginScreen;