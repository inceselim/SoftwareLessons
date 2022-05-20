


import React, { useState, useEffect } from 'react';
import { Text, View, Button, Linking, Appearance, useColorScheme } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider, Switch } from 'react-native-paper';
import { useSelector, useDispatch, connect } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';


const theme = {
    ...DefaultTheme,
    roundness: 2,
    dark: false,
    Button: {
      primary: "#1713a3",
      secondary: "#f84594"
    },
    Card:{
        primary:"rgb(211,111,11)",
        secondary:"rgb(211,211,211)"
    },
    colors: {
      primary: 'rgb(10, 115, 85)',
      secondary:"rgb(11,111,11)",
      activeColor: "#f0edf6",
      inactiveColor: "#3e2465",
      background: 'rgb(242, 242, 242)',
      card: 'rgb(255, 255, 255)',
      text: 'rgb(28, 28, 30)',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
    },
  }


export default theme;