import React from 'react';
import { StyleSheet, View, Alert} from 'react-native';

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

getMemoryList(); // TODO refactor this all into anonymous functions, etc...


function HomeScreen({navigation}) {
    return (
        <AppScreen>
            <FlatList
                data = {memoriesRandom}
                keyExtractor={(item) => item.id}
                renderItem = {({item}) =>
                    <AppImage image={item.image} title={item.title}/>
                }/>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
})

export default HomeScreen;