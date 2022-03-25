import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import {Formik} from 'formik';

import AppText from '../components/AppText';
import AppButton from '../components/AppButton'; 
import AppScreen from '../components/AppScreen';
import {MaterialCommunityIcons} from '@expo/vector-icons'

function LoginScreen(props) {
    //const [user, setUser] = useState();
    return (
        <AppScreen style={styles.container}>
            <View>
                <MaterialCommunityIcons name={'account'} size={22}/>
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