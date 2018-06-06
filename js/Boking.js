import React, { Component } from 'react';
import { Alert, Button, Text, View, Image, StyleSheet, TextInput, ActivityIndicator, TouchableOpacity,KeyboardAvoidingView } from 'react-native';
//import { Ionicons } from '@expo/vector-icons'; 
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import Ionicons from 'react-native-ionicons';
//import { Container, Header, Body, Text} from 'native-base';
//import EntypoIcon from 'react-native-vector-icon/Entypo'
import {Container, Content} from 'native-base'


//Home Screen

class LogoTitle extends React.Component {
  render() {
    return (
      <View style={{ alignItems:'center', justifyContent: 'center' }}>
        <Text></Text>
      </View>
    );
  }
}


class BokingScreen extends Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
  };sakljdak
  
  
  constructor()
    {
        super();
 
        this.state = { 
          
          nama: '',
          nim: '',
          instansi: '',
          telp: '',
          namaTem: '',
          Code: '',
          tgl_pinjam: '',
          tgl_kembali: '',
          ActivityIndicator_Loading: false, 

        }
    }
    //fungsi mengirim data ke database
    Insert_Data_Into_MySQL = () =>
    {
        this.setState({ ActivityIndicator_Loading : true }, () =>
        {
            fetch('http://budiartawanwebsite.000webhostapp.com/bopatApi/sentData.php',
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
                  
                  
                })
 
            }).then((response) => response.json()).then((responseJsonFromServer) =>
            {
                alert(responseJsonFromServer);
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
      <Container>
      <Content>
         <KeyboardAvoidingView behavior="padding" style = { styles.MainContainer }>

               <View style={{ flex: 1, alignItems:'center', justifyContent: 'center', backgroundColor:'#BBDEFB'}} >
                 <Image
                    source={require('./img/undiksha.png')}//image
                    style={{width: 100, height: 100 }}
                  />
               </View>

               <TextInput 
                  placeholder = "Nama"
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  returnKeyType="next"
                  autoCapitalize="words"
                  onSubmitEditing={() => this.nimInput.focus()}
                  onChangeText = {(TextInputText) => this.setState({ nama: TextInputText })} />

                <TextInput 
                  placeholder = "NIM"
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  returnKeyType="next"
                  keyboardType="numeric"
                  ref={(input) => this.nimInput = input}
                  onSubmitEditing={() => this.instansiInput.focus()}
                  onChangeText = {(TextInputText) => this.setState({ nim: TextInputText })} />

                <TextInput 
                  placeholder = "Instansi"
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  returnKeyType="next"
                  autoCapitalize="words"
                  ref={(input) => this.instansiInput = input}
                  onSubmitEditing={() => this.telpInput.focus()}
                  onChangeText = {(TextInputText) => this.setState({ instansi: TextInputText })} />

                <TextInput 
                  placeholder = "No Telp"
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  returnKeyType="next"
                  keyboardType="numeric"
                  ref={(input) => this.telpInput = input}
                  onSubmitEditing={() => this.CodeInput.focus()}
                  onChangeText = {(TextInputText) => this.setState({ telp: TextInputText })} />



                
                <TextInput 
                  placeholder = "Code"
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  returnKeyType="next"
                  keyboardType="numeric"
                  ref={(input) => this.CodeInput = input}
                  onSubmitEditing={() => this.tgl_pinjamInput.focus()}
                  onChangeText = {(TextInputText) => this.setState({ Code: TextInputText })} />


                <TextInput 
                  placeholder = "Tanggal Peminjaman"
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  returnKeyType="next"
                  keyboardType="numeric"
                  ref={(input) => this.tgl_pinjamInput = input}
                  onSubmitEditing={() => this.tgl_kembaliInput.focus()}
                  onChangeText = {(TextInputText) => this.setState({ tgl_pinjam: TextInputText })} />

                <TextInput 
                  placeholder = "Tanggal Pengembalian"
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  returnKeyType="next"
                  keyboardType="numeric"
                  ref={(input) => this.tgl_kembaliInput = input}
                  onChangeText = {(TextInputText) => this.setState({ tgl_kembali: TextInputText })} />
 
 
               
                <TouchableOpacity 
                  activeOpacity = { 0.5 }
                  style = { styles.TouchableOpacityStyle } 
                  onPress = { this.Insert_Data_Into_MySQL }>

                    <Text style = { styles.TextStyle }>Pinjam</Text>

                </TouchableOpacity>

                {
        
                this.state.ActivityIndicator_Loading ? <ActivityIndicator color='#2196F3' size='large'style={styles.ActivityIndicatorStyle} /> : null
                
                }
                
            </KeyboardAvoidingView>
      </Content>
      </Container>
     
     
      
    );
  }
}
export default BokingScreen;
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