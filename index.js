import * as React from 'react';
import { AppRegistry } from 'react-native';
import { PaperProvider, DefaultTheme, } from 'react-native-paper';
import { name as appName } from './app.json';
import messaging from '@react-native-firebase/messaging';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';



// Check if app was launched in the background and conditionally render null if so
function HeadlessCheck({ isHeadless }) {
  if (isHeadless) {
    // App has been launched in the background by iOS, ignore
    return null;
  }

  // Render the app component on foreground launch
  return <Main />;
}


// const theme = isDarkTheme ? DarkTheme : DefaultTheme;


export default function Main() {
  return (
    <ThemeProvider>

      <App />
    </ThemeProvider>

  );
}

AppRegistry.registerComponent(appName, () => HeadlessCheck);
