import React, { Component } from 'react';
import { Alert, Button, Text, View, Image, StyleSheet, TextInput, ActivityIndicator, TouchableOpacity,KeyboardAvoidingView } from 'react-native';
//import { Ionicons } from '@expo/vector-icons'; 
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'; 
import Ionicons from 'react-native-ionicons';


//Home Screen

class LogoTitle extends React.Component {
  render() {
    return (
      <View style={{ alignItems:'center', justifyContent: 'center' }}>
        <Text>
          
        </Text>
      </View>
    );
  }
}


class Info2Screen extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
  };
  
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style = { styles.MainContainer }>

               <View style={{ flex: 0.5, alignItems:'center', justifyContent: 'center', backgroundColor:'#BBDEFB'}} >
                 <Image
                    source={require('../img/undiksha.png')}//image
                    style={{width: 150, height: 150 }}
                  />
                 
               </View>

                <TextInput 
                  placeholder = "Username"
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  returnKeyType="next"
                  autoCapitalize="words"
                  onChangeText = {(TextInputText) => this.setState({ nim: TextInputText })} />

                <TextInput 
                  placeholder = "Gaspoll"
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  returnKeyType="next"
                  keyboardType="numeric"
                  onChangeText = {(TextInputText) => this.setState({ nama: TextInputText })} />

                
 
               
                <TouchableOpacity 
                  activeOpacity = { 0.5 }
                  style = { styles.TouchableOpacityStyle } 
                  onPress = { () => this.props.navigation.navigate("Tabs") }>

                    <Text style = { styles.TextStyle }>Login</Text>

                </TouchableOpacity>

                
                


                  
                
            </KeyboardAvoidingView> //penutup containerMain
     
      
    );
  }
}
export default Info2Screen;
backgroundColor: '#D50000'

const styles = StyleSheet.create(
{
    MainContainer:
    {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
       
      backgroundColor: '#BBDEFB'

    },
 
    TextInputStyleClass:
    {
      textAlign: 'center',
      height: 40,
      backgroundColor : "#fff",
      borderWidth: 1,
      borderColor: '#2196F3',
      borderRadius: 7 ,
      marginBottom: 10,
      width: '85%'
    },

    BoxClass:
    {
      alignItems: 'center',
      height: 40,
      backgroundColor : "#D50000",
      borderWidth: 1,
      borderColor: '#2196F3',
      borderRadius: 7 ,
      marginBottom: 10,
      width: '95%'
    },
 
    TouchableOpacityStyle:
   {
      paddingTop:10,
      paddingBottom:10,
      backgroundColor:'#2196F3',
      marginBottom: 20,
      width: '70%',
      borderRadius: 7 
 
    },
 
    TextStyle:
    {
       color: '#fff',
        textAlign: 'center',
        fontSize: 18
        
    },

    ActivityIndicatorStyle:{
      
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
    
  }, 
  Header: {
        paddingTop: 5,
        paddingBottom: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    TextHeader: {
        fontSize: 30,
        color: '#2196F3'
    },
});