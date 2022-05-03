import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {MaterialCommunityIcons} from '@expo/vector-icons'
import AppColors from "../config/AppColors";

import HomeScreen from '../screens/HomeScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import NewMemoryScreen from '../screens/NewMemoryScreen';
import HistoryScreen from '../screens/HistoryScreen';
import AccountScreen from '../screens/AccountScreen';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator 
    initialRouteName="Home"
    labelVisibilityMode="unlabeled"
    options={{headerShown:false}}
    screenOptions={{
        tabBarActiveTintColor: AppColors.primary,
        tabBarInactiveTintColor: AppColors.white,
        headerShown: false,
        tabBarStyle: { position: 'absolute', 
          backgroundColor:'transparent',
          borderTopWidth: 0,
          position: 'absolute',
          elevation: 0
        },
      }}
    
    
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          unmountOnBlur: true,
          tabBarLabel:() => {return null},
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-variant" color={color} size={40} />
          )}}/>

      <Tab.Screen 
        name="Categories" 
        component={CategoriesScreen} options={{
          unmountOnBlur: true,
          tabBarLabel:() => {return null},
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="view-grid" color={color} size={40} />
          )}}/>

      <Tab.Screen 
        name="New Memory" 
        component={NewMemoryScreen} 
        options={{
          unmountOnBlur: true,
          tabBarLabel:() => {return null},
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="plus-circle" color={color} size={40} />
          )}}/>

      <Tab.Screen 
        name="History" 
        component={HistoryScreen}
          options={{
            unmountOnBlur: true,
            tabBarLabel:() => {return null},
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="history" color={color} size={40} />
            )}}/>
      <Tab.Screen 
        name="Account" 
        component={AccountScreen}
        options={{
          unmountOnBlur: true,
          tabBarLabel:() => {return null},
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-circle" color={color} size={40} />
          )}}/>
    </Tab.Navigator>
  );
}

export default TabNavigator;