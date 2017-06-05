
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
	Button,
  View
} from 'react-native';

import {Navigator} from 'react-native-deprecated-custom-components';

import SearchTab from './ios/src/components/SearchTab.js';
import Favourites from './ios/src/components/Favourites.js';
import Home from './ios/src/components/Home.js';

export default class BusCheck extends Component {
	constructor(){
		super();
		this.renderScene = this.renderScene.bind(this);
	}

	renderScene(route, navigator) {
		if (route.name === 'homePage') {
			return <Home navigator={navigator}/>
		} else if (route.name === 'favouritesBar'){
			return <Favourites navigator={navigator}/>
		} else if (route.name === 'searchBar'){
			return <SearchTab navigator={navigator}/>
		}
	}
  render() {
    return (
			<Navigator
				initialRoute={{name: 'homePage'}}
				renderScene={this.renderScene}
			/>
			// <Favourites/>
      // <View style={styles.container}>
			//
			// 	<View style={styles.view1}>
			// 		<HeaderBar style={{flex: 1}}/>
			// 		<View style={{flex: 2}}></View>
			// 	</View>
			// 	<HeaderEnd/>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
		paddingTop: 23,
    backgroundColor: 'pink',
  },
	view1: {
		flex: 10,
	}
});

AppRegistry.registerComponent('BusCheck', () => BusCheck);
