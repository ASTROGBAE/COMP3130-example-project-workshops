import { StatusBar } from 'expo-status-bar';
import {React} from 'react';
import { StyleSheet, View} from 'react-native';
import {Formik} from 'formik';

import AppText from '../components/AppText';
import AppButton from '../components/AppButton'; 
import AppScreen from '../components/AppScreen';
import AppTextInput from '../components/AppTextInput'; 
import {MaterialCommunityIcons} from '@expo/vector-icons'
import AppColors from '../config/AppColors';

function LoginScreen(props) {
    return (
        <AppScreen>
            <View style={styles.background}>
                <MaterialCommunityIcons name={'account'} size={80} color={AppColors.white}/>
                <AppText>Login</AppText>
                <StatusBar style="auto" />

                <Formik
                    initialValues={{ email: '', password:'', }}
                    onSubmit={values => console.log(values)}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View>
                        <AppTextInput // email
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="email"
                            placeholder="Email Address"
                            keyboardType="email-address"
                            textContentType="emailAddress"
                            onChangeText = {handleChange("email")}
                        />
                        <AppTextInput // password
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            placeholder="Password"
                            secureTextEntry={true}
                            textContentType="password"
                            onChangeText = {handleChange("password")}
                        />
                        <AppButton onPress={handleSubmit} title="Submit" />
                    </View>
                    )}
                </Formik>
            </View>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width:"100%"
    }
})

export default LoginScreen;