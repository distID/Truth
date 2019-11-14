import { StyleSheet, Dimensions } from 'react-native'
const logo_color = '#000000';
const dimensions = Dimensions.get('window');
const imageHeight = dimensions.height;  //imageHeight = 684.7cd 
const imageWidth = dimensions.width;    //imageWidth = 411.6

export default StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: '#101010'
    },
    linearGradient: {
        flex: 1,
    },
    triangleOnePartOne: {
        width: 0,
        height: 0,
        marginLeft: -imageWidth/10,
        borderLeftWidth: 30,
        borderRightWidth: 20,
        borderBottomWidth: 20,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: logo_color,
        transform: [
            {rotate: '45deg'}
        ]
    },
    triangleOnePartTwo: {
        width: 0,
        height: 0,
        marginLeft: '-11.5%',
        marginTop: '-3.1%',
        borderLeftWidth: 44,
        borderRightWidth: 29,
        borderBottomWidth: 19,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: logo_color,
        transform: [
            {rotate: '160deg'}
        ]
    },
    blockOneTriangle: {
        width: 0,
        height: 0,
        marginLeft: '-7.5%',
        marginTop: '-2%',
        borderLeftWidth: 25,
        borderRightWidth: 26,
        borderBottomWidth: 25,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: logo_color,
        transform: [
            {rotate: '135deg'}
        ]
    },
    blockOne: {
        backgroundColor: logo_color,
        width: 35,
        height: 130,
        marginLeft: '-12.5%',
        marginTop: '3%',
        transform: [
            {rotate: '0deg'}
        ]
    },
    triangleTwoPartOne: {
        width: 0,
        height: 0,
        marginLeft: '-1.5%',
        marginTop: '17%',
        borderLeftWidth: 25,
        borderRightWidth: 10,
        borderBottomWidth: 7,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: logo_color,
        transform: [
            {rotate: '90deg'}
        ]
    },
    triangleTwoPartTwo: {
        width: 0,
        height: 0,
        marginLeft: '-6%',
        marginTop: '18.3%',
        borderLeftWidth: 10,
        borderRightWidth: 25,
        borderBottomWidth: 7,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: logo_color,
        transform: [
            {rotate: '330deg'}
        ]
    },
    triangleThree: {
        width: 0,
        height: 0,
        marginLeft: '-17.5%',
        marginTop: '36%',
        borderLeftWidth: 23,
        borderRightWidth: 24,
        borderBottomWidth: 23,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: logo_color,
        transform: [
            {rotate: '45deg'}
        ]
    },
    blockTwoTriangleOne: {
        width: 0,
        height: 0,
        marginLeft: '-5.95%',
        marginTop: '28.4%',
        borderLeftWidth: 25,
        borderRightWidth: 10,
        borderBottomWidth: 15,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: logo_color,
        transform: [
            {rotate: '90deg'}
        ]
    },
    blockTwo: {
        width: 30,
        height: 100,
        marginTop: '10.6%',
        marginLeft: '2.3%',
        backgroundColor: logo_color,
        transform: [
            {rotate: '59deg'}
        ]
    },
    blockTwoTriangleTwo: {
        width: 0,
        height: 0,
        marginLeft: '2.3%',
        marginTop: '13.3%',
        borderLeftWidth: 25,
        borderRightWidth: 10,
        borderBottomWidth: 16,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: logo_color,
        transform: [
            {rotate: '-90deg'}
        ]
    },
    triangleFour: {
        width: 0,
        height: 0,
        marginLeft: '-4.5%',
        marginTop: '14.8%',
        borderLeftWidth: 23,
        borderRightWidth: 24,
        borderBottomWidth: 23,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: logo_color,
        transform: [
            {rotate: '225deg'}
        ]
    },
    blockThreeTriangleOne: {
        width: 0,
        height: 0,
        marginLeft: '-33.5%',
        marginTop: '38%',
        borderLeftWidth: 25,
        borderRightWidth: 10,
        borderBottomWidth: 16,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: logo_color,
        transform: [
            {rotate: '90deg'}
        ]
    },
    blockThree: {
        width: 30,
        height: 90,
        marginTop: '22%',
        marginLeft: '1.3%',
        backgroundColor: logo_color,
        transform: [
            {rotate: '59deg'}
        ]
    },
    blockThreeTriangleTwo: {
        width: 0,
        height: 0,
        marginLeft: '1.25%',
        marginTop: '24.3%',
        borderLeftWidth: 25,
        borderRightWidth: 10,
        borderBottomWidth: 15,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: logo_color,
        transform: [
            {rotate: '-90deg'}
        ]
    },
    triangleFivePartOne: {
        width: 0,
        height: 0,
        marginLeft: '-12%',
        marginTop: '36%',
        borderLeftWidth: 10,
        borderRightWidth: 25,
        borderBottomWidth: 7,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: logo_color,
        transform: [
            {rotate: '145deg'}
        ]
    },
    triangleFivePartTwo: {
        width: 0,
        height: 0,
        marginLeft: '-6.2%',
        marginTop: '37%',
        borderLeftWidth: 25,
        borderRightWidth: 10,
        borderBottomWidth: 7,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: logo_color,
        transform: [
            {rotate: '-90deg'}
        ]
    },
    blockFour: {
        backgroundColor: logo_color,
        width: 35,
        height: 130,
        marginLeft: '-1.3%',
        marginTop: '21.8%',
        transform: [
            {rotate: '0deg'}
        ]
    },
    blockFourTriangle: {
        width: 0,
        height: 0,
        marginLeft: '-12.5%',
        marginTop: '52.3%',
        borderLeftWidth: 25,
        borderRightWidth: 26,
        borderBottomWidth: 25,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: logo_color,
        transform: [
            {rotate: '-45deg'}
        ]
    },
    triangleSixPartOne: {
        width: 0,
        height: 0,
        marginLeft: '-7.5%',
        marginTop: '55%',
        borderLeftWidth: 44,
        borderRightWidth: 29,
        borderBottomWidth: 19,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: logo_color,
        transform: [
            {rotate: '-20deg'}
        ]
    },
    triangleSixPartTwo: {
        width: 0,
        height: 0,
        marginLeft: '-11.5%',
        marginTop: '51.4%',
        borderLeftWidth: 30,
        borderRightWidth: 20,
        borderBottomWidth: 20,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: logo_color,
        transform: [
            {rotate: '225deg'}
        ]
    },
})