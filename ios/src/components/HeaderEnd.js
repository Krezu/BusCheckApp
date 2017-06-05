import React, { Component } from 'react';

import {
	View,
	StyleSheet,
	Text,
	Button,
	TouchableOpacity,
	Image,
	Switch
} from 'react-native'

class SwitchEvent extends React.Component {
	state = {
		switch: false,
	}
	render() {
		return(
			<View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={{flexDirection: 'row'}}>

					<Text>List</Text>
					<Switch
						onValueChange={(value) => this.setState({switch: value})}
						style={{marginBottom: 10}}
						value={this.state.switch} />
					<Text>Map</Text>
        </View>
      </View>
		)
	}
}

class HeaderEnd extends React.Component {
	render() {
		return(
			<View style={styles.container}>
				<View style={styles.view1}>
					<SwitchEvent/>
				</View>
				<TouchableOpacity style={styles.view2}>
					<Image
						style={{width:50, height:50, marginTop: 2}}
						source={require('../img/transIcon.png')}
					/>
				</TouchableOpacity>
				<TouchableOpacity style={styles.view3}>
					<Image
						style={{width:50, height:50, marginLeft: 7}}
						source={require('../img/journeyIcon.png')}
					/>
				</TouchableOpacity>
				<TouchableOpacity style={styles.view4}>
					<Image
						style={{width:55, height:55}}
						source={require('../img/locationIcon.png')}
					/>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
	},
	view1: {
		flex:3,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	view2: {
		flex:1,
	},
	view3: {
		flex:1,
	},
	view4: {
		flex:1,
	},
});

export default HeaderEnd;
