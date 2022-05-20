

import React, { useState, useEffect } from 'react';
import { Text, View, Button, Linking, SafeAreaView, Appearance, Image, useColorScheme } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Card, Provider as PaperProvider, Switch } from 'react-native-paper';
import { useSelector, useDispatch, connect } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import cardTheme from "../Card/Card.style"
import CategoryCardLightMode from "./CategoryCard.lightMode"
import CategoryCardDarkMode from "./CategoryCard.darkMode"

export default function CategoryRenderDark(props) {
    const dark = useSelector(selector => selector.dark)
    const img = props.img
    const title = props.title

    
    const themeValue = dark === false ? cardTheme.Card.primary : cardTheme.Button.secondary
    const themeValue1 = dark === false ? cardLight : cardDark
    console.log("dark", dark)
    console.log("img", img)


    return (
        <View style={themeValue1.container}>
            <Image style={themeValue1.cardImg} source={{ uri: img }} />
        </View>
    )
}