import React from 'react';
import { StyleSheet, View, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';

import AppButton from '../components/AppButton'; 
import AppScreen from '../components/AppScreen';
import AppColors from "../config/AppColors";
import AppImage from '../components/AppImage';
import AppLogo from '../components/AppLogo'; 
import AppClouds from '../components/AppClouds'; 
import DataManager from '../config/DataManager';

// TODO onPress={() => navigation.navigate('Details')}

let data = DataManager.getInstance();


function HistoryScreen({navigation}) {
    console.log(data.getMemoryByDate())
    return (
        <AppScreen>
            <AppScreen>
            <View style={styles.container}>
                <FlatList style={{padding:10, flex:1}}
                data = {data.getMemoryByDate()}
                keyExtractor={(item) => item.id}
                numColumns={2}
                renderItem = {({item}) =>
                    <View style={{padding:10}}>
                        <AppImage 
                        image={item.image} 
                        date={data.getDateString(item.id)} type={'Small'}/>
                    </View>
                }/>
            </View>
        </AppScreen>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        width:'100%',
        justifyContent: "center",
        alignItems: "center"
    }
})

export default HistoryScreen;