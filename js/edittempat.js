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
        <Text>Edit Tempat </Text>
      </View>
    );
  }
}

export default class DetailTempatScreen extends React.Component {
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
      namaTem: '',
          Code: '',
          detail: '',
          biaya: '',
          penanggungjwb:'',
          notelp:'',
          status:'',
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
            namaTem:  responseJson[0].namaTem,
            Code : responseJson[0].Code,
            status : responseJson[0].status,
            biaya : responseJson[0].biaya,
            penanggungjwb : responseJson[0].penanggungjwb,
            notelp : responseJson[0].notelp,
            detail : responseJson[0].detail,



          });
        }
      );
    });
  }
  _keyExtractor = (item, index) => item.Code;

  Update = () =>
    {
        this.setState({ ActivityIndicator_Loading : true }, () =>
        {
            fetch('http://budi.wahanawar.com/editTempat.php',
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
              

                <View style={{justifyContent:'center', marginLeft:8}}>
                  <Text style={{height: 40}}>Nama Tempat</Text>
                  <Text style={{height: 40}}>Kode</Text>
                  <Text style={{height: 40}}>Status</Text>
                  <Text style={{height: 40}}>Biaya Kebersihan</Text>
                  <Text style={{height: 40}}>Penanggung Jawab</Text> 
                  <Text style={{height: 40}}>No Tepl</Text> 
                  
                </View>
                <View style={{ justifyContent:'center', marginLeft:8}}>
                  <Text style={{height: 40}}>:</Text>
                  <Text style={{height: 40}}>:</Text>
                  <Text style={{height: 40}}>:</Text> 
                   <Text style={{height: 40}}>:</Text>
                  <Text style={{height: 40}}>:</Text>
                  <Text style={{height: 40}}>:</Text> 
                  
                </View>

                <View style={{justifyContent:'center', marginLeft:8}}>

                <View style={{justifyContent:'center', marginLeft:8,marginBottom:10, height: 30,width: 180, borderColor: 'blue',borderWidth: 1 , backgroundColor: 'white'}}>
                  
                  <TextInput 
                  style={{height:35, margin:8}}
                  returnKeyType="next"
                  defaultValue={item.namaTem}
                  autoCapitalize="words"
                  ref={(input) => this.namaTemInput = input}
                  onSubmitEditing={() => this.namaTemInput.focus()}
                  onChangeText = {(TextInputText) => this.setState({ namaTem: TextInputText })}

                  />

                </View>
                <View style={{justifyContent:'center', marginLeft:8,marginBottom:10, height: 30,width: 180, borderColor: 'blue',borderWidth: 1 , backgroundColor: 'white'}}>
                  
                  <TextInput 
                  style={{height:35, margin:8}}
                  returnKeyType="next"
                  keyboardType="numeric"
                  defaultValue={this.state.Code}
                  ref={(input) => this.CodeInput = input}
                  onChangeText = {(input) => this.setState({ Code: input })}

                  />

                </View>
                <View style={{justifyContent:'center', marginLeft:8,marginBottom:10, height: 30,width: 180, borderColor: 'blue',borderWidth: 1 , backgroundColor: 'white'}}>
                  <Text style={{height:35, margin:8, justifyContent:'center', alignItems: 'center'}}>{item.status}</Text>
                  

                </View>
                <View style={{justifyContent:'center', marginLeft:8,marginBottom:10, height: 30,width: 180, borderColor: 'blue',borderWidth: 1 , backgroundColor: 'white'}}>
                  
                  <TextInput 
                  style={{height:35, margin:8}}
                  returnKeyType="next"
                  keyboardType="numeric"
                  defaultValue={this.state.biaya}
                  ref={(input) => this.biayaInput = input}
                  onChangeText = {(input) => this.setState({ biaya: input })}

                  />

                </View>
                <View style={{justifyContent:'center', marginLeft:8,marginBottom:10, height: 30,width: 180, borderColor: 'blue',borderWidth: 1 , backgroundColor: 'white'}}>
                  
                  <TextInput 
                  style={{height:35, margin:8}}
                  returnKeyType="next"
                  keyboardType="words"
                  defaultValue={this.state.penanggungjwb}
                  ref={(input) => this.penanggungInput = input}
                  onChangeText = {(input) => this.setState({ penanggungjwb: input })}

                  />

                </View>
                <View style={{justifyContent:'center', marginLeft:8,marginBottom:10, height: 30,width: 180, borderColor: 'blue',borderWidth: 1 , backgroundColor: 'white'}}>
                  
                  <TextInput 
                  style={{height:35, margin:8}}
                  returnKeyType="next"
                  keyboardType="numeric"
                  defaultValue={this.state.notelp}
                  ref={(input) => this.notelpInput = input}
                  onChangeText = {(input) => this.setState({notelp: input })}

                  />

                </View>


                
                </View>



                

            </View>

                <View style={{backgroundColor: '#1976D2', alignItems: 'center', height: 40, justifyContent: 'center'}}>
                 <Text style={{color: 'white'}}>Detail</Text> 
                </View>
                <Form style={{width:'100%'}}>
                        <Textarea
                        defaultValue={item.detail}
                        ref={(input) => this.detailInput = input}
                        onChangeText = {(input) => this.setState({ detail: input })} 
                         />

                </Form>
                

                <View style={{justifyContent: 'center',width:'100%', alignItems: 'center', flexDirection:'row', backgroundColor: '#1976D2', borderColor:'blue', borderWidth: 1}}>
                    <TouchableOpacity 
                      activeOpacity = { 0.5 }
                      style = { styles.TouchableOpacityStyle4 } 
                      onPress = { this.Update}>
                       <Text style = { styles.TextStyle }>edit</Text>
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
      alignItems: 'flex-start',
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