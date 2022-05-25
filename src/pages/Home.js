

import React, { useState, useEffect } from 'react';
import { View, FlatList, SafeAreaView, ActivityIndicator, ImageBackground, TouchableOpacity } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Card from "../components/Card/Card"
import B1 from "../ads/Banner/B1"

export default function Home({ navigation }) {
    const [allData, setData] = useState([]);
    const [loading, setLoading] = useState(false); // Set loading to true on component mount

    useEffect(() => {
        const subscriber = firestore()
            .collection('data')
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
                console.log("allData.img" + allData.img)
            });
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
        <SafeAreaView style={{ flex: 1, marginLeft: 12, marginRight: 12 }}>
            <View style={{ flex: 1 }}>
                {/* <ImageBackground source={require("../assets/icon1.png")} resizeMode="cover"
                    style={{ flex: 1, justifyContent: "center", opacity: 0.8 }}> */}
                <FlatList
                    data={formatData(allData)} numColumns={3}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Detail',
                                { key: item.key, img: item.img })}>
                            <Card title={item.key} img={item.img}
                                content={item.content} />
                        </TouchableOpacity>
                    )}
                />
                {/* </ImageBackground> */}
            </View>
            <View style={{ alignItems: "center" }}><B1 /></View>
        </SafeAreaView>
    )
}

