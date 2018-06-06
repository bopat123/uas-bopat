import React, { Component } from 'react';
import { RefreshControl, Button, Text, View, Image, StyleSheet, TextInput, ActivityIndicator, TouchableOpacity, FlatList, List, ListItem } from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json
import Ionicons from 'react-native-ionicons';

//Data Screen
class LogoTitle extends React.Component {
  render() {
    return (
      <View style={{ alignItems:'center', justifyContent: 'center', flex: 0.1, backgroundColor: 'white' }}>
        <Text>Info Tempat </Text>
      </View>
    );
  }
}

export default class InfoScreen extends React.Component {
  static navigationOptions = {
    header: <LogoTitle />,
  };

constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      error: null,
      refreshing: false,
      ActivityIndicator_Loading: false, 
    };
}

  componentDidMount()  {
    this.setState({ ActivityIndicator_Loading : true }, () =>
    {
        this.setState({refreshing: true});
        const url = 'http://budi.wahanawar.com/getDataTempat.php';
       //this.setState({ loading: true });
        fetch (url)
        .then((response) => response.json())
        .then((responseJson) => {
          console.log("comp");
          console.log(responseJson);
          this.setState({
            data: responseJson,
            error: responseJson.error || null,
            loading: false,
            refreshing: false,
            ActivityIndicator_Loading: false, 

          });
        }
      );
    });
  }
  _keyExtractor = (item, index) => item.Code;

  render() {
    return (
   <View style={ styles.MainContainer }>

        <FlatList
          data={this.state.data}
          keyExtractor={this._keyExtractor}
          renderItem={({item}) =>
          <View style={{marginBottom: 10}}>
            <View style={styles.BoxClass}>
              
                <View style={{justifyContent: 'center',borderColor:'red', borderWidth:1, margin:8}}>           
                  <Image
                        source={require('./img/undiksha.png')}//image
                        style={{width: 58, height: 58, alignItems: 'center' }}
                      />
                </View>
                <View style={{justifyContent:'center', margin: 8}}>
                  <Text>Nama Tempat</Text>
                  <Text>Kode</Text>
                  <Text>status</Text> 
                </View>
                <View style={{ justifyContent:'center', margin: 8}}>
                  <Text>:</Text>
                  <Text>:</Text>
                  <Text>:</Text> 
                </View>
                <View style={{justifyContent:'center', margin: 8}}>
                  <Text>{item.namaTem}</Text>
                  <Text>{item.Code}</Text>
                  <Text>{item.status}</Text> 
                </View>
             </View>
            
              <TouchableOpacity 
                activeOpacity = { 0.5 }
                onPress = {() => this.props.navigation.navigate('DetailTempat', {id: item.Code}) }>
                <View style={{backgroundColor: '#1976D2', alignItems: 'center', height: 40, justifyContent: 'center'}}>
                 <Text style={{color: 'white'}}>Detail</Text> 
                </View>
              </TouchableOpacity>
              
            
          </View>
        }
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.componentDidMount.bind(this)}
          />
        }
        /> 

        <TouchableOpacity 
          activeOpacity = { 0.5 }
          style = { styles.TouchableOpacityStyle } 
           onPress = {() => this.props.navigation.navigate('tambah') }>
           <Text style = { styles.TextStyle }>+</Text>
        </TouchableOpacity>

                
        

   </View>   
      
    );
  }
}


const styles = StyleSheet.create(
{
    MainContainer:
    {
      flex: 0,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 3,
      paddingBottom: 10,

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
      width: '95%'
    },

    BoxClass:
    {
      alignItems: 'flex-start',
      flex: 1,
      flexDirection: 'row',
      height: 80,
      width: 350,
      backgroundColor : "#BBDEFB",
      borderWidth: 1,
      borderColor: '#2196F3',
      
      paddingTop: 5,
      paddingBottom: 5
    },
 
    TouchableOpacityStyle:
   {
      position: 'absolute',
      zIndex: 11,
      right: 20,
      bottom: 30,
      backgroundColor: 'blue',
      width: 40,
      height: 40,
      borderRadius: 50, 
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 8,
 
    },
    ViewStyle:
    {

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
        fontSize: 20,
        color: '#2196F3'
    },
});