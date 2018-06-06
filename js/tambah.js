import React, { Component } from 'react';
import {   registerComponent,AppRegistry,ScrollView, Alert, Button, Text, View, Image, StyleSheet, TextInput, ActivityIndicator, TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import Ionicons from 'react-native-ionicons';
import {Form, Textarea} from 'native-base';
import ImagePicker from 'react-native-image-picker';


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


class tambah extends Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
  };
  
  state = {
 
      ImageSource: null,
    
    };
  
    selectPhotoTapped() {
      const options = {
        quality: 1.0,
        maxWidth: 500,
        maxHeight: 500,
        storageOptions: {
          skipBackup: true
        }
      };
  
      ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);
  
        if (response.didCancel) {
          console.log('User cancelled photo picker');
        }
        else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        }
        else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        }
        else {
          let source = { uri: response.uri };
  
          // You can also display the image using data:
          // let source = { uri: 'data:image/jpeg;base64,' + response.data };
  
          this.setState({
 
            ImageSource: source
 
          });
        }
      });
    }
  
  constructor()
    {
        super();
 
        this.state = { 
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
          ActivityIndicator_Loading: false, 

        }
    }
    //fungsi mengirim data ke database
    Insert_Data_Into_MySQL = () =>
    {
        this.setState({ ActivityIndicator_Loading : true }, () =>
        {
            fetch('http://budi.wahanawar.com/sentDataTemp.php',
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
                  detail : this.state.detail,
                  biaya : this.state.biaya,
                  penanggungjwb: this.state.penanggungjwb,
                  notelp : this.state.notelp,
                  status : this.state.status,
                  
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
                 <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
 
              <View style={styles.ImageContainer}>
   
              { this.state.ImageSource === null ? <Text>Select a Photo</Text> :
                <Image style={styles.ImageContainer} source={this.state.ImageSource} />
              }
   
              </View>
 
          </TouchableOpacity>
               </View>

          
      <ScrollView>
         <View style = { styles.MainContainer }>
          

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
                  placeholder = "Code"
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  returnKeyType="next"
                  keyboardType="numeric"
                  value={this.state.Code}
                  ref={(input) => this.CodeInput = input}
                  onSubmitEditing={() => this.biayaInput.focus()}
                  onChangeText = {(TextInputText) => this.setState({ Code: TextInputText })} />

                <TextInput 
                  placeholder = "Biaya Kebersihan"
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  returnKeyType="next"
                  value={this.state.biaya}
                  autoCapitalize="numeric"
                  ref={(input) => this.biayaInput = input}
                  onSubmitEditing={() => this.penanggungjwbInput.focus()}
                  onChangeText = {(TextInputText) => this.setState({ biaya: TextInputText })} />

                 <TextInput 
                  placeholder = "Penanggung Jawab"
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  returnKeyType="next"
                  autoCapitalize="words"
                  value={this.state.penanggungjwb}
                  ref={(input) => this.penanggungjwbInput = input}
                  onSubmitEditing={() => this.notelpInput.focus()}
                  onChangeText = {(TextInputText) => this.setState({ penanggungjwb: TextInputText })} />

                <TextInput 
                  placeholder = "No Telp"
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  returnKeyType="next"
                  keyboardType="numeric"
                  value={this.state.notelp}
                  ref={(input) => this.notelpInput = input}
                  onSubmitEditing={() => this.detailInput.focus()}
                  onChangeText = {(TextInputText) => this.setState({ notelp: TextInputText })} />

                <Form style={{width:'100%', alignItems:'center', justifyContent: 'center'}}>

                        <Textarea
                        style = { styles.TextInputStyleClass } 
                        underlineColorAndroid = "transparent"
                        placeholder="Detail"
                        value={this.state.detail}
                        keyboardType="words"
                        ref={(input) => this.detailInput = input}
                        onChangeText = {(TextInputText) => this.setState({ detail: TextInputText })} 
                         />
                </Form>

 
 
               
                <TouchableOpacity 
                  activeOpacity = { 0.5 }
                  style = { styles.TouchableOpacityStyle } 
                  onPress = { this.Insert_Data_Into_MySQL }>

                    <Text style = { styles.TextStyle }>Tambah</Text>

                </TouchableOpacity>

                {
        
                this.state.ActivityIndicator_Loading ? <ActivityIndicator color='#2196F3' size='large'style={styles.ActivityIndicatorStyle} /> : null
                
                }
                
                
            </View>
            </ScrollView>
            </View>
      
     
     
      
    );
  }
}
export default tambah;
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
    ImageContainer: {
      borderRadius: 10,
      width: 250,
      height: 250,
      borderColor: '#9B9B9B',
      borderWidth: 1 ,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#CDDC39',
      
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
AppRegistry.registerComponent('Project1', () => App);