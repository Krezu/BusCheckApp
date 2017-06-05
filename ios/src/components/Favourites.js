import React, { Component } from 'react';

import {
	View,
	StyleSheet,
	Text,
	Button,
	TouchableOpacity
} from 'react-native'

class Favourites extends React.Component {
	render(){
		return(
			<View style={styles.favView}>
				<View style={styles.view1}>
					<View style={{backgroundColor: 'blue', flex: 1}}>
						<TouchableOpacity
							onPress={() => this.props.navigator.pop()}
							style={{flex:1, backgroundColor:'blue', justifyContent: 'center'}}>
							<Text style={{textAlign: 'center'}}>Done</Text>
						</TouchableOpacity>
					</View>
					<View style={{backgroundColor: 'green', flex: 3, justifyContent: 'center'}}>
						<Text style={{textAlign: 'center'}}>Favourites</Text>
					</View>
					<TouchableOpacity style={{backgroundColor: 'red', flex: 1, justifyContent: 'center'}}>
						<Text style={{textAlign: 'center'}}>
							Edit
						</Text>
					</TouchableOpacity>
				</View>
				<View style={{paddingTop: 5, paddingBottom: 5, backgroundColor: 'pink'}}>
					<Text> Favourite places</Text>
				</View>
				<View style={styles.view2}>

				</View>
			</View>
		)
	}
	}

const styles = StyleSheet.create({
	favView: {
		flex:1,
		flexDirection: 'column',
		paddingTop: 23,
	},
	view1: {
		flex:1,
		backgroundColor: 'pink',
		flexDirection: 'row',
	},
	view2: {
		flex:15,
		backgroundColor: 'green'
	},
});

export default Favourites;
