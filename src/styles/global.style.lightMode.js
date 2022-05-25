


import React, { Component, useEffect, useState } from 'react'
import { StyleSheet, Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const lightMode = StyleSheet.create({
    body: {
        flex: 1,
    },
    bodyHome: {
        flex: 1,
        height: windowHeight,
        width: windowWidth,
        backgroundColor: "#fff",
    },
    image: {
        flex: 1,
        opacity: 0.8,
    },
    button: {
        backgroundColor: "#033",
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 20,
        padding: 4,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center"
    },
    buttonText: {
        fontSize: 15,
        color: "#fff",
        textAlign: "center",
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft:10
    },
    buttonIcon:{
        color:"#fff"
    },
    topicText: {
        textAlign: "center",
        fontWeight: "bold",
        fontStyle: "italic",
        fontSize: 23,
        padding: 10,
        margin:2,
        color: "#000"
    },
    contentBG: {
        backgroundColor: "#000",
        flex: 1,
        margin: 15,
        borderRadius: 20,
        opacity: 0.9,
        padding: 10,
    },
    contentText: {
        fontSize: 16,
        fontStyle: "italic",
        color: "#000",
        padding:10,
        paddingLeft:5,
        paddingRight:12,
        margin:7,
    },
    contentTextBullet:{
        fontSize: 15,
        fontStyle: "italic",
        color: "#000",
        paddingLeft:35,
        paddingRight:12,
        margin:1,
    },
    contentTextCode:{
        fontSize: 15,
        fontStyle: "italic",
        color: "#000",
        paddingLeft:35,
        paddingRight:12,
        margin:1,
    },
    img1: {
        width: windowWidth,
        height: windowHeight/3,
        resizeMode: 'contain',
        alignSelf: 'center',
        backgroundColor:"#fff",
        padding:12,
    },
});
export default lightMode;