import { StyleSheet, Dimensions } from 'react-native';
const dimensions = Dimensions.get('window');
const imageHeight = dimensions.height/4.25;    //imageHeight = 684.7
const imageWidth = dimensions.width/2.53125;    //imageWidth = 411.6

export default StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: '#101010'
    },
    linearGradient: {
        flex: 1,
      },
    logoView: {
        height: '100%',
    },
    logoContainer: {
    	flex: 5,
        alignSelf: 'center',
    },
    logo: {
    	flex: 1, 
        height: imageHeight,
        width: imageWidth,
        alignSelf: 'center',
    },
    year: {
        flex: 1,
        alignSelf: 'center',
        color: '#F0F0F0',
        fontFamily: 'Montserrat-Bold',
        fontSize: 15,
    },
    tagline: {
        flex: 1,
        alignSelf: 'center',
        textAlign: 'center',
        color: '#B0B0B0',
        fontFamily: 'Montserrat-Regular',
        fontSize: 13,
        marginTop: '-6%'
    }
})