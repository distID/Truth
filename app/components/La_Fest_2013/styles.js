import { StyleSheet, Dimensions } from 'react-native'
const logo_color = '#000000'; //#30FFFF
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
    link: {
        flex: 1, 
        justifyContent: 'center', 
        borderColor: '#505050', 
        borderRadius: 10, 
        borderWidth: 3, 
        marginLeft: '5%', 
        marginRight: '5%',
        elevation: 2
    },
    rectangle: {
        width: imageWidth/5.88, 
        height: imageHeight/3.345, 
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
        marginLeft: -imageWidth/4.12,
        marginTop: imageHeight/3.345,
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
        marginLeft: -imageWidth/5.82, 
        marginTop: imageHeight/3.34, 
        borderLeftWidth: imageWidth/5.88,
        borderRightWidth: imageWidth/13.72,
        borderBottomWidth: imageHeight/13.694,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: logo_color,
    },
    
})