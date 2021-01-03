### Project Setup

1) Install `Expo` client

    - this behaves as a `wrapper` around your `React Native App`
    - `Expo` is a third-party service that provides a convenient development workflow to reduce the complexity of implementing `React Native` features
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
     

