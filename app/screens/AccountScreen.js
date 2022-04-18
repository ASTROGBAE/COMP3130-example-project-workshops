import React from 'react';
import { StyleSheet, View, Alert, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import AppButton from '../components/AppButton'; 
import AppScreen from '../components/AppScreen';

import AppColors from "../config/AppColors";
import DataManager from '../config/DataManager';
import AppLogo from '../components/AppLogo'; 
import AppClouds from '../components/AppClouds'; 

// TODO onPress={() => navigation.navigate('Details')}

let data = DataManager.getInstance();

function AccountScreen({navigation}) {
    return (
        <AppScreen>
            <View style={styles.container}>
                <Image
                    source={data.userImagePath}
                    style={{width: 400, height: 400, borderRadius: 400/ 2}} 
                />
                <AppButton 
                    title="Login"
                    onPress={() => navigation.navigate('Login')} />
            </View>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        width:'100%',
        backgroundColor: AppColors.white,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default AccountScreen;