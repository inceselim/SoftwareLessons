

import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, Image, StyleSheet, Dimensions, StatusBar, SafeAreaView, ActivityIndicator, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Card from "../components/Card/Card"
import lightMode from "../styles/global.style.lightMode"
import darkMode from "../styles/global.styles.darkMode"
import theme from "../styles/styles"
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import { useSelector, useDispatch, connect } from 'react-redux';
import RenderItemSlider from '../components/RenderItemSlider';

export default function Categories() {
    const [allData, setData] = useState([]);
    const [loading, setLoading] = useState(true); // Set loading to true on component mount

    const dark = useSelector(selector => selector.dark)
    const themeValue1 = dark === false ? lightMode : darkMode

    const navigation = useNavigation();
    useEffect(() => {
        const subscriber = firestore()
            .collection('categories')
            .onSnapshot(querySnapshot => {
                const data = [];
                querySnapshot.forEach(documentSnapshot => {
                    data.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,

                    });
                });
                setData(data);
                setLoading(false);
            });
        <RenderItemSlider />
        // Unsubscribe from events when no longer in use
        return () => subscriber();
    }, []);


    if (loading) {
        return <ActivityIndicator />;
    }
    const formatData = (data, numColumns) => {
        const n = Math.floor(allData.length / numColumns)
        return data;
    }
    const numColumns = 3;


    return (
        <SafeAreaView style={themeValue1.body}>
            <View style={themeValue1.bodyHome}>
                {/* <ImageBackground source={require("../assets/icon1.png")} resizeMode="cover"
                    style={{ flex: 1, justifyContent: "center", opacity: 0.8 }}> */}
                    <FlatList
                        data={formatData(allData)} numColumns={3}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Category',
                                    { key: item.key, img: item.img })}>
                                <Card title={item.key} img={item.img}
                                    content={item.content} />
                            </TouchableOpacity>
                        )} />
                {/* </ImageBackground> */}
            </View>
        </SafeAreaView>
    )
}


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
