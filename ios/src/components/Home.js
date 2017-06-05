import React, { Component } from 'react';
import {
	View,
	StyleSheet,
	Text,
	Button,
	TouchableHighlight,
	TouchableOpacity,
	TextInput,
} from 'react-native';

import MapView from 'react-native-maps';

import HeaderBar from './HeaderBar.js';
import HeaderEnd from './HeaderEnd.js';

class Home extends React.Component {
	render(){
		return(
			<View style={styles.container}>
				<HeaderBar navigator={this.props.navigator}/>
				<View style={styles.view1}>
					<MapView
						style={styles.mapView}
						showsUserLocation={true}
						region={{
							latitude: 51.513095,
							longitude: -0.089473,
							latitudeDelta: 0.0422,
							longitudeDelta: 0.0221,
						}}
					/>
				</View>
				<HeaderEnd/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
		paddingTop: 23,
    backgroundColor: '#83DE65',
  },
	view1: {
		flex: 10,
		position: 'relative'
	},
	mapView: {
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		position: 'absolute',
	}
});

export default Home;
