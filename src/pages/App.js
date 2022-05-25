

import React, { useState, useEffect } from 'react';
import { Text, View, Button, Linking, Appearance, TouchableOpacity, Image, useColorScheme } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider, Switch } from 'react-native-paper';
import { useSelector, useDispatch, connect } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import theme from '../styles/styles';


//
// Redux
//
import store from '../redux/redux';
import { Provider } from 'react-redux';


//
//Pages
//
import Home from './Home';
import Detail from './Detail';
import Contents from './Contents';
import Settings from './Settings';
import Categories from './Categories';
import Category from './Category';
import CategoryDetail from './CategoryDetail';
import Opening from './Opening';

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

function StackScreens({ navigation }) {
  const scheme = useColorScheme();

  const counter = useSelector(selector => selector.counter)
  const dark = useSelector(selector => selector.dark)
  console.log("dark", dark)

  const mapStateToProps = state => {
    return {
      darkMode: state.darkMode,
      counter: state.counter,
    }
  }
  const dispatch = useDispatch();
  const increaseCounter = () => {
    dispatch({ type: "INCREMENT" });
  }

  const onToggleSwitch = () => increaseCounter();


  const [whatsAppMsg, setWhatsAppMsg] = useState(
    'https://play.google.com/store/apps/details?id=com.softwarelessonsenincesoy',
    "https://apps.apple.com/us/app/software-lessons/id1613119631"
  );

  const initiateWhatsApp = () => {
    // Check for perfect 10 digit length
    let url = 'whatsapp://send?text=' + whatsAppMsg
    Linking.openURL(url)
      .then((data) => {
        console.log('WhatsApp Açıldı...');
      })
      .catch(() => {
        alert('Whatsapp not installed...');
      });
  };

  return (
    <Stack.Navigator initialRouteName='Opening'>
      <Stack.Screen name="Opening" component={Opening} options={{
        title: 'Home', headerTitleAlign: 'center', headerShown: false,
      }} />
      <Stack.Screen name="Home" component={Home} options={{
        title: 'Home', headerTitleAlign: 'center'
        , headerShown: true,
        headerLeft: () => (
          <Button onPress={(initiateWhatsApp)}
            color={dark === false ? theme.Button.primary : theme.Button.secondary}
            title="Share" />
        ),
        headerRight: () => {
          return (
            <Switch value={dark} onValueChange={increaseCounter} ios_backgroundColor={dark==false?"#033":"#3dd"} />
          )
        }
        // headerStyle: {backgroundColor: 'papayawhip' }
      }}
      />
      <Stack.Screen name="Detail" component={Detail} options={{
        title: 'Detail', headerTitleAlign: 'center',
        headerShown: true,
        headerRight: () => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate("Setting")}>
              <MaterialCommunityIcons name="dots-vertical-circle-outline"
                color={dark === false ? theme.Button.primary : theme.Button.secondary} size={28} />
            </TouchableOpacity>
          )
        }
      }} />
      <Stack.Screen name="Setting" component={Settings} options={{
        title: 'Settings', headerTitleAlign: 'center',
        headerShown: true,
        headerRight: () => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <MaterialCommunityIcons name="dots-vertical-circle-outline"
                color={dark === false ? theme.Button.primary : theme.Button.secondary} size={28} />
            </TouchableOpacity>
          )
        }
      }} />
      <Stack.Screen name="Contents" component={Contents} options={{
        title: 'Contents', headerTitleAlign: 'center',
        headerShown: true,
        headerRight: () => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate("Setting")}>
              <MaterialCommunityIcons name="dots-vertical-circle-outline"
                color={dark === false ? theme.Button.primary : theme.Button.secondary} size={28} />
            </TouchableOpacity>
          )
        }
      }} />
      <Stack.Screen name="Categories" component={Categories} options={{
        title: 'Categories', headerTitleAlign: 'center',
        headerShown: true,
        headerRight: () => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate("Setting")}>
              <MaterialCommunityIcons name="dots-vertical-circle-outline"
                color={dark === false ? theme.Button.primary : theme.Button.secondary} size={28} />
            </TouchableOpacity>
          )
        }
      }} />
      <Stack.Screen name="Category" component={Category} options={{
        title: 'Category', headerTitleAlign: 'center',
        headerShown: true,
        headerRight: () => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate("Setting")}>
              <MaterialCommunityIcons name="dots-vertical-circle-outline"
                color={dark === false ? theme.Button.primary : theme.Button.secondary} size={28} />
            </TouchableOpacity>
          )
        }
      }} />
      <Stack.Screen name="CategoryDetail" component={CategoryDetail} options={{
        title: 'Category', headerTitleAlign: 'center',
        headerShown: true,
        headerRight: () => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate("Categories")}>
              <MaterialCommunityIcons name="dots-vertical-circle-outline"
                color={dark === false ? theme.Button.primary : theme.Button.secondary} size={28} />
            </TouchableOpacity>
          )
        }
      }} />
    </Stack.Navigator>
  )
}


export default function App() {
  const scheme = useColorScheme();

  const dark = useSelector(selector => selector.dark)
  console.log("dark", dark)

  const dispatch = useDispatch();
  const increaseCounter = () => {
    dispatch({ type: "INCREMENT" });
  }


  return (
    <NavigationContainer theme={dark === true ? DarkTheme : theme}>
      <Tab.Navigator>
        <Tab.Screen name="StackScreens" component={StackScreens} options={{
          title: 'Home', headerShown: true,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={"#fff"} size={23} />
          ),
        }} />
        {/* <Tab.Screen name="Categories" component={Categories} options={{
          title: 'Categories', headerShown: true,
          tabBarIcon: () => (
            <MaterialCommunityIcons name="shape-outline" color={"#fff"} size={23} />
          ),
        }} /> */}
        {/* <Tab.Screen name="Settings" component={Settings} options={{
          title: 'Settings', headerShown: true,
          tabBarIcon: () => (
            <MaterialCommunityIcons name="cog-outline" color={"#fff"} size={23} />
          ),
        }} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  )
}
