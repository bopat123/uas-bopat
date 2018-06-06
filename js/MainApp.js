import React, { Component } from 'react';
import { Alert, Button, Text, View, Image, StyleSheet, TextInput, ActivityIndicator, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-ionicons'; // Version can be specified in package.json
//import { Ionicons } from '@expo/vector-icons';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json

import BokingScreen from './Boking'; //memanggil file HomeScreen
import DetailScreen from './Detail'; //memanggil file DataScreen
import LoginScreen from './Login'; //memanggil file DataScreen
import InfoScreen from './InfoTempat'; //memanggil file DataScreen
import DaftarScreen from './Daftar';
import tambah from './tambah'; //memanggil file DataScreen
import InfoMain from './Info/InfoMain';
import DetailTempatScreen from './DetailTempat';
import kembali from './kembali';
import pinjamScreen from './pinjam';
import editScreen from './edittempat';

export default class MainApp extends React.Component {
  static navigationOptions = {

    header: null
  }
  render() {
    return (
      <AppRouter /> //memanggil TabNavigator Screen
    );
  }
}

const InfoMainStack = StackNavigator({
  InfoMain: { screen: InfoMain },
  }, {
    navigationOptions: {
      header: null,
    }
});

const kembaliStack = StackNavigator({
  kembali: { screen: kembali },
  }, {
    navigationOptions: {
      header: null,
    }
});

const LoginStack = StackNavigator({
  Login: { screen: LoginScreen },
  }, {
    navigationOptions: {
      header: null,
    }
});

const DetailTempatStack = StackNavigator({
  DetailTempat: { screen: DetailTempatScreen },
  }, {
    navigationOptions: {
      header: null,
    }
});

const pinjamStack = StackNavigator({
  pinjam: { screen: pinjamScreen },
  }, {
    navigationOptions: {
      header: null,
    }
});

const BokingStack = StackNavigator({
  Boking: { screen: BokingScreen }//memanggil class HomeScreen yang ada di file HomeScreen 
});

const DaftarStack = StackNavigator({
  Daftar: { screen: DaftarScreen },
   },{
    navigationOptions: {
      header: null,
    }
  //memanggil class HomeScreen yang ada di file HomeScreen 
});

const DetailStack = StackNavigator({
  Detail: { screen: DetailScreen },
  }, {
    navigationOptions: {
      header: null,
    } //memanggil class DataScreen yang ada di file DataScreen
  //Flat: { screen: FlatList },
});

const editStack = StackNavigator({
  edit: { screen: editScreen },
  }, {
    navigationOptions: {
      header: null,
    } //memanggil class DataScreen yang ada di file DataScreen
  //Flat: { screen: FlatList },
});



const InfoStack = StackNavigator({
  Info: { screen: InfoScreen },
    }, {
    navigationOptions: {
      header: null,
    }//memanggil class HomeScreen yang ada di file HomeScreen 
});

const tambahStack = StackNavigator({
  tambah: { screen: tambah },
    }, {
    navigationOptions: {
      header: false,
    }//memanggil class HomeScreen yang ada di file HomeScreen 
});

const Screen =  TabNavigator(
  {
    Info: { screen: InfoStack },
    Detail: { screen: DetailStack },
    
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Detail') {
          iconName = `ios-paper${focused ? '' : '-outline'}`;
          iconName='ios-paper-outline';
        } else if (routeName === 'Boking') {
          iconName = `ios-create${focused ? '' : '-outline'}`;
        } else if (routeName === 'Info') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#2196F3',
      inactiveTintColor: 'gray',
    },
    animationEnabled: false,
    swipeEnabled: true,
  }
);
export const AppRouter = StackNavigator(
  {
    
    Login: { screen: LoginStack },
    edit : {screen: editStack}, 
    kembali : {screen: kembaliStack},
    pinjam : {screen: pinjamStack},
    Daftar: { screen: DaftarStack },
    tambah: {screen:tambahStack},
    DetailTempat: {screen: DetailTempatStack},
    Tabs: { screen: Screen },
  },
  {
    navigationOptions: 
    {
      header: null,
      gesturesEnabled: false
    }
  }
);
