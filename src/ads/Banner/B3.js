

import React from 'react';
import { Platform } from 'react-native';
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';

const adUnitId = Platform.OS === "ios" ?
    "ca-app-pub-1017432203303316/1993055590" :
    "ca-app-pub-1017432203303316/6009194366"

function B3() {
    console.log("B3 ad id:" + adUnitId)
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

export default B3;