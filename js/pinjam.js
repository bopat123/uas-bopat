import React, { Component } from 'react';
import { RefreshControl, Button, Text, View, Image, StyleSheet, TextInput, ActivityIndicator,Alert, TouchableOpacity, FlatList, List, ListItem } from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json
import Ionicons from 'react-native-ionicons';
import {Form,Textarea} from 'native-base';


//Data Screen
class LogoTitle extends React.Component {
  render() {
    return (
      <View style={{ alignItems:'center', justifyContent: 'center', flex: 0.1, backgroundColor: 'white' }}>
        <Text>Pinjam </Text>
      </View>

    );
  }
}

export default class pinjam extends React.Component {
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
          nama: '',
          nim: '',
          instansi: '',
          telp: '',
          namaTem: '',
          Code: '',
          tgl_pinjam: '',
          tgl_kembali: '',
          statuspinjam: '',
      ActivityIndicator_Loading: false, 
    };
}

  componentDidMount()  {
    const {navigation} = this.props;
    const id = navigation.getParam('id','NO-ID')
    this.setState({ ActivityIndicator_Loading : true }, () =>
    {
        this.setState({refreshing: true});
        const url = 'http://budi.wahanawar.com/detailTempat.php?id='+id;
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
            Code : responseJson[0].Code,
            namaTem : responseJson[0].namaTem,



          });
        }
      );
    });
  }
  _keyExtractor = (item, index) => item.Code;

  Insert_Data_Into_MySQL = () =>
    {
        this.setState({ ActivityIndicator_Loading : true }, () =>
        {
            fetch('http://budi.wahanawar.com/sentData.php',
            {
                method: 'POST',
                headers: 
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                {
                  nama : this.state.nama,
                  nim : this.state.nim,
                  instansi : this.state.instansi,
                  telp : this.state.telp,
                  namaTem : this.state.namaTem,
                  Code : this.state.Code,
                  tgl_pinjam : this.state.tgl_pinjam,
                  tgl_kembali : this.state.tgl_kembali,
                  statuspinjam : this.state.statuspinjam,
                  
                })
 
            }).then((response) => response.json()).then((responseJsonFromServer) =>
            {
                alert(responseJsonFromServer);
                this.state = ({
                      loading: false,
                      data: [],
                      error: null,
                      refreshing: false,
                          nama: '',
                          nim: '',
                          instansi: '',
                          telp: '',
                          namaTem: '',
                          Code: '',
                          tgl_pinjam: '',
                          tgl_kembali: '',
                          statuspinjam: '',
                      ActivityIndicator_Loading: false, 
                    });
                this.setState({ ActivityIndicator_Loading : false });
                this.props.navigation.navigate('Detail');
            }).catch((error) =>
            {
                console.error(error);
                this.setState({ ActivityIndicator_Loading : false});
            });
        });
    }

    
  render() {
    return (
<View style={ styles.MainContainer }>

        <FlatList
          data={this.state.data}
          keyExtractor={this._keyExtractor}
          renderItem={({item}) =>
          <View style={{marginBottom: 10}}>
                <View style={styles.ImageStyle}>           
                  <Image
                        source={require('./img/undiksha.png')}//image
                        style={{width: 58, height: 58, alignItems: 'center' }}
                      />
                </View>


            <View style={styles.BoxClass}>


                <View style={{justifyContent:'center',alignItems: 'center', marginLeft:8, width:'95%'}}>

                <View style={{justifyContent:'center',alignItems: 'center', marginLeft:8, marginRight: 8,marginBottom:10, height: 50,width:'100%', borderColor: 'blue',borderWidth: 1 , backgroundColor: 'white'}}>
                  
                  <TextInput 
                  placeholder = "Nama"
                  style={{height:35, margin:8,width:'100%', alignItems:'center'}}
                  returnKeyType="next"
                  autoCapitalize="words"
                  ref={(input) => this.namaInput = input}
                  onSubmitEditing={() => this.namaInput.focus()}
                  onChangeText = {(TextInputText) => this.setState({ nama: TextInputText })}

                  />
                </View>

                <View style={{justifyContent:'center',alignItems: 'center', marginLeft:8, marginRight: 8,marginBottom:10, height: 50,width:'100%', borderColor: 'blue',borderWidth: 1 , backgroundColor: 'white'}}>
                  <TextInput 
                  placeholder = "NIM"
                  style={{height:35, margin:8,width:'100%', alignItems:'center'}}
                  returnKeyType="next"
                  autoCapitalize="numeric"
                  ref={(input) => this.nimInput = input}
                  onSubmitEditing={() => this.nimInput.focus()}
                  onChangeText = {(TextInputText) => this.setState({ nim: TextInputText })}

                  />
                </View>


                <View style={{justifyContent:'center',alignItems: 'center', marginLeft:8, marginRight: 8,marginBottom:10, height: 50,width:'100%', borderColor: 'blue',borderWidth: 1 , backgroundColor: 'white'}}>
                  
                  <TextInput 
                  placeholder = "Instansi"
                  style={{height:35, margin:8,width:'100%', alignItems:'center'}}
                  returnKeyType="next"
                  keyboardType="words"
                  ref={(input) => this.instansiInput = input}
                  onSubmitEditing={() => this.telpInput.focus()}
                  onChangeText = {(TextInputText) => this.setState({ instansi: TextInputText })} 
                  />

                </View>

                <View style={{justifyContent:'center',alignItems: 'center', marginLeft:8, marginRight: 8,marginBottom:10, height: 50,width:'100%', borderColor: 'blue',borderWidth: 1 , backgroundColor: 'white'}}>
                  <TextInput 
                  placeholder = "Nomor Telepon"
                  style={{height:35, margin:8,width:'100%', alignItems:'center'}}
                  returnKeyType="next"
                  keyboardType="numeric"
                  ref={(input) => this.telpInput = input}
                  onSubmitEditing={() => this.CodeInput.focus()}
                  onChangeText = {(TextInputText) => this.setState({ telp: TextInputText })} 
                  />
                </View>

                <View style={{justifyContent:'center',alignItems: 'center', marginLeft:8, marginRight: 8,marginBottom:10, height: 50,width:'100%', borderColor: 'blue',borderWidth: 1 , backgroundColor: 'white'}}>
                  
                  <TextInput 
                  style={{height:35, margin:8,width:'100%', alignItems:'center'}}
                  returnKeyType="next"
                  keyboardType="numeric"
                  defaultValue={this.state.namaTem}
                  keyboardType="words"
                  ref={(input) => this.namaTemInput = input}
                  onSubmitEditing={() => this.telpInput.focus()}
                  onChangeText = {(TextInputText) => this.setState({ namaTem: TextInputText })} 
                  />

                </View>

                <View style={{justifyContent:'center',alignItems: 'center', marginLeft:8, marginRight: 8,marginBottom:10, height: 50,width:'100%', borderColor: 'blue',borderWidth: 1 , backgroundColor: 'white'}}>
                  
                  <TextInput 
                  style={{height:35, margin:8,width:'100%', alignItems:'center'}}
                  returnKeyType="next"
                  keyboardType="numeric"
                  defaultValue={this.state.Code}
                  ref={(input) => this.CodeInput = input}
                  onChangeText = {(input) => this.setState({ Code: input })}

                  />

                </View>
                

               <View style={{justifyContent:'center',alignItems: 'center', marginLeft:8, marginRight: 8,marginBottom:10, height: 50,width:'100%', borderColor: 'blue',borderWidth: 1 , backgroundColor: 'white'}}>
                  <TextInput 
                  placeholder = "Tanggal Pinjam"
                  style={{height:35, margin:8,width:'100%', alignItems:'center'}}
                  returnKeyType="next"
                  keyboardType="numeric"
                  ref={(input) => this.tgl_pinjamInput = input}
                  onSubmitEditing={() => this.tgl_kembaliInput.focus()}
                  onChangeText = {(TextInputText) => this.setState({ tgl_pinjam: TextInputText })}

                  />
                </View> 

                <View style={{justifyContent:'center',alignItems: 'center', marginLeft:8, marginRight: 8,marginBottom:10, height: 50,width:'100%', borderColor: 'blue',borderWidth: 1 , backgroundColor: 'white'}}>
                  <TextInput 
                  placeholder = "Tanggal Kembali"
                  style={{height:35, margin:8,width:'100%', alignItems:'center'}}
                  returnKeyType="next"
                  keyboardType="numeric"
                  ref={(input) => this.tgl_kembaliInput = input}
                  onChangeText = {(TextInputText) => this.setState({ tgl_kembali: TextInputText })}

                  />
                </View>

                <View style={{justifyContent:'center',alignItems: 'center', marginLeft:8, marginRight: 8,marginBottom:10, height: 50,width:'100%', borderColor: 'blue',borderWidth: 1 , backgroundColor: 'white'}}>
                  <TextInput 
                  placeholder = "Status"
                  style={{height:35, margin:8,width:'100%', alignItems:'center'}}
                  returnKeyType="next"
                  keyboardType="words"
                  ref={(input) => this.statuspinjamInput = input}
                  onChangeText = {(TextInputText) => this.setState({ statuspinjam: TextInputText })}

                  />
                </View>

                
                </View>



                

            </View>
                <View style={{justifyContent: 'center',width:'100%', alignItems: 'center', flexDirection:'row', backgroundColor: '#1976D2', borderColor:'blue', borderWidth: 1}}>
                    <TouchableOpacity 
                      activeOpacity = { 0.5 }
                      style = { styles.TouchableOpacityStyle4 } 
                      onPress = { this.Insert_Data_Into_MySQL }>
                       <Text style = { styles.TextStyle }>Pinjam</Text>
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
      flex: 0,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 3,
      paddingBottom: 10,

    },
 
   

    BoxClass:
    {
      
      flex: 1,
      flexDirection: 'row',
      height: '100%',
      backgroundColor : "#BBDEFB",
      borderWidth: 1,
      borderColor: '#2196F3',
      
      paddingTop: 5,
      paddingBottom: 5
    },
    ImageStyle:
    {
      height: 200,
      justifyContent: 'center',
      borderColor:'#2196F3', 
      borderWidth:1

    },
    TextDetail:
      {
      height: 200,
      borderColor:'#2196F3', 
      borderWidth:1

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
    },
    TouchableOpacityStyle2:
   {
      position: 'absolute',
      zIndex: 11,
      right: 20,
      bottom: 90,
      backgroundColor: 'blue',
      width: 40,
      height: 40,
      borderRadius: 50, 
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 8,
 
    },
    TouchableOpacityStyle3:
   {
      
      backgroundColor:'#2196F3',
      width: '48%',
      height: 50,
      borderWidth: 7,
      borderColor: 'blue',
      justifyContent: 'center'
 
    },
    TouchableOpacityStyle4:
   {
      
      
      width: '100%',
      height: 50,
      borderColor: 'blue',
      justifyContent: 'center'
 
    },
 
 
    TextStyle:
    {
       color: '#fff',
        textAlign: 'center',
        fontSize: 18
    },
    TextInputStyleClass:
    {
      textAlign: 'center',
      height: 40,
      justifyContent:'center',
       marginLeft:8,
      backgroundColor : "#fff",
      borderWidth: 1,
      borderColor: '#2196F3',
      borderRadius: 7 ,
      width: 150
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
        fontSize: 10,
        color: '#2196F3'
    },
});