import React, { Component } from 'react';
import {
	View,
	StyleSheet,
	Text,
	Button,
	TouchableOpacity,
	Image
} from 'react-native'

class HeaderBar extends React.Component {
	constructor(){
		super();
		this.navigate = this.navigate.bind(this);
	}

	navigate(name){
		this.props.navigator.push({
			name
		})
	}

	render(){
		return(
			<View style={styles.button}>
				<TouchableOpacity style={styles.headerBtn}>
					<Image
						style={{width:40, height:50}}
						source={require('../img/optionIcon.png')}
					/>
				</TouchableOpacity>
				<TouchableOpacity style={styles.headerBtn}>
					<Image
						style={{width:50, height:50}}
						source={require('../img/alarmIcon.png')}
					/>
				</TouchableOpacity>
				<View style={styles.headerText}>
					<Text style={{fontSize: 20}}>
						BusCheck
					</Text>
				</View>
				<TouchableOpacity
					style={styles.headerBtn}
					onPress={() => this.navigate('searchBar')}>
					<Image
						style={{width: 40, height: 40}}
						source={require('../img/searchIcon.png')}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.headerBtn}
					onPress={() => this.navigate('favouritesBar')}>
					<Image
						style={{width: 60, height: 60}}
						source={require('../img/faveIcon.png')}
					/>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
  button: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
  },
	headerText: {
		flex: 3,
		justifyContent: 'center',
		alignItems: 'center',
	},
	headerBtn: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	view1: {
		flex: 1,
		flexDirection: 'row',
	},
});

export default HeaderBar;
