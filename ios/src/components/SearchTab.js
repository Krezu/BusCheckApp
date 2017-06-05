import React, { Component } from 'react';
import SearchBar from 'react-native-search-bar';

import {
	View,
	Text,
	Button,
	StyleSheet,
	TouchableOpacity,
	TextInput,
	Keyboard
} from 'react-native';

class SearchTab extends React.Component {
	componentWillMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow () {
    alert('Keyboard Shown');
  }

  _keyboardDidHide () {
    alert('Keyboard Hidden');
  }

	render(){
		return(
			<View style={styles.container}>
				<View style={{flex: 1, flexDirection: 'row'}}>
					<TextInput style={styles.textInput} placeholder=" Search" onSubmitEditing={Keyboard.dismiss}/>
					<TouchableOpacity style={styles.cancelButton} onPress={() => this.props.navigator.pop()}>
						<Text style={{textAlign: 'center', marginTop: 5}}>Cancel</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.view2}>

				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'pink',
		paddingTop: 23
	},
	cancelButton: {
		flex:1,
		backgroundColor: '#A8AAAB'
	},
	view2: {
		flex:20,
		backgroundColor: 'green',
		marginTop: 10
	},
	textInput: {
		flex:3,
		height: 30,
		borderWidth: 1,
		borderColor: 'grey',
		marginBottom: 10,
		marginHorizontal: 10,
		backgroundColor: 'white'
	},

});

export default SearchTab;
