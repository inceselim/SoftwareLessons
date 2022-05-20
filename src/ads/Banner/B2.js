
import React from 'react';
import { Platform } from 'react-native';
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';

const adUnitId = Platform.OS === "ios" ?
    "ca-app-pub-1017432203303316/3107698853" :
    "ca-app-pub-1017432203303316/1858513599"

function B2() {
    console.log("B2 ad id:" + adUnitId)
    return (
        <BannerAd
            unitId={adUnitId}
            size={BannerAdSize.BANNER}
            requestOptions={{
                requestNonPersonalizedAdsOnly: false,
            }}
        />
    );
}

export default B2;