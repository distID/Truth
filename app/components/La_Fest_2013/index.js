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
          start={{x: 0, y: 0}} end={{x: 0, y: 1}}
          locations={[0.1, 0.9]}
          colors={['#101040', '#101010']} 
          style={styles.linearGradient}>
          <View style={{flex: 1, marginLeft: '5%', marginTop: '4%', marginRight: '5%', marginBottom: '3%'}}>
            <Text style={{color: 'white', fontSize: 25, fontFamily: 'Montserrat-Bold'}}>2013</Text>
          </View>
          <View style={{flex: 3.5, flexDirection: 'row', alignSelf: 'center', position: 'relative'}}>
            <View style={styles.rectangle}/>
            <View style={styles.triangle}/>
            <View style={styles.triangleOne}/>
            <View style={styles.triangleTwo}/>
          </View> 
          <View style={{flex: 1, alignSelf: 'center'}}>
            <Text style={{fontSize: 15, color: '#909090', fontFamily: 'Montserrat-Bold'}}>Our Plot. Your Story.</Text>
          </View>
          <View style={{flex: 2, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <Text style={{fontSize: 15, textAlign: 'center', color: '#FFFFFF', fontFamily: 'Montserrat-Bold', marginTop: '2%'}} onPress={() => {Linking.openURL('https://www.youtube.com/watch?v=VxRxgMPTLrM')}}>Promo</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{fontSize: 15, textAlign: 'center', color: '#FFFFFF', fontFamily: 'Montserrat-Bold', marginTop: '2%'}} onPress={() => {Linking.openURL('https://www.youtube.com/watch?v=lsX8cd3xS6c')}}>LOSB</Text>
            </View>
          </View>
        </LinearGradient>
      </View>
    );
  }
}
