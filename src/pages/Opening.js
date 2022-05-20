
import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, Image, StyleSheet, Dimensions, StatusBar, SafeAreaView, ActivityIndicator, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Card from "../components/Card/Card"
import CategoryCard from "../components/CategoryCard/CategoryCard"
import Categories from './Categories';
import RenderItemSlider from '../components/RenderItemSlider';
import AppIntroSlider from 'react-native-app-intro-slider';
import B1 from "../ads/Banner/B1"

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


import { useSelector, useDispatch, connect } from 'react-redux';
import { Divider } from 'react-native-paper';
export default function Opening({ navigation }) {
    const [allData, setData] = useState([]);
    const [loading, setLoading] = useState(true); // Set loading to true on component mount

    const [showRealApp, setShowRealApp] = useState(false);

    const onDone = () => {
        setShowRealApp(true);
    };
    const onSkip = () => {
        setShowRealApp(true);
    };
    return (
        <AppIntroSlider
            data={slides}
            renderItem={RenderItemSlider}
            onDone={() => navigation.navigate("Home")}
            showSkipButton={true}
            onSkip={() => navigation.navigate("Home")}
            bottomButton
        />
    );
}

const slides = [
    {
        key: 's1',
        text: '',
        title: 'Welcome...',
        image: {
            uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_mobile_recharge.png',
        },
        backgroundColor: '#20d2bb',
    },
    {
        key: 's2',
        title: 'Different Top Languages',
        text: '',
        image: {
            uri:
                'data:image/png;base64,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',
        },
        backgroundColor: '#febe29',
    },
    {
        key: 's3',
        title: 'Always Update...',
        text: '',
        image: {
            uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_discount.png',
        },
        backgroundColor: '#22bcb5',
    },
    {
        key: 's4',
        title: 'Always in bag',
        text: '',
        image: {
            uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_best_deals.png',
        },
        backgroundColor: '#3395ff',
    },
    {
        key: 's6',
        title: 'Thank you',
        text: 'Remember share your friends :)',
        image: {
            uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_train_ticket_booking.png',
        },
        backgroundColor: '#1ebe29',
    },
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 10,
        justifyContent: 'center',
    },
    titleStyle: {
        padding: 10,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    paragraphStyle: {
        padding: 20,
        textAlign: 'center',
        fontSize: 16,
    },
    introImageStyle: {
        width: 200,
        height: 200,
    },
    introTextStyle: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        paddingVertical: 30,
    },
    introTitleStyle: {
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
        marginBottom: 16,
        fontWeight: 'bold',
    },
});
