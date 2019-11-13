import { StyleSheet, Dimensions } from 'react-native'
const dimensions = Dimensions.get('window');
const imageHeight = dimensions.height/4.25;
const imageWidth = dimensions.width/2.53125;

export default StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: '#101010'
    },
    linearGradient: {
        flex: 1,
      },
    logoView: {
        flex: 1, 
        alignSelf: 'center',
        width: imageHeight,
        height: imageHeight*1.3,
    },
    logo: {
        height: imageHeight,
        width: imageWidth,
    },
    year: {
        alignSelf: 'center',
        color: '#F0F0F0',
        fontFamily: 'Montserrat-Bold',
        fontSize: 15,
    },
    tagline: {
        alignSelf: 'center',
        color: '#B0B0B0',
        fontSize: 14,
    }
})