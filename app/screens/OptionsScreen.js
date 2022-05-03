import React, {useState} from 'react';
import { StyleSheet, View, Switch, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import AppButton from '../components/AppButton'; 
import AppScreen from '../components/AppScreen';

import AppColors from "../config/AppColors";
import AppBackTitle from '../components/AppBackTitle';
import DataManager from '../config/DataManager';
import AppTitle from '../components/AppTitle';
import AppLogo from '../components/AppLogo'; 
import AppClouds from '../components/AppClouds'; 
import AppText from '../components/AppText';

// TODO onPress={() => navigation.navigate('Details')}

function OptionsScreen({navigation}) {
    // switch variables (placeholder)
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <AppScreen statusBar={false}>
            <AppBackTitle 
            onPress={() => navigation.navigate('Options')} 
            onBack={() => navigation.navigate('Home')}/>
            <View style={styles.container}>
                <View style={{flexDirection:'row'}}>
                    <AppText title={'Send user data: '} style={{color:AppColors.black}}/>
                    <Switch trackColor={{ false: "#767577", true: AppColors.primary }}
                        thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        style={{transform: [{ translateX: 0}, { translateY: -10}]}}/>
                </View>
                <AppButton 
                    title="Delete Account"
                    onPress={() => {
                        Alert.alert(
                            "Delete Account",
                            "This action will permanently delete your account and all your memories. Are you sure?",
                            [
                                {
                                  text: "Ask me later",
                                  onPress: () => console.log("Ask me later pressed")
                                },
                                {
                                  text: "Cancel",
                                  onPress: () => console.log("Cancel Pressed"),
                                  style: "cancel"
                                },
                                { text: "OK", onPress: () => console.log("OK Pressed") }
                              ]
                        )
                    }} />
            </View>
            <View style={{flex:0.5}}></View>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:0.4,
        width:'100%',
        backgroundColor: AppColors.white,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default OptionsScreen;