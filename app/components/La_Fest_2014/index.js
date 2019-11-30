import React from 'react';
import {View, Text, TouchableOpacity, Image, FlatList, Linking} from 'react-native';
import {setCustomText} from 'react-native-global-props';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from './selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig);
const promo = 'https://www.youtube.com/watch?v=2o0EVPcEFHc';
const laFest = 'https://www.youtube.com/watch?v=AKX7St8GbUI';
const happy = 'https://www.youtube.com/watch?v=SWQSywJvzgU';

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
          start={{x: 0, y: 0}} end={{x: 0, y: 0.6}}
          locations={[0.15, 1]}
          colors={['#601010', '#101010']} 
          style={styles.linearGradient}>
          <View style={{flex: 3, marginLeft: '5%', marginTop: '4%', marginRight: '5%', marginBottom: '3%'}}>
            <Text style={{color: 'white', fontSize: 25, fontFamily: 'Montserrat-Bold'}}>2014</Text>
          </View>
          <View style={{flex: 8, flexDirection: 'row', alignSelf: 'center', position: 'relative', marginTop: '-8%'}}>
            <Icon name="La_2014_SVG" size={280} color="#000000"/>
          </View> 
          <View style={{flex: 2.5, alignSelf: 'center', marginTop: '10%'}}>
            <Text style={{fontSize: 15, color: '#909090', fontFamily: 'Montserrat-Bold', textAlign: 'center'}}>A Million Stars</Text>
            <Text style={{fontSize: 15, color: '#909090', fontFamily: 'Montserrat-Bold', textAlign: 'center'}}>One Supernova</Text>
          </View>
          <View style={{flex: 2, flexDirection: 'row'}}>
            <TouchableOpacity style={styles.link} onPress={() => {Linking.openURL('https://www.youtube.com/watch?v=2o0EVPcEFHc')}}>
              <Text style={{fontSize: 15, textAlign: 'center', color: '#FFFFFF', fontFamily: 'Montserrat-Medium'}}>Promo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.link} onPress={() => {Linking.openURL('https://www.youtube.com/watch?v=AKX7St8GbUI')}}>
              <Text style={{fontSize: 15, textAlign: 'center', color: '#FFFFFF', fontFamily: 'Montserrat-Medium'}}>LOSB</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 2, marginBottom: '-5%', marginTop: '5%', marginLeft: '25%', width: '100%'}}>
            <TouchableOpacity style={styles.link} onPress={() => {Linking.openURL('https://www.youtube.com/watch?v=SWQSywJvzgU')}}>
              <Text style={{fontSize: 15, textAlign: 'center', color: '#FFFFFF', fontFamily: 'Montserrat-Medium'}}>Happy</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 3}}/>
        </LinearGradient>
      </View>
    );
  }
}
