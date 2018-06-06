import React, { Component } from 'react';
import { RefreshControl,Icon, Button, Text, View, Image, StyleSheet, TextInput, ActivityIndicator, TouchableOpacity, FlatList, List, ListItem } from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json
import Ionicons from 'react-native-ionicons';
class LogoTitle extends React.Component {
  render() {
    return (
      <View style={{ alignItems:'center', justifyContent: 'center', flex: 0.1, backgroundColor: 'white' }}>
        <Text>Daftar Pinjam</Text>
      </View>
    );
  }
}

export default class DetailScreen extends React.Component {
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
        const url = 'http://budi.wahanawar.com/getDataPinjam.php';
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
  _keyExtractor = (item, index) => item.nim;

  render() {
    return (
<View style={ styles.MainContainer }>
      
         {
          this.state.ActivityIndicator_Loading ? <ActivityIndicator color='#2196F3' size='large'style={styles.ActivityIndicatorStyle} /> : null        
          }
        <FlatList
          data={this.state.data}
          keyExtractor={this._keyExtractor}
          renderItem={({item}) =>
          <View>
            <View style={styles.BoxClass}>
            
              <Text>Nama : {item.nama}</Text>
              <Text>NIM : {item.nim}</Text>
              <Text>instansi : {item.instansi}</Text>
              <Text>No. Telepon : {item.telp}</Text>
              <Text>Nama Tempat : {item.namaTem}</Text>
              <Text>Code : {item.Code}</Text>
              <Text>Tgl. Peminjaman : {item.tgl_pinjam}</Text>
              <Text>Tgl. Pengembalian : {item.tgl_kembali}</Text>
              <Text>Status : {item.statuspinjam}</Text>
            </View>
            <View style={{justifyContent: 'center',width:'100%', alignItems: 'center', flexDirection:'row', backgroundColor: '#1976D2', borderColor:'blue', borderWidth: 1}}>
                    <TouchableOpacity 
                      activeOpacity = { 0.5 }
                      style = { styles.TouchableOpacityStyle4 } 
                      onPress = {() => this.props.navigation.navigate('kembali', {id: item.id_pinjam}) }>
                       <Text style = { styles.TextStyle }>Kembali</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
            
          }
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this.componentDidMount.bind(this)}
              />
            }
           /> 
        

        </View>   
      
    );
  }
}
const styles = StyleSheet.create(
{
    MainContainer:
    {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',

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
      height: 250,
      width: 350,
      backgroundColor : "#BBDEFB",
      borderWidth: 1,
      borderColor: '#2196F3',
      paddingTop: 5,
      marginTop: 10
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
    TouchableOpacityStyle4:
   {
      
      
      width: 340,
      height: 50,
      borderColor: 'blue',
      justifyContent: 'center',
      paddingBottom: 5,
      marginBottom: 10

 
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