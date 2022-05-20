

import React, { useEffect, useState } from 'react'
import { View, Text, Image, ActivityIndicator, ImageBackground, useColorScheme, Linking } from 'react-native'
import Cardtheme from "./Card.style"
import firestore from '@react-native-firebase/firestore';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { useSelector, useDispatch, connect } from 'react-redux';
import CardRenderDark from './CardRenderDark';

const Card = (props) => {

    const [img, setImg] = useState([]);
    const [loading, setLoading] = useState(true); 


    const key = props.title;

    useEffect(() => {
        const subscriber = firestore()
            .collection("images")
            .doc(key)
            .onSnapshot(documentSnapshot => {

                //console.log('User data: ', documentSnapshot.data());
                setImg(documentSnapshot.data().img);
                setLoading(false);
                // console.log("RESİM" + img)

            });

        // Unsubscribe from events when no longer in use
        return () => subscriber();
    }, []);

    if (loading) {
        return <ActivityIndicator />;
    }



    return (
        <CardRenderDark img={img} title={key} />
    )
}
export default Card;