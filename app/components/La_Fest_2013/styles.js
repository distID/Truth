import { StyleSheet, Dimensions } from 'react-native'
const logo_color = '#38ffff';
const dimensions = Dimensions.get('window');
const imageHeight = dimensions.height;
const imageWidth = dimensions.width;

export default StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: '#101010'
    },
    linearGradient: {
        flex: 1,
      },
    rectangle: {
        width: imageWidth/5.88, 
        height: imageHeight/3.34, 
        backgroundColor: logo_color,
        marginLeft: imageWidth/12.473,
    },
    triangle: {
        width: 0,
        height: 0,
        marginLeft: -imageWidth/10,
        marginTop: imageHeight/45.65,
        borderLeftWidth: imageWidth/3.43,
        borderRightWidth: imageWidth/3.43,
        borderBottomWidth: imageHeight/3.6, 
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: logo_color
    },
    triangleOne: {
        width: 0,
        height: 0,
        marginLeft: -imageWidth/4.167,
        marginTop: imageHeight/3.34,
        borderLeftWidth: imageWidth/5.88,
        borderRightWidth: imageWidth/13.72,
        borderBottomWidth: imageHeight/13.694, 
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: logo_color,
        transform: [
            {rotate: '180deg'}
        ]
    },
    triangleTwo: {
        width: 0,
        height: 0,
        marginLeft: -imageWidth/5.747, 
        marginTop: imageHeight/3.34, 
        borderLeftWidth: imageWidth/5.88,
        borderRightWidth: imageWidth/13.72,
        borderBottomWidth: imageHeight/13.694,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: logo_color,
    },
    
})