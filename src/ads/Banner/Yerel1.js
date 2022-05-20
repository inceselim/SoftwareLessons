


import React from 'react';
import { Platform } from 'react-native';
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';

const adUnitId = Platform.OS === "ios" ?
    "ca-app-pub-1017432203303316/8168453841" :
    "ca-app-pub-1017432203303316/9756867682"

function Yerel1() {
    console.log("Yerel1 ad id:" + adUnitId)
    return (
        <BannerAd
            unitId={adUnitId}
            size={BannerAdSize.MEDIUM_RECTANGLE}
            requestOptions={{
                requestNonPersonalizedAdsOnly: false,
            }}
        />
    );
}

export default Yerel1;