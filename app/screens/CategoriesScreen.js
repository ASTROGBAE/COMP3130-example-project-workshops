import React from 'react';
import { StyleSheet, View, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import AppButton from '../components/AppButton'; 
import AppScreen from '../components/AppScreen';
import DataManager from '../config/DataManager';
import AppTitle from '../components/AppTitle';
import AppColors from "../config/AppColors";
import AppImage from '../components/AppImage';
import AppLogo from '../components/AppLogo'; 
import AppClouds from '../components/AppClouds'; 
import { FlatList } from 'react-native-gesture-handler';

// TODO onPress={() => navigation.navigate('Details')}
let data = DataManager.getInstance();

function CategoriesScreen({navigation}) {
    return (
        <AppScreen statusBar={true}>
            <AppTitle 
            title={'Categories'} 
            onPress={() => navigation.navigate('Options')} />
            <View style={styles.container}>
                <FlatList style={{padding:10, flex:1}}
                data = {data.getCategoryList()}
                keyExtractor={(item) => item.id}
                numColumns={2}
                renderItem = {({item}) =>
                    <View style={{padding:10}}>
                        <AppImage image={item.image} title={item.title} type={'Small'}
                        onPress={() => navigation.navigate('Memory')}/>
                    </View>
                }/>
            </View>
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

export default CategoriesScreen;