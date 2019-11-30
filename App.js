import React from 'react';
import { View, Text,Button } from 'react-native';
import { createAppContainer, createSwitchNavigator  } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { createDrawerNavigator } from 'react-navigation-drawer';
import Home from './app/components/Home';
import Logo2013 from './app/components/La_Fest_2013';
import Logo2014 from './app/components/La_Fest_2014';
import Logo2015 from './app/components/La_Fest_2015';
import Logo2016 from './app/components/La_Fest_2016';
import Logo2017 from './app/components/La_Fest_2017';
import Info from './app/components/Info';

const HomeStack = createStackNavigator(
  {
    Home: Home,
  }
);

const Logo2013Stack = createStackNavigator(
  {
    Logo2013: Logo2013,
  }
);

const Logo2014Stack = createStackNavigator(
  {
    Logo2014: Logo2014,
  }
);

const Logo2015Stack = createStackNavigator(
  {
    Logo2015: Logo2015,
  }
);

const Logo2016Stack = createStackNavigator(
  {
    Logo2016: Logo2016,
  }
);

const Logo2017Stack = createStackNavigator(
  {
    Logo2017: Logo2017,
  }
);

const InfoStack = createStackNavigator(
  {
    Info: Info,
  }
);

const UserTabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions:{  
      tabBarOptions : {
        activeTintColor: '#F0F0F0',
        style: {
          backgroundColor: '#101010',
          height: 55,
        }
      }, 
      tabBarLabel:'Home',  
      tabBarIcon:({tintColor})=>(  
          <Icon name="ios-home" color={tintColor} size={25}/>  
      )  
    }  
  },
},
{
  initialRouteName: 'Home'
})

UserTabNavigator.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];

  // You can do whatever you like here to pick the title based on the route name
  const headerTitle = routeName;

  return {
    headerTitle,
    header: null
  };
};

const UserAppNavigator = createStackNavigator({
  Home: Home,
  La_13: Logo2013,
  La_14: Logo2014,
  La_15: Logo2015,
  La_16: Logo2016,
  La_17: Logo2017,
  Info: Info,
})

export default createAppContainer(createSwitchNavigator(
  {
    UserMain: { screen: UserAppNavigator },
  },
  {
    initialRouteName: 'UserMain',
  }
),

);