import { StatusBar} from 'expo-status-bar';
import React, {useState, useEffect}  from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, Alert, Pressable } from 'react-native';

export default function App() {

	// create basic state controlled via TouchableHighlight and Pressable
	const [outputText, setOutputText] = useState(" Open App.js to start experimenting ! ")
	const [orig, setToggleOrig] = useState(false)
	const [timesPressed, setTimesPressed] = useState(0);

	// renders dynamic message text within Pressable
	let textLog = '';
	if (timesPressed > 1) {
		textLog = timesPressed + 'x onPress';
	} else if (timesPressed > 0) {
		textLog = 'onPress';
	}


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
			<Button
				title = "Button"
				color="#841584"
				onPress = {() => Alert.alert('Button Pressed')}	
			/>

			<Pressable
				onPress={() => {
					setTimesPressed((current) => current + 1);
				}}
				onLongPress = {() => Alert.alert('Long Press detected')}
				style={({ pressed }) => [
				{
					backgroundColor: pressed
					? 'rgb(210, 230, 255)'
					: 'white'
				},
				styles.wrapperCustom
				]}>
				{({ pressed }) => (
				<View>
					<Button
						style = {{color: 'green'}}
						title = {pressed ? 'Button Pressed! title' : 'Press Me Button title'}			
					/>

					<Text style={styles.text}>
						{pressed ? 'Pressed!' : 'Press Me'}
					</Text>
					<Text>
						{textLog}
					</Text>
				</View>


				)}
			</Pressable>

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
	},
	wrapperCustom: {
		borderRadius: 8,
		padding: 6
  	},
    text: {
		fontSize: 16
  	},
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