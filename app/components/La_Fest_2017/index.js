import React from 'react';
import {View, Text, TouchableOpacity, Image, FlatList, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import {setCustomText} from 'react-native-global-props';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
const promo = 'https://www.youtube.com/watch?v=XGeMK-bwcbQ&t=607s';
const laFest = 'https://www.youtube.com/watch?v=6enhjG3YOmk';

export default class La2017 extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }
  static navigationOptions={
    header: null  
  }
  render(){ 
    return(
      <View style={styles.parent}>
        <LinearGradient 
          start={{x: 0, y: 0}} end={{x: 0, y: 1}}
          locations={[0.15, 1]}
          colors={['#303030', '#101010']} 
          style={styles.linearGradient}>
          <View style={{flex: 1, marginLeft: '5%', marginTop: '4%', marginRight: '5%', marginBottom: '3%'}}>
            <Text style={{color: 'white', fontSize: 25, fontFamily: 'Montserrat-Bold'}}>2017</Text>
          </View>
          <View style={{flex: 3.5, flexDirection: 'row', alignSelf: 'center', position: 'relative'}}>
            <View style={styles.triangleOnePartOne}/>
            <View style={styles.triangleOnePartTwo}/>
            <View style={styles.blockOneTriangle}/>
            <View style={styles.blockOne}/>
            <View style={styles.triangleTwoPartOne}/>
            <View style={styles.triangleTwoPartTwo}/>
            <View style={styles.triangleThree}/>
            <View style={styles.blockTwoTriangleOne}/>
            <View style={styles.blockTwo}/>
            <View style={styles.blockTwoTriangleTwo}/>
            <View style={styles.triangleFour}/>
            <View style={styles.blockThreeTriangleOne}/>
            <View style={styles.blockThree}/>
            <View style={styles.blockThreeTriangleTwo}/>
            <View style={styles.triangleFivePartOne}/>
            <View style={styles.triangleFivePartTwo}/>
            <View style={styles.blockFour}/>
            <View style={styles.blockFourTriangle}/>
            <View style={styles.triangleSixPartOne}/>
            <View style={styles.triangleSixPartTwo}/>
          </View> 
          <View style={{flex: 1, alignSelf: 'center'}}>
            <Text style={{fontSize: 15, color: '#909090', fontFamily: 'Montserrat-Bold'}}>The Show Must Go On</Text>
          </View>
          <View style={{flex: 2, flexDirection: 'row'}}>
            <TouchableOpacity style={{flex: 1}} onPress={() => {Linking.openURL('https://www.youtube.com/watch?v=XGeMK-bwcbQ&t=607s')}}>
              <Text style={{fontSize: 15, textAlign: 'center', color: '#D0D0D0', fontFamily: 'Montserrat-Bold', marginTop: '2%'}}>Promo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1}} onPress={() => {Linking.openURL('https://www.youtube.com/watch?v=6enhjG3YOmk')}}>
              <Text style={{fontSize: 15, textAlign: 'center', color: '#D0D0D0', fontFamily: 'Montserrat-Bold', marginTop: '2%'}}>Tribute</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    );
  }
}
