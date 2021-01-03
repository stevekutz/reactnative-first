### Project Setup

1) Install `Expo` client

	- this behaves as a `wrapper` around your `React Native App`
	- `Expo` is a third-party service that provides a convenient development workflow to reduce the complexity of implementing `React Native` features from scratch
	- `Expo` limits the full control available in the `React Native` development environments available in `Xcode` and `Android Studio`

		~~~ bash
		npm install expo-cli --global
		~~~

2) Create a `React Native` project using `expo-init  [projectName]`

   - choose the `blank` template
   - in the underlined `name` field, enter a name. This will show up in the browser tab when the project is launched

		~~~ bash
		expo init reactnative-first
		~~~

3) Launch project into the browser 
	- use `yarn start` or `npm start` from the terminal
	- this will launch in the browser on port `http://localhost:19002/`
	- use `CTRL + C` to quit
	- while launched, open `VS Code` to see the default code and review `App.js`

4) Launch the project on your iPhone
	- Install `Expo client` from the app store
	- Open the `iPhone camera app` and hold it over the `QR code`

5) Launch the project on the Xcode iPhone simulator
	- install Xcode
	- make sure `Command Line Tools` is installed under `Preferences/Locations`

	- Launch the iPhone sumulator by either:
		- select `Run on iOS simulator` from the `Expo client` browser window on port `http://localhost:19002/`
    	- pressing `i` from the terminal window after starting project

	 

### Designing Basic Sample App

1) Modify `App.js`

   - `Button` has limited props for customization and is rendered as text
   - `TouchableHighlight` can be used to emulate a traditional `button` and is used to toggle state
   - `Text` has many props to format displayed text
   - `View` tags wrap the returned JSX similar to a `div` in `React`
   - `onPress` is used instead of `onClick`
   - `useEffect` will run on first render and whenever `outputText` is toggled 
   - `Pressable` can detect multiple levels of interaction(e.g onPressIn, onLongPress, etc. )
   - `Stylesheet` tag used to render CSS styles

       	~~~ js
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