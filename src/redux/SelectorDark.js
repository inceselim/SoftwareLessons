


import React, { useState, useEffect } from 'react';
import { Text, View,ImageBackground, Button,FlatList, Linking, SafeAreaView, Appearance, Image, useColorScheme } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Card, Provider as PaperProvider, Switch } from 'react-native-paper';
import { useSelector, useDispatch, connect } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SelectorDark() {
    const dark = useSelector(selector => selector.dark)
    console.log("SelectorDark: ", dark)
}