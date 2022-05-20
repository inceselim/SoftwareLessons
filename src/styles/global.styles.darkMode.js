

import React, { Component, useEffect, useState } from 'react'
import { StyleSheet, Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const darkMode = StyleSheet.create({
    body: {
        flex: 1,
    },
    bodyHome: {
        flex: 1,
        height: windowHeight,
        width: windowWidth,
        backgroundColor: "#003",
    },
    image: {
        flex: 1,
        opacity: 0.8,
    },
    button: {
        backgroundColor: "#fff",
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 20,
        padding: 4,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center"
    },
    buttonText: {
        fontSize: 15,
        color: "#000",
        textAlign: "center",
        paddingTop: 3,
        paddingBottom: 3,
    },
    buttonIcon:{
        color:"#003"
    },
    topicText: {
        textAlign: "center",
        fontWeight: "bold",
        fontStyle: "italic",
        fontSize: 23,
        padding: 10,
        margin:2,
        color:"#fff"
    },
    contentBG: {
        backgroundColor: "#cdcdcd",
        flex: 1,
        margin: 15,
        borderRadius: 20,
        opacity: 0.9,
        padding: 10,
    },
    contentText: {
        fontSize: 16,
        fontStyle: "italic",
        color:"#fff",
        padding:10,
        margin:7,
    },
    contentTextBullet:{
        fontSize: 14,
        fontStyle: "italic",
        color: "#fff",
        paddingLeft:30,
        margin:1
    },
    contentTextCode:{
        fontSize: 14,
        fontStyle: "italic",
        color: "#fff",
        paddingLeft:35,
        margin:1
    },
    img1: {
        width: windowWidth,
        height: windowHeight/3,
        resizeMode: 'contain',
        alignSelf: 'center',
        backgroundColor:"#003",
        padding:10,
    },
})

export default darkMode;