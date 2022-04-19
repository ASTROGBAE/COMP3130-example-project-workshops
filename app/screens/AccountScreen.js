import React from 'react';
import { StyleSheet, View, Alert, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import AppButton from '../components/AppButton'; 
import AppScreen from '../components/AppScreen';

import AppColors from "../config/AppColors";
import DataManager from '../config/DataManager';
import AppTitle from '../components/AppTitle';
import AppLogo from '../components/AppLogo'; 
import AppClouds from '../components/AppClouds'; 

// TODO onPress={() => navigation.navigate('Details')}

let data = DataManager.getInstance();

function AccountScreen({navigation}) {
    let imageSize = 150;
    return (
        <AppScreen>
            <AppTitle 
            title={'Account'} 
            onPress={() => navigation.navigate('Options')} />
            <View style={styles.container}>
                <Image
                    source={data.userImagePath}
                    style={{width: imageSize, height: imageSize, borderRadius: imageSize/2}} 
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