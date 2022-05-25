
import { Text, TouchableOpacity, Alert, Button, Linking, View, ScrollView } from 'react-native';
import React, { useState } from 'react'
import lightMode from "../styles/global.style.lightMode";
import darkMode from '../styles/global.styles.darkMode';
import { useSelector, useDispatch, connect } from 'react-redux';
import { withTheme } from 'react-native-paper';
import { useTheme } from '@react-navigation/native';
import theme from '../styles/styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import B1 from '../ads/Banner/B1';
import B2 from '../ads/Banner/B2';
import Inter1 from '../ads/Inter/Inter1';
import Inter2 from '../ads/Inter/Inter2';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function Settings(props) {
    Inter1()
    Inter2()

    const APPLE_STORE_ID = 'id1608543401';
    const startRatingCounter = () => {
        Alert.alert(
            'Rate us',
            'Rate us for more motivasion...',
            [
                { text: 'Sure', onPress: () => openStore() },
                {
                    text: 'Thanks!',
                    onPress: () => console.log('No Thanks Pressed'),
                    style: 'cancel',
                },
            ],
            { cancelable: false },
        );
    };
    const openStore = () => {
        //This is the main trick
        if (Platform.OS != 'ios') {
            Linking.openURL(
                `https://play.google.com/store/apps/details?id=com.softwarelessonsenincesoy`,
            ).catch(
                (err) => alert('Please check for Google Play Store')
            );
        } else {
            Linking.openURL(
                `https://apps.apple.com/us/app/software-lessons/id1613119631`,
            ).catch((err) => alert('Please check for the App Store'));
        }
    };

    const InstagramLink = () => {
        Linking.openURL(`https://www.instagram.com/incesoysoftware/`)
    };

    const counter = useSelector(selector => selector.counter)
    const dark = useSelector(selector => selector.dark)

    // const mapStateToProps = state => {
    //     return {
    //         darkMode: state.darkMode,
    //         counter: state.counter,
    //     }
    // }
    const dispatch = useDispatch();
    const increaseCounter = () => {
        dispatch({ type: "INCREMENT" });
    }

    const [whatsAppMsg, setWhatsAppMsg] = useState(
        'https://play.google.com/store/apps/details?id=com.softwarelessonsenincesoy',
        "https://apps.apple.com/us/app/software-lessons/id1613119631"
    );

    const initiateWhatsApp = () => {
        // Check for perfect 10 digit length
        let url = 'whatsapp://send?text=' + whatsAppMsg
        Linking.openURL(url)
            .then((data) => {
                console.log('WhatsApp Opened...');
            })
            .catch(() => {
                alert('Whatsapp not installed...');
            });
    };

    const themeValue1 = dark === false ? lightMode : darkMode
    const { colors } = useTheme();
    return (
        <SafeAreaView style={themeValue1.body}>
            <Text style={themeValue1.topicText} >SETTINGS</Text>
            <ScrollView style={[themeValue1.bodyHome, { marginTop: 20 }]}>
                <TouchableOpacity style={[themeValue1.button, { justifyContent: 'space-between', opacity: 1 }]}
                    onPress={startRatingCounter}>
                    <Text style={themeValue1.buttonText}>Rate us</Text>
                    <MaterialCommunityIcons name="greater-than" style={themeValue1.buttonIcon} size={21} />
                </TouchableOpacity>
                <TouchableOpacity style={[themeValue1.button, { justifyContent: 'space-between', opacity: 1 }]}
                    onPress={initiateWhatsApp}>
                    <Text style={themeValue1.buttonText}>Share</Text>
                    <MaterialCommunityIcons name="greater-than" style={themeValue1.buttonIcon} size={21} />
                </TouchableOpacity>
                <TouchableOpacity style={[themeValue1.button, { justifyContent: 'space-between', opacity: 1 }]}
                    onPress={InstagramLink}>
                    <Text style={themeValue1.buttonText}>Follow us</Text>
                    <MaterialCommunityIcons name="greater-than" style={themeValue1.buttonIcon} size={21} />
                </TouchableOpacity>
                {/* <Button style={{ color: colors.primary }} title="arttır" onPress={increaseCounter} /> */}
                <Text></Text>
            </ScrollView>
            <View style={{ alignItems: "center" }}>
                <B2 />
            </View>
        </SafeAreaView>
    )
}

export default withTheme(Settings)