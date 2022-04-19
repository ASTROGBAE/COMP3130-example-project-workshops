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
import AppText from '../components/AppText';

// TODO onPress={() => navigation.navigate('Details')}

let data = DataManager.getInstance();

function AccountScreen({navigation}) {
    let imageSize = 150;
    return (
        <AppScreen statusBar={true}>
            <AppTitle 
            title={'Account'} 
            onPress={() => navigation.navigate('Options')} />
            <View style={styles.container}>
                <Image
                    source={data.userImagePath}
                    style={{width: imageSize, height: imageSize, borderRadius: imageSize/2}} 
                />
                <AppText />
                <AppText title={data.userName} style={styles.subtitle}/>
                <View style={{flexDirection:'row'}}>
                    <AppText title={'Email: '} style={styles.title}/>
                    <AppText title={data.userEmail} style={styles.subtitle}/>
                </View>
                <AppText />
                <View style={{flexDirection:'row'}}>
                    <AppText title={'User since: '} style={styles.title}/>
                    <AppText title={data.getJoinedDate()} style={styles.subtitle}/>
                </View>
                <View style={{flexDirection:'row'}}>
                    <AppText title={'Memories added: '} style={styles.title}/>
                    <AppText title={data.memories.length} style={styles.subtitle}/>
                </View>
                <AppButton 
                    title="Log out"
                    onPress={() => navigation.navigate('Welcome')} />
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
    },
    title: {
        fontWeight:'bold',
        color:AppColors.primary
    }, subtitle: {
        color:AppColors.offBlack
    }
})

export default AccountScreen;