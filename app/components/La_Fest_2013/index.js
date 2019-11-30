import React from 'react';
import {View, Text, TouchableOpacity, Image, FlatList, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import {setCustomText} from 'react-native-global-props';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
const promo = 'https://www.youtube.com/watch?v=VxRxgMPTLrM';
const losb = 'https://www.youtube.com/watch?v=lsX8cd3xS6c';

export default class La2013 extends React.Component {
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
          start={{x: 0, y: 0}} end={{x: 0, y: 0.65}}
          locations={[0.1, 0.9]}
          colors={['#104090', '#101010']} 
          style={styles.linearGradient}>
          <View style={{flex: 3, marginLeft: '5%', marginTop: '4%', marginRight: '5%', marginBottom: '3%'}}>
            <Text style={{color: 'white', fontSize: 25, fontFamily: 'Montserrat-Bold'}}>2013</Text>
          </View>
          <View style={{flex: 8, flexDirection: 'row', alignSelf: 'center', position: 'relative', transform: [{scaleX: 0.75}, {scaleY: 0.75}]}}>
            <View style={styles.rectangle}/>
            <View style={styles.triangle}/>
            <View style={styles.triangleOne}/>
            <View style={styles.triangleTwo}/>
          </View> 
          <View style={{flex: 2.5, alignSelf: 'center'}}>
            <Text style={{fontSize: 15, color: '#909090', fontFamily: 'Montserrat-Bold'}}>Our Plot. Your Story.</Text>
          </View>
          <View style={{flex: 2, flexDirection: 'row'}}>
            <TouchableOpacity style={styles.link} onPress={() => {Linking.openURL('https://www.youtube.com/watch?v=VxRxgMPTLrM')}}>
              <Text style={{fontSize: 15, textAlign: 'center', color: '#FFFFFF', fontFamily: 'Montserrat-Medium'}}>Promo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.link} onPress={() => {Linking.openURL('https://www.youtube.com/watch?v=lsX8cd3xS6c')}}>
              <Text style={{fontSize: 15, textAlign: 'center', color: '#FFFFFF', fontFamily: 'Montserrat-Medium'}}>LOSB</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 3}}/>
        </LinearGradient>
      </View>
    );
  }
}
