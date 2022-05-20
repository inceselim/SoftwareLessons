


import React, { useEffect, useState } from 'react';
import { Button } from 'react-native';
import { InterstitialAd, AdEventType, TestIds } from '@react-native-firebase/admob';

const adUnitId = Platform.OS === "ios" ?
    "ca-app-pub-1017432203303316/4427647245" :
    "ca-app-pub-1017432203303316/4995495595"


const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
    requestNonPersonalizedAdsOnly: false,
    keywords: ['Insurance', 'Mortgage', 'Attorney', 'Claim', 'Gas', 'Electicity', 'Gas/Electicity', 'Game', 'Oyun',
        "spotifys", "en iyi online muhasebe programı", "android auto youtube music",
        "adobe acrobat reader gezginler", "adobe acrobat indir gezginler",
        "adobe", "youtube", "sigorta", "böcek ilaçlama", "lawyer", "business software", "software", "yazılım",
        "muhasebe", "asset management", "pest control", "google adwords", "cleanup & restoration services", "casino",
        "mortgages", "commerce", "ecommerce", "kargo", "kira", "sat", "iklim", "burs",
        "hotel", "otel", "strategy", "food", "yemek",
    ],
});

function Inter1() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const eventListener = interstitial.onAdEvent(type => {
            if (type === AdEventType.LOADED) {
                setLoaded(true);
                console.log("Inter1 Loaded")
            }
        });

        // Start loading the interstitial straight away
        interstitial.load();

        // Unsubscribe from events on unmount
        return () => {
            eventListener();
        };
    }, []);

    // No advert ready to show yet
    if (!loaded) {
        console.log("Inter1 is null")
        return null;
    }

    interstitial.show();
}

export default Inter1;