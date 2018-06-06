import React, { Component } from 'react';
import { Alert, Button, Text, View, Image, StyleSheet, TextInput, ActivityIndicator, TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'; 


//Home Screen




export default class DaftarScreen extends React.Component {
  render() {
    return (
    <View style={styles.containerMain}>

      <View style={styles.box1}>
          <Text style={{ textAlign: 'center', padding: 30, color: '#E3F2FD',fontWeight: 'bold'}} >PENDIDIKAN TEKNIK INFORMATIKA </Text>
      </View>
      <View style={styles.box2}>
          <Text style={{ textAlign: 'center', padding: 30, fontSize: 20 }}>Slider </Text>
      </View>
      <View style={styles.box3}>
        <View style={styles.button}><Text>1</Text></View>
        <View style={styles.button}><Text>2</Text></View>
        <View style={styles.button}><Text>3</Text></View>
        <View style={styles.button}><Text>4</Text></View>
      </View>
      <View style={styles.box4}>
        <View style={styles.button}><Text>5</Text></View>
        <View style={styles.button}><Text>6</Text></View>
        <View style={styles.button}><Text>7</Text></View>
        <View style={styles.button}><Text>8</Text></View>
      </View>
      <View style={styles.box6}>
        <View style={styles.button}><Text>9</Text></View>
        <View style={styles.button}><Text>10</Text></View>
        <View style={styles.button}><Text>11</Text></View>
        <View style={styles.button}><Text>12</Text></View>
      </View>
      <View style={styles.box5}>
          <Text style={{ textAlign: 'center', padding: 30, fontSize: 20 }}>#JaenKuliahdiPTI </Text>
      </View>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#0D47A1',
    flex: 1,
    flexDirection: 'column'
  },
  box1: {
    flex: 0.5,
    backgroundColor: '#0D47A1',

  },
  box2: {
    flex: 1,
    backgroundColor: '#42A5F5',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  box3: {
    flex: 1,
    backgroundColor: '#2979FF',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  box4: {
    flex: 1,
    backgroundColor: '#2979FF',
    //marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  box6: {
    flex: 1,
    backgroundColor: '#2979FF',
    //marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  box5: {
    flex: 0.7,
    backgroundColor: '#42A5F5',
    margin: 10
  },
  button: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6EE9C'
  }
});
