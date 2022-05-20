



import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, Image, SafeAreaView, ImageBackground, ScrollView, TouchableOpacity, } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { useSelector, useDispatch, connect } from 'react-redux';
import lightMode from "../styles/global.style.lightMode"
import darkMode from "../styles/global.styles.darkMode"
import theme from "../styles/styles"
import { useNavigation } from '@react-navigation/native';
import Inter1 from '../ads/Inter/Inter1';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function CategoryDetail(props) {
    Inter1()

    const dark = useSelector(selector => selector.dark)

    const themeValue1 = dark === false ? lightMode : darkMode

    let key = props.route.params.key
    const [allData, setData] = useState([]);

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
                setData(data);
            });

        // Unsubscribe from events when no longer in use
        return () => subscriber();
    }, []);


    return (
        <SafeAreaView style={themeValue1.body}>

            <ImageBackground source={require("../assets/icon1.png")} resizeMode="cover"
                style={{
                    flex: 1,
                    justifyContent: "center", opacity: 0.8
                }}>
                <View style={themeValue1.bodyHome}>
                    <FlatList
                        data={allData}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={[themeValue1.button, { justifyContent: 'space-between', opacity: 1 }]}
                                onPress={() => navigation.navigate('Contents', {
                                    topic1: item.topic1,
                                    topic2: item.topic2,
                                    topic3: item.topic3,

                                    content1: item.content1,
                                    content2: item.content2,
                                    content3: item.content3,
                                    content4: item.content4,

                                    code1: item.code1,
                                    code2: item.code2,
                                    code3: item.code3,

                                    contentImg1: item.contentImg1,
                                    contentImg2: item.contentImg2,

                                    bullet1: item.bullet1,
                                })}>
                                <Text style={themeValue1.buttonText}>{item.key}</Text>
                                <MaterialCommunityIcons name="greater-than" style={themeValue1.buttonIcon} size={21} />
                            </TouchableOpacity>
                        )} /></View>
            </ImageBackground>

        </SafeAreaView>
    )
}

