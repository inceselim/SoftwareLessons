

import React, { useEffect, useState } from 'react'
import { View, Text, Image, ActivityIndicator, ImageBackground } from 'react-native'
import CategoryCardDarkMode from "./CategoryCard.darkMode"
import CategoryCardLightMode from "./CategoryCard.lightMode"
import firestore from '@react-native-firebase/firestore';
import CardRenderDark from "../Card/CardRenderDark";

const CategoryCard = (props) => {
   
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
export default CategoryCard;