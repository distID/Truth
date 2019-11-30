import React from 'react';
import {View, Text, TouchableOpacity, Image, FlatList, ScrollView, KeyboardAvoidingView} from 'react-native';
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

    }
  }
  static navigationOptions={
    header: null  
  }
  render(){ 
    return(
      <View style={styles.parent}>
        <LinearGradient 
            start={{x: 1, y: 0}} end={{x: 0.65, y: 0.35}}
            locations={[0.1, 0.6]}
            colors={['#103090', '#101010']}
            style={styles.linearGradient}>
            <View style={{flex: 1, flexDirection: 'row'}}>
        	    <View style={{flex: 1, marginLeft: '5%', marginTop: '4%', marginRight: '4%', marginBottom: '3%'}}>
            	    <Text style={{color: 'white', fontSize: 30, fontFamily: 'Montserrat-Bold'}}>La Fest</Text>
            	</View>
            <TouchableOpacity style={{marginRight: '3%', marginTop: '4%'}} onPress={() => {this.props.navigation.navigate('Info')}}>
            	<Icon3 name="buysellads" size={40}/>
            </TouchableOpacity>
           </View>
          <View style={{flex: 2.3, marginLeft: '4%'}}>
          	<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          		<View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', height: '100%', width: 740}}>
		            <TouchableOpacity style= {styles.logoView} onPress={() => {this.props.navigation.navigate('La_13')}}>
		              <View style={styles.logoContainer}>
		                <Image
		                  style={styles.logo}
		                  source={require('../assets/2013.jpg')}
		                  resizeMode="contain"
		                ></Image>
		              </View>
		              <Text style={styles.year}>La Fest 2013</Text>
		              <Text style={styles.tagline}>Our Plot.{"\n"}Your Story</Text>
		            </TouchableOpacity>
		            <TouchableOpacity style={styles.logoView} onPress={() => {this.props.navigation.navigate('La_14')}}>
		              <View style={styles.logoContainer}>
		                <Image
		                  style={styles.logo}
		                  source={require('../assets/2014.jpeg')}
		                  resizeMode="contain"
		                ></Image>
		              </View>
		              <Text style={styles.year}>La Fest 2014</Text>
		              <Text style={styles.tagline}>A Million Stars{"\n"}One Supernova</Text>
		            </TouchableOpacity>
		            <TouchableOpacity style= {styles.logoView} onPress={() => {this.props.navigation.navigate('La_15')}}>
		              <View style={styles.logoContainer}>
		                <Image
		                  style={styles.logo}
		                  source={require('../assets/2015.jpg')}
		                  resizeMode="contain"
		                ></Image>
		              </View>
		              <Text style={styles.year}>La Fest 2015</Text>
		              <Text style={styles.tagline}>Behold the 20th{"\n"}Dimension of Elysium</Text>
		            </TouchableOpacity>
		            <TouchableOpacity style={styles.logoView, {marginRight: '3%'}} onPress={() => {this.props.navigation.navigate('La_16')}}>
		              <View style={styles.logoContainer}>
		                <Image
		                  style={styles.logo}
		                  source={require('../assets/2016.jpg')}
		                  resizeMode="contain"
		                ></Image>
		              </View>
		              <Text style={styles.year}>La Fest 2016</Text>
		              <Text style={styles.tagline}>2 Decades of Legacy{"\n"}1 Day for Legends</Text>
		            </TouchableOpacity>
		          </View>
		        </ScrollView>
		      </View>
        	<View style={{flex: 2.4, flexDirection: 'row', marginTop: '8%', alignSelf: 'center'}}>
            <TouchableOpacity style={styles.logoView} onPress={() => {this.props.navigation.navigate('La_17')}}>
              <View style={styles.logoContainer}>
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
          <View style={{flex: 0.5}}/>
        </LinearGradient> 
      </View>
    );
  }
}
