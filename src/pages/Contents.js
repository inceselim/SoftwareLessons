import React, { useState } from 'react'
import { View, Text, Image, ScrollView, Share, TouchableOpacity, Button, Linking, StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native'
import { useSelector, useDispatch, connect } from 'react-redux';
import YoutubePlayer from 'react-native-youtube-iframe';

import ActionButton from 'react-native-action-button';
//Import Icon for the ActionButton
import Icon from 'react-native-vector-icons/Ionicons';

import lightMode from "../styles/global.style.lightMode"
import darkMode from "../styles/global.styles.darkMode"
import theme from '../styles/styles';
import { withTheme } from 'react-native-paper';
import { useTheme } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import B1 from '../ads/Banner/B1';
import B3 from '../ads/Banner/B3';
import Inter2 from '../ads/Inter/Inter2';
import Inter1 from '../ads/Inter/Inter1';


export default function Contents(props, { navigation }) {
    Inter1()
    Inter2()

    const topic1 = props.route.params.topic1
    const topic2 = props.route.params.topic2
    const topic3 = props.route.params.topic3

    const content1 = props.route.params.content1
    const content2 = props.route.params.content2;
    const content3 = props.route.params.content3
    const content4 = props.route.params.content4

    const code1 = props.route.params.code1
    const code1S = code1?.split("<<")
    const code2 = props.route.params.code2
    const code2S = code2?.split("<<")
    const code3 = props.route.params.code3
    const code3S = code3?.split("<<")



    const contentImg1 = props.route.params.contentImg1
    const contentImg2 = props.route.params.contentImg2

    const bullet1 = props.route.params.bullet1


    const video1 = props.route.params.video1

    //Dark-Light Mode
    const dark = useSelector(selector => selector.dark)
    console.log("dark details", dark)

    const dispatch = useDispatch();
    const increaseCounter = () => {
        dispatch({ type: "INCREMENT" });
    }

    //
    //Youtube
    const [playing, setPlaying] = useState(false);
    const onStateChange = (state) => {
        if (state === 'ended') {
            setPlaying(false);
            Alert.alert('video has finished playing!');
        }
    }
    const togglePlaying = () => {
        setPlaying((prev) => !prev);
    }

    const [facebookShareURL, setFacebookShareURL] = useState(
        'https://www.facebook.com/',
    );
    const [postContent, setPostContent] = useState(
        'https://play.google.com/store/apps/details?id=com.softwarelessonsenincesoy ' + "\n" +
        topic1 + "\n" + content1 + "\n" + content2 + "\n" + code1S + "\n" +
        code2S + "\n" + topic2 + "\n" + content3 + "\n" + topic3 + "\n" + content4
    );

    const postOnFacebook = () => {
        let facebookParameters = [];
        if (facebookShareURL)
            facebookParameters.push('u=' + encodeURI(facebookShareURL));
        if (postContent)
            facebookParameters.push('quote=' + encodeURI(postContent));
        const url =
            'https://www.facebook.com/sharer/sharer.php?'
            + facebookParameters.join('&');

        Linking.openURL(url)
            .then((data) => {
                alert('Facebook Açıldı');
            })
            .catch(() => {
                alert('Something went wrong');
            });
    };


    const [whatsAppMsg, setWhatsAppMsg] = useState(
        'https://play.google.com/store/apps/details?id=com.softwarelessonsincesoy',
    );

    const initiateWhatsApp = () => {
        // Check for perfect 10 digit length
        let url = 'whatsapp://send?text=' + whatsAppMsg
        Linking.openURL(url)
            .then((data) => {
                console.log('WhatsApp opened...');
            })
            .catch(() => {
                alert('Whatsapp not installed...');
            });
    };

    const inputValue = topic1 + "\n" + content1 + "\n" + content2 + "\n" + code1S + "\n" +
        code2S + "\n" + topic2 + "\n" + content3 + "\n" + topic3 + "\n" + content4
    const shareMessage = () => {
        //Here is the Share API
        Share.share({
            message: inputValue.toString(),
        })
            //after successful share return result
            .then((result) => console.log(result))
            //If any thing goes wrong it comes here
            .catch((errorMsg) => console.log(errorMsg));
    };

    const themeValue1 = dark === false ? lightMode : darkMode

    return (
        <SafeAreaView style={themeValue1.body}>
            <ScrollView style={themeValue1.bodyHome}>
                <Text style={themeValue1.topicText}>{topic1}</Text>
                {!content1 ? (null)
                    : (
                        <Text style={themeValue1.contentText}>{content1}</Text>
                    )}

                {!code1S ? (null)
                    : (
                        code1S?.map(item => (
                            <Text style={themeValue1.contentTextCode}> {item} </Text>
                        ))
                    )}
                {!content2 ? (null)
                    : (
                        <Text style={themeValue1.contentText}>{content2}</Text>
                    )}

                {!bullet1 ? (null)
                    : (
                        bullet1?.map(item => (
                            <Text style={themeValue1.contentTextBullet}> {"•" + item} </Text>
                        ))
                    )}

                {!code2S ? (null)
                    : (

                        code2S?.map(item => (
                            <Text style={themeValue1.contentTextCode}> {item} </Text>
                        ))
                    )}

                {!contentImg1 ? (null)
                    : (<Image source={{ uri: contentImg1 }} style={themeValue1.img1} />)}


                {!topic2 ? (null)
                    : (<Text style={themeValue1.topicText}>{topic2}</Text>)}
                {!content3 ? (null)
                    : (<Text style={themeValue1.contentText}>{content3}</Text>)}

                {!code3S ? (null)
                    : (

                        code3S?.map(item => (
                            <Text style={themeValue1.contentTextCode}> {item} </Text>
                        ))
                    )}

                {!contentImg2 ? (null)
                    : (<Image source={{ uri: contentImg2 }} style={themeValue1.img1} />)}



                {!topic3 ? (null)
                    : (<Text style={themeValue1.topicText}>{topic3}</Text>)}
                {!content4 ? (null)
                    : (<Text style={themeValue1.contentText}>{content4}</Text>)}

                <Text></Text>
                {!video1 ? (null) :
                    !playing ? (
                        <Button color={dark === false ? theme.Button.primary : theme.Button.secondary}
                            title={playing ? 'pause' : 'Play'} onPress={togglePlaying} />)
                        : (
                            <View>
                                <Button color={dark === false ? theme.Button.primary : theme.Button.secondary}
                                    title={playing ? 'Stop' : 'Play'} onPress={togglePlaying} />
                                <YoutubePlayer
                                    height={320}
                                    allowWebViewZoom={true}
                                    onReady={<ActivityIndicator />}
                                    play={true}
                                    videoId={video1}
                                    onChangeState={onStateChange}
                                />
                            </View>
                        )}
                {/* {!playing ? (null)
                    : (
                        <Button title={playing ? 'Durdur' : 'Konu Videosu'} onPress={togglePlaying} />
                    )} */}
                <Text></Text>

            </ScrollView>
            <B3 />
            <ActionButton buttonColor="rgba(111,116,160,1)">
                {/*Inner options of the action button*/}
                {/*Icons here
             https://infinitered.github.io/ionicons-version-3-search/
           */}
                <ActionButton.Item
                    buttonColor="#3498db"
                    title="Share"
                    onPress={() => shareMessage()}>
                    <Icon
                        name="md-star"
                        style={styles.actionButtonIcon}
                    />
                </ActionButton.Item>
                <ActionButton.Item
                    buttonColor="#1abc1c"
                    title="Share on Facebook"
                    onPress={() => postOnFacebook()}>
                    <Icon
                        name="md-share-alt"
                        style={styles.actionButtonIcon}
                    />
                </ActionButton.Item>
                <ActionButton.Item
                    buttonColor="#1abc9c"
                    title="Share on Whatsapp"
                    onPress={() => initiateWhatsApp()}>
                    <Icon
                        name="md-share-alt"
                        style={styles.actionButtonIcon}
                    />
                </ActionButton.Item>
            </ActionButton>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
    },
    titleStyle: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
    },
    textStyle: {
        fontSize: 16,
        textAlign: 'center',
        padding: 10,
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
});