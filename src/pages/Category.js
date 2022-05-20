


import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, Image, StyleSheet, Dimensions, StatusBar, SafeAreaView, ActivityIndicator, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import CategoryCard from "../components/CategoryCard/CategoryCard"
import lightMode from "../styles/global.style.lightMode"
import darkMode from "../styles/global.styles.darkMode"
import theme from "../styles/styles"
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { useNavigation } from '@react-navigation/native';

import { useSelector, useDispatch, connect } from 'react-redux';
import RenderItemSlider from '../components/RenderItemSlider';

import Inter1 from '../ads/Inter/Inter1';


export default function Category(props) {
    const dark = useSelector(selector => selector.dark)

    const themeValue1 = dark === false ? lightMode : darkMode

    const key = props.route.params.key

    const [categoryData, secategorytData] = useState([]);
    const [loading, setLoading] = useState(true); // Set loading to true on component mount

    const navigation = useNavigation();

    useEffect(() => {
        const subscriber = firestore()
            .collection(key)
            .onSnapshot(querySnapshot => {
                const data = [];
                querySnapshot.forEach(documentSnapshot => {
                    data.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,

                    });
                });
                secategorytData(data);
                setLoading(false);
                console.log("Category.img" + categoryData.img)
            });
        <RenderItemSlider />
        // Unsubscribe from events when no longer in use
        return () => subscriber();
    }, []);


    if (loading) {
        return <ActivityIndicator />;
    }

    return (
        <SafeAreaView style={themeValue1.body}>


            <View style={themeValue1.bodyHome}>
                <ImageBackground source={require("../assets/icon1.png")} resizeMode="cover"
                    style={{ flex: 1, justifyContent: "center", opacity: 0.8 }}>
                    <FlatList numColumns={3}
                        data={categoryData}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => navigation.navigate('CategoryDetail',
                                    { key: item.key, img: item.img })}>
                                <CategoryCard title={item.key} img={item.img}
                                    content={item.content} />
                            </TouchableOpacity>
                        )} />
                </ImageBackground>
            </View>


        </SafeAreaView>
    )
}