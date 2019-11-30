import React from 'react';
import {View, Text, TouchableOpacity, Image, FlatList, Linking} from 'react-native';
import {setCustomText} from 'react-native-global-props';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from './selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig);
const promo = 'https://www.youtube.com/watch?v=Fy5SjT0Wcko';
const laFest = 'https://www.youtube.com/watch?v=xP6XsWhYiS4';

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
          start={{x: 0, y: 0}} end={{x: 0, y: 0.64}}
          locations={[0.15, 1]}
          colors={['#105090', '#101010']} 
          style={styles.linearGradient}>
          <View style={{flex: 1.5, marginLeft: '5%', marginTop: '4%', marginRight: '5%', marginBottom: '3%'}}>
            <Text style={{color: 'white', fontSize: 25, fontFamily: 'Montserrat-Bold'}}>2015</Text>
          </View>
          <View style={{flex: 8, flexDirection: 'row', alignSelf: 'center', position: 'relative'}}>
            <Icon name="La_2015_SVG" size={350}/>
          </View> 
          <View style={{flex: 2.5, alignSelf: 'center'}}>
            <Text style={{fontSize: 15, color: '#909090', fontFamily: 'Montserrat-Bold'}}>The 20th Dimension of Elysium</Text>
          </View>
          <View style={{flex: 2, flexDirection: 'row'}}>
            <TouchableOpacity style={styles.link} onPress={() => {Linking.openURL('https://www.youtube.com/watch?v=Fy5SjT0Wcko')}}>
              <Text style={{fontSize: 15, textAlign: 'center', color: '#FFFFFF', fontFamily: 'Montserrat-Medium'}}>Promo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.link} onPress={() => {Linking.openURL('https://www.youtube.com/watch?v=xP6XsWhYiS4')}}>
              <Text style={{fontSize: 15, textAlign: 'center', color: '#FFFFFF', fontFamily: 'Montserrat-Medium'}}>LOSB</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 3}}/>
        </LinearGradient>
      </View>
    );
  }
}
