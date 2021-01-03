import { StatusBar} from 'expo-status-bar';
import React, {useState, useEffect}  from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';

export default function App() {

	// create basic state controlled via TouchableHighlight
	const [outputText, setOutputText] = useState(" Open App.js to start experimenting ! ")
	const [orig, setToggleOrig] = useState(false)

	// useEffect runs when outputText updated and will toggle on first render as well
	useEffect( () => {
		setToggleOrig(!orig)
	}, [outputText])


  	return (
		<View style={styles.container}>
			<Text> {outputText} </Text>
			<Text style = { orig ? styles.origText : styles.newText } > orig is {orig.toString()} </Text>
			<TouchableHighlight 
				style = {styles.buttonFormat}
				title = "Change Text" 
				onPress = { () => {
					orig ? setOutputText("The text changed !") : setOutputText(" Open App.js to start experimenting !")		
					}}
			>
				<Text> Toggle Me </Text>		
			</TouchableHighlight>

			<StatusBar style="auto" />
		</View>
  	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	origText: {
		color: 'blue'
	},
	newText: {
		color: 'red'
	},
	buttonFormat: {
		borderColor: 'green',
		borderWidth: 1,
		borderRadius: 10,
		padding: 2,
		margin: 15,
		backgroundColor: 'lightyellow'
	}
});

// <Button title = "Change Text" onPress = {() => setOutputText("The text changed !")}/>

// onPress = { () => {
// 					if (orig) {
// 						setOutputText("The text changed !")
// 					}
// 					else {
// 						setOutputText(" Open App.js to start experimenting !")
// 					}
// 						setToggleOrig(!orig)				
// 				}