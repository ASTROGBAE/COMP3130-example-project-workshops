import React from 'react';
import { Dimensions, StyleSheet, View, Alert} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import AppScreen from '../components/AppScreen';
import AppImage from '../components/AppImage';
import DataManager from '../config/DataManager';
import { FlatList } from 'react-native-gesture-handler';

// TODO onPress={() => navigation.navigate('Details')}

//getMemoryList(); // TODO refactor this all into anonymous functions, etc...


// TODO refactor usage of constants

// TODO deal with edge case where no memories remaining?

function HomeScreen({navigation}) {

    // below is the gemeraton of a random selection of memories, chosen once at random until all are shown.
    let data = DataManager.getInstance();
    
    // TODO get random function working, giving up for now... >:(

    return (
        <AppScreen>
            <Carousel 
                layout={'default'}
                windowSize = {Dimensions.get('window').width*0.9}
                sliderWidth={Dimensions.get('window').width}
                sliderHeight={Dimensions.get('window').height}
                itemWidth={Dimensions.get('window').width}
                data = {data.memories}
                renderItem = {({item, index}) =>
                    <AppImage image={item.image} title={item.title} type = 'Big'/>}
            />
        </AppScreen>
    );
}

/* FlatList implementation of above
        <FlatList
                data = {memoriesRandom}
                keyExtractor={(item) => item.id}
                renderItem = {({item}) =>
                    <AppImage image={item.image} title={item.title}/>
                }/>
*/

const styles = StyleSheet.create({
})

export default HomeScreen;