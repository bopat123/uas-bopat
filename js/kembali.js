import React, { Component } from 'react';
import {  ScrollView, Alert, Button, Text, View, Image, StyleSheet, TextInput, ActivityIndicator, TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import Ionicons from 'react-native-ionicons';
import {Form, Textarea} from 'native-base';


//Home Screen

class LogoTitle extends React.Component {
  render() {
    return (
      <View style={{ alignItems:'center', justifyContent: 'center', flex: 1}}>
        <Text>tambah tempat</Text>
      </View>
    );
  }
}


class kembali extends Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
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
                          statuspinjam: 'dikembalikan',
          ActivityIndicator_Loading: false, 
    };
}

  componentDidMount()  {
    const {navigation} = this.props;
    const id = navigation.getParam('id','NO-ID')
    this.setState({ ActivityIndicator_Loading : true }, () =>
    {
        this.setState({refreshing: true});
        const url = 'http://budi.wahanawar.com/kembali.php?id='+id;
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
            nama:  responseJson[0].nama,
            instansi:  responseJson[0].instansi,
            namaTem:  responseJson[0].namaTem,
            Code : responseJson[0].Code,
            statuspinjam : responseJson[0].statuspinjam,
            penanggungjwb : responseJson[0].penanggungjwb,
            notelp : responseJson[0].notelp,
            tgl_pinjam: responseJson[0].tgl_pinjam,
            tgl_kembali: responseJson[0].tgl_kembali,
            nim: responseJson[0].nim,



          });
        }
      );
    });
  }
  _keyExtractor = (item, index) => item.id_kembali;

  Update = () =>
    {
        this.setState({ ActivityIndicator_Loading : true }, () =>
        {
            fetch('http://budi.wahanawar.com/status.php',
            {
                method: 'POST',
                headers: 
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                {
                  namaTem : this.state.namaTem,
                  Code: this.state.Code,
                  nama : this.state.nama,
                  biaya : this.state.biaya,
                  nim : this.state.nim,
                  penanggungjwb: this.state.penanggungjwb,
                  notelp : this.state.notelp,
                  statuspinjam : this.state.statuspinjam,
                  tgl_pinjam : this.state.tgl_pinjam,
                  tgl_kembali : this.state.tgl_kembali,
                  
                })
 
            }).then((response) => response.json()).then((responseJsonFromServer) =>
            {
                alert(responseJsonFromServer);
                this.setState({
                  loading: false,
                      data: [],
                      error: null,
                      refreshing: false,
                            namaTem: '',
                            Code: '',
                            detail: '',
                            biaya: '',
                            penanggungjwb:'',
                            notelp:'',
                            status:'',
                            nim: '',
                            ActivityIndicator_Loading: false, 
                        });
                this.setState({ ActivityIndicator_Loading : false });
                this.props.navigation.navigate('Info');
            }).catch((error) =>
            {
                console.error(error);
                this.setState({ ActivityIndicator_Loading : false});
            });
        });
    }

  render() {
    return (
      <View style={{height:'100%'}}>
              <View style={{ flex: 1, alignItems:'center', justifyContent: 'center', backgroundColor:'#BBDEFB'}} >
                 <Image
                    source={require('./img/undiksha.png')}//image
                    style={{width: 100, height: 100 }}
                  />
               </View>
      <ScrollView>
         <View style = { styles.MainContainer }>
          <View style={{height: 50}}></View>

               <TextInput 
                  placeholder = "Nama Tempat"
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  returnKeyType="next"
                  autoCapitalize="words"
                  ref={(input) => this.namaTemInput = input}
                  onSubmitEditing={() => this.CodeInput.focus()}
                  value={this.state.namaTem}
                  onChangeText = {(TextInputText) => this.setState({ namaTem: TextInputText })} />

                <TextInput 
                  placeholder = "NIM"
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  returnKeyType="next"
                  keyboardType="numeric"
                  value={this.state.nim}
                  ref={(input) => this.nimInput = input}
                  onSubmitEditing={() => this.nimInput.focus()}
                  onChangeText = {(TextInputText) => this.setState({ nim: TextInputText })} />

                <TouchableOpacity 
                  activeOpacity = { 0.5 }
                  style = { styles.TouchableOpacityStyle } 
                  onPress = { this.Update }>

                    <Text style = { styles.TextStyle }>Kembalikan</Text>

                </TouchableOpacity>

                {
        
                this.state.ActivityIndicator_Loading ? <ActivityIndicator color='#2196F3' size='large'style={styles.ActivityIndicatorStyle} /> : null
                
                }
                
               <View style={{height: 100}}></View> 
            </View>
            </ScrollView>
            </View>
      
     
     
      
    );
  }
}
export default kembali;
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