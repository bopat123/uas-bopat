import React, { Component } from 'react';
import { Alert, Button, Text, View, Image, StyleSheet, TextInput, ActivityIndicator, TouchableOpacity } from 'react-native';
//import { Ionicons } from '@expo/vector-icons'; // Version can be specified in package.json
import Ionicons from 'react-native-ionicons';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json

import Info1Screen from './info1'; //memanggil file DataScreen
import Info2Screen from './info2'; //memanggil file DataScreen
import Info3Screen from './info3';
//import Multimedia from './Multimedia'; //memanggil file DataScreen

export default class InfoMain extends React.Component {
  static navigationOptions = {

    header: null
  }
  render() {
    return (
      <InfovRouter /> //memanggil TabNavigator Screen
    );
  }
}

const Info1Stack = StackNavigator({
  Info1: { screen: Info1Screen },
  }, {
    navigationOptions: {
      header: false,
    }
});

const Info2Stack = StackNavigator({
  Info2: { screen: Info2Screen },
   },{
    navigationOptions: {
      header: false,
    }
  //memanggil class HomeScreen yang ada di file HomeScreen 
});

const Info3Stack = StackNavigator({
  Info3: { screen: Info3Screen },
  }, {
    navigationOptions: {
      header: false,
    } //memanggil class DataScreen yang ada di file DataScreen
  //Flat: { screen: FlatList },
});

const Screen1 =  TabNavigator(
  {
    Info1: { screen: Info1Stack },
    Info2: { screen: Info2Stack },
    Info3: { screen: Info3Stack },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Info1') {
          iconName = `ios-paper${focused ? '' : '-outline'}`;
        } else if (routeName === 'Info2') {
          iconName = `ios-create${focused ? '' : '-outline'}`;
        } else if (routeName === 'Info3') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },

    }),
    
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#2196F3',
      inactiveTintColor: 'gray',
    },
    animationEnabled: true,
    swipeEnabled: true,
  }
);
export const InfovRouter = StackNavigator(
  {
    Tabs: { screen: Screen1 },
  },
  {
    navigationOptions: 
    {
      header: false,
      gesturesEnabled: false
    }
  }
);
