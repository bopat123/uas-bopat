import React, { Component } from 'react';
import { Alert,Icon, Button, Text, View, Image, StyleSheet, TextInput, ActivityIndicator, TouchableOpacity,KeyboardAvoidingView } from 'react-native';
//import { Ionicons } from '@expo/vector-icons'; 
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import Ionicons from 'react-native-ionicons';
//import { Container, Header, Body, Text} from 'native-base';
//import EntypoIcon from 'react-native-vector-icon/Entypo'


//Home Screen

class LogoTitle extends React.Component {
  render() {
    return (
      <View style={{ alignItems:'center', justifyContent: 'center' }}>
        <Text>DAFTAR</Text>
      </View>
    );
  }
}


class DaftarScreen extends Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
    
  };
  
  
  constructor()
    {
        super();
 
        this.state = { 
          nim: '',
          nama: '',
          komunitas: '',
          ActivityIndicator_Loading: false, 

        }
    }
    //fungsi mengirim data ke database
    Insert_Data_Into_MySQL = () =>
    {
        this.setState({ ActivityIndicator_Loading : true }, () =>
        {
            fetch('https://budiartawanwebsite.000webhostapp.com/API/sentData.php',
            {
                method: 'POST',
                headers: 
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                {
                  nim : this.state.nim,
                  nama : this.state.nama,
                  komunitas : this.state.komunitas,
                  
                })
 
            }).then((response) => response.json()).then((responseJsonFromServer) =>
            {
                alert(responseJsonFromServer);
                this.setState({ ActivityIndicator_Loading : false });
            }).catch((error) =>
            {
                console.error(error);
                /*Alert.alert(
                  'Oops!',
                  'Something went wrong!',
                  [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                  ],
                  { cancelable: false }
                )*/
                this.setState({ ActivityIndicator_Loading : false});
            });
        });
    }

  render() {
    return (
      


      

      <KeyboardAvoidingView behavior="padding" style = { styles.MainContainer }>

               <View style={{ flex: 1, alignItems:'center', justifyContent: 'center', backgroundColor:'#BBDEFB'}} >
                 <Image
                    source={require('./img/undiksha.png')}//image
                    style={{width: 150, height: 150 }}
                  />
               </View>

               <TextInput 
                  placeholder = "Nama"
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  returnKeyType="next"
                  autoCapitalize="words"
                  onChangeText = {(TextInputText) => this.setState({ nama: TextInputText })} />

                <TextInput 
                  placeholder = "NIM"
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  returnKeyType="next"
                  keyboardType="numeric"
                  onChangeText = {(TextInputText) => this.setState({ nim: TextInputText })} />

                
                <TextInput 
                  placeholder = "Email"
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  returnKeyType="next"
                  autoCapitalize="words"
                  onChangeText = {(TextInputText) => this.setState({ email: TextInputText })} />


                <TextInput 
                  placeholder = "Possword"
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  returnKeyType="next"
                  keyboardType="words"
                  onChangeText = {(TextInputText) => this.setState({ password: TextInputText })} />
 
               
                <TouchableOpacity 
                  activeOpacity = { 0.5 }
                  style = { styles.TouchableOpacityStyle } 
                  onPress = { () => this.props.navigation.navigate("Login") }>

                    <Text style = { styles.TextStyle }>Daftar</Text>

                </TouchableOpacity>


                
                
            </KeyboardAvoidingView> //penutup containerMain
     
      
    );
  }
}
export default DaftarScreen;
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