import { StyleSheet, Dimensions } from 'react-native'
const logo_color = '#000000';
const dimensions = Dimensions.get('window');
const imageHeight = dimensions.height;  //imageHeight = 684.7 
const imageWidth = dimensions.width;    //imageWidth = 411.6

export default StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: '#101010'
    },
    linearGradient: {
        flex: 1,
    },
})