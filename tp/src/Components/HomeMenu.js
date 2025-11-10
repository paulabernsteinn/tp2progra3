import React, { Component } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../Screens/Home';
import Profile from '../Screens/Profile'
import NuevoPost from '../Screens/NuevoPost';
import {FontAwesome6} from '@expo/vector-icons';
import navegacionComentario from './navegacionComentario';

const Tab = createBottomTabNavigator();


function HomeMenu(){
    return (
        <Tab.Navigator screenOptions={{tabBarShowLabel: false}}>
           <Tab.Screen name="navegacionComentario" component={ navegacionComentario } options={ { headerShown: false ,  tabBarIcon: () => <AntDesign name="home" size={24} color="black" /> }} />
           <Tab.Screen name="NuevoPost" component={ NuevoPost } options={ { headerShown: false,  tabBarIcon: () => <AntDesign name="plus" size={24} color="black" />} } />
           <Tab.Screen name="Profile" component={ Profile } options={ { headerShown: false,  tabBarIcon: () => <FontAwesome6 name="person" size={24} color="black" />} } /> 
            
        </Tab.Navigator>
       
  )}

  export default HomeMenu