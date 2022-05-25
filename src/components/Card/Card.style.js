




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

import { StyleSheet, Dimensions } from "react-native"

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const imgHeight = windowWidth;
const imgWidth = windowHeight;


const cardTheme = {
    ...DefaultTheme,
    roundness: 2,
    dark: false,
    Button: {
        primary: "#573391",
        secondary: "#084594"
    },
    Card: {
        primary: "rgb(211,111,11)",
        secondary: "rgb(111,211,211)"
    },
    colors: {
        primary: 'rgb(10, 115, 85)',
    },
}


export default cardTheme;