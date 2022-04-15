import React from 'react';
import { Dimensions, StyleSheet, View, Alert} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import AppScreen from '../components/AppScreen';
import AppImage from '../components/AppImage';
import DataManager from '../config/DataManager';
import { FlatList } from 'react-native-gesture-handler';

// TODO onPress={() => navigation.navigate('Details')}

// below is the gemeraton of a random selection of memories, chosen once at random until all are shown.
let data = DataManager.getInstance();
let memoriesOrdered = data.memories;
let memoriesRandom = [];

// get memory at random from those not shown, remove from list
const randomMemory = () => {
    let target = Math.floor(Math.random() * memoriesOrdered.length)
    let m = memoriesOrdered[target];
    memoriesOrdered.splice(m)
    return m
}

const getMemoryList = () => {
    while (memoriesOrdered.length !== 0) {
        memoriesRandom.push(randomMemory())
    }
}

//getMemoryList(); // TODO refactor this all into anonymous functions, etc...


// TODO refactor usage of constants

function HomeScreen({navigation}) {
    return (
        <AppScreen>
            <Carousel 
                layout={'default'}
                windowSize = {Dimensions.get('window').width*0.9}
                sliderWidth={Dimensions.get('window').width}
                sliderHeight={Dimensions.get('window').height}
                itemWidth={Dimensions.get('window').width}
                data = {memoriesOrdered}
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