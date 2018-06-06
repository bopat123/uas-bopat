import React, { Component } from 'react';
import { AppRegistry,
		ScrollView,
		Text,View,
		Dimensions } from 'react-native';
export default class Hor extends Component{
	render(){
		let screenWidth = Dimensions.get('window').width;
		let screenHeight = Dimensions.get('window').height;
		return(
			<View>
				<ScrollView
					horizontal={true}
					pagingEnabled={true}
					showHorizontalScrollIndicator={true}
					scrollIndicatorInsets={{top: 10, botton: 10, left: 10, right: 10}}
					scrollEventThrottle={10}
				>
						<View style={{
							backgroundColor:'red',
							flex: 1,
							marginTop: 20,
							width: screenWidth,
							justifyContent: 'center',
							alignItems: 'center'
						}}> 
							<Text 
							style={{fontSize:20,
								padding: 15,
								color: 'white',
								textAlign:'center'}}
								>
								Screen1
							</Text>
						</View>
						<View style={{
							backgroundColor:'blue',
							flex: 1,
							marginTop: 20,
							width: screenWidth,
							justifyContent: 'center',
							alignItems: 'center'
						}}>
							<Text 
							style={{fontSize:20,
								padding: 15,
								color: 'white',
								textAlign:'center'}}
								>
								Screen2
							</Text>
						</View>
						<View style={{
							backgroundColor:'black',
							flex: 1,
							marginTop: 20,
							width: screenWidth,
							justifyContent: 'center',
							alignItems: 'center'
						}}>
							<Text 
							style={{fontSize:20,
								padding: 15,
								color: 'white',
								textAlign:'center'}}
								>
								Screen3
							</Text>
						</View>
					
				</ScrollView>
				</View>

			);
	}
}
AppRegistry.registerComponent('uas1', () => App);