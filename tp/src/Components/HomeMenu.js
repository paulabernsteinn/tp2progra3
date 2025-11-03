import React, { Component } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../Screens/Home';
import Profile from '../Screens/Profile'

const Tab = createBottomTabNavigator();


function HomeMenu(){
    return (
        <Tab.Navigator>
           <Tab.Screen name="Home" component={ Home } options={ { headerShown: false ,  tabBarIcon: () => <AntDesign name="home" size={24} color="black" /> }} />
           <Tab.Screen name="Profile" component={ Profile } options={ { headerShown: false,  tabBarIcon: () => <AntDesign name="home" size={24} color="black" />} } />
           </Tab.Navigator>
       
  )}

  export default HomeMenu