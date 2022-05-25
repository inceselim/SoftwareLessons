


import { StyleSheet, Dimensions } from "react-native"

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const windowWidth1 = windowWidth - 55
const windowHeight1 = windowHeight / 8

const imgHeight = windowHeight / 8;
const imgWidth = windowWidth1;

const cardDark = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        marginLeft: 6,
        marginRight: 6,
        marginBottom: 8,
        marginTop: 12,
        height: windowHeight1,
        width: windowWidth1 / 3,
        borderRadius: 29,
        opacity: 1,
    },
    cardImg: {
        height: imgHeight,
        width: imgWidth / 3 - 15,
        resizeMode: "contain",
        borderRadius: 29,
        alignSelf: "center"
    },
})

export default cardDark;