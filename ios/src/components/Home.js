import React, { Component } from 'react';
import {
	View,
	StyleSheet,
	Text,
	TouchableOpacity,
} from 'react-native';

import MapView from 'react-native-maps';

import HeaderBar from './HeaderBar.js';
import HeaderEnd from './HeaderEnd.js';

class Home extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			mapRegion: null,
  		lastLat: null,
  		lastLong: null,
			}
			this.onRegionChange = this.onRegionChange.bind(this);
		}
	componentDidMount(){
		this.watchID = navigator.geolocation.watchPosition((position) => {
			let region = {
        latitude:       position.coords.latitude,
        longitude:      position.coords.longitude,
        latitudeDelta:  0.00922*1.5,
        longitudeDelta: 0.00421*1.5
      }
			this.onRegionChange(region, region.latitude, region.longitude);
		});
	}

	onRegionChange(region, lastLat, lastLong) {
    this.setState({
      mapRegion: region,
      // If there are no new values set the current ones
      lastLat: lastLat || this.state.lastLat,
      lastLong: lastLong || this.state.lastLong
    });
  }

	componentWillUnmount() {
	navigator.geolocation.clearWatch(this.watchID);
}

	render(){
		return(
			<View style={styles.container}>
				<HeaderBar navigator={this.props.navigator}/>
				<View style={styles.view1}>
					<MapView
						style={styles.mapView}
						region={this.state.mapRegion}
						showsUserLocation={true}
						followUserLocation={true}
						onRegionChange={this.onRegionChange}
						zoomEnabled={true}
					>
						<MapView.Marker
							coordinate={{
								latitude: (this.state.lastLat + 0.00050) || -36.82339,
								longitude: (this.state.lastLong + 0.00050) || -73.03569,
							}}>
							<View>
								<Text style={{color: '#000'}}>
									{ this.state.lastLong } / { this.state.lastLat }
								</Text>
							</View>
						</MapView.Marker>
					</MapView>
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
