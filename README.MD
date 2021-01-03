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
   - Enter a name. This will show up in the browser tab when the project is launched

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
     

### Designing Basic App

1) Modify `App.js`

    - Instead of a `Button`, a `TouchableHighlight` is used to toggle state
    - `View` tags wrap the returned JSX
    - `onPress` is used instead of `onClick`
    - `useEffect` will run on first render and whenever `outputText` is toggled 
    - CSS styles are implemented via the `Stylesheet` tag

    ~~~ js
    export default function App() {

        // create basic state controlled via TouchableHighlight
        const [outputText, setOutputText] = useState(" Open App.js to start experimenting ! ")
        const [orig, setToggleOrig] = useState(true)

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
    ~~~