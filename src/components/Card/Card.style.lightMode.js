

import { StyleSheet, Dimensions } from "react-native"

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const windowWidth1 = windowWidth - 50
const windowHeight1 = windowHeight / 6

const imgHeight = windowHeight1;
const imgWidth = windowWidth1;

const cardLight = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        marginLeft:10,
        marginRight:3,
        marginBottom:5,
        marginTop:5,
        paddingTop:5,
        height : windowHeight1,
        width : windowWidth1/3,
        borderRadius: 9,
        opacity:1,
    },
    cardTopic:{
        flex:1,
        fontSize:21,
        marginTop:1,
        marginBottom:0,
        color:"#193498",
        textAlign: "center",
        fontWeight: "bold",
        fontStyle: "italic",
    },
    cardImg:{
        height : imgHeight,
        width : imgWidth/3,
        resizeMode:"contain",
    },
    cardBtn:{
        backgroundColor:"#1597E5",
    },
})

export default cardLight;