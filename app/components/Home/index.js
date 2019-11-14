import React from 'react';
import {View, Text, TouchableOpacity, Image, FlatList, KeyboardAvoidingView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import {setCustomText} from 'react-native-global-props';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles'

export default class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      data : [{year: '2013', tagline: 'Our Plot. Your Story.', navigate: 'La_13', color: '#97FFFF', image: '2013.jpg'}, 
              {year: '2017', tagline: 'The Show Must Go On.', navigate: 'La_17', color: '#FFFFFF', image: '2017.png'}]
    }
  }
  static navigationOptions={
    header: null  
  }
  render(){ 
    return(
      <View style={styles.parent}>
        <LinearGradient 
          start={{x: 1, y: 0}} end={{x: 0, y: 1}}
          locations={[0.1, 0.6]}
          colors={['#101038', '#101010']} 
          style={styles.linearGradient}>
          <View style={{flex: 1, marginLeft: '5%', marginTop: '4%', marginRight: '5%', marginBottom: '3%'}}>
            <Text style={{color: 'white', fontSize: 25, fontFamily: 'Montserrat-Bold'}}>La Fest</Text>
          </View>
          <View style={{flex: 2, flexDirection: 'row', marginTop: '-60%'}}>
            <TouchableOpacity style= {styles.logoView} onPress={() => {this.props.navigation.navigate('La_13')}}>
              <View style={styles.logoView}>
                <Image
                  style={styles.logo}
                  source={require('../assets/2013.jpg')}
                  resizeMode="contain"
                ></Image>
              </View>
              <Text style={styles.year}>La Fest 2013</Text>
              <Text style={styles.tagline}>Our Plot. Your Story</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.logoView} onPress={() => {this.props.navigation.navigate('La_17')}}>
              <View style={styles.logoView}>
                <Image
                  style={styles.logo}
                  source={require('../assets/2017.png')}
                  resizeMode="contain"
                ></Image>
              </View>
              <Text style={styles.year}>La Fest 2017</Text>
              <Text style={styles.tagline}>The Show Must Go On</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1}}/> 
        </LinearGradient> 
      </View>
    );
  }
}
