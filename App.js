import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { useTheme } from './context/ThemeContext';
import { PaperProvider, DefaultTheme, } from 'react-native-paper';
import HomeScreen from './screens/HomeScreen';
import store from './redux/store';
import MatchScreen from './screens/MatchScreen';

const lightTheme = {
  ...DefaultTheme,
  roundness: 8,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#2ecc71',
    // background: '#f0f0f0',
    background: 'white',
    surface: '#ffffff',
  },
};
const darkTheme = {
  ...DefaultTheme,
  roundness: 8,
  colors: {
    ...DefaultTheme.colors,
    primary: '#273c75',
    accent: '#2ecc71',
    background: '#343a40',
    surface: '#2c3e50',
    placeholder: 'white',
    text: 'white',

  },
};

const Stack = createNativeStackNavigator();

export default function App() {

  const { theme } = useTheme();
  const statusBarColor = theme ? "#273c75" : "#3498db";
  const theTheme = theme ? darkTheme : lightTheme;


  return (
    <GestureHandlerRootView className="flex-1">
      <PaperProvider theme={theTheme}>

        <Provider store={store}>

          <Layout></Layout>
        </Provider>
      </PaperProvider>
    </GestureHandlerRootView>
  );
}

export const Layout = () => {
  return (
    <NavigationContainer>
      <BottomSheetModalProvider>
        <Stack.Navigator screenOptions={{ animation: 'slide_from_right' }}>

          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="MatchScreen"
            component={MatchScreen}
            options={{ headerShown: true }}
          />

        </Stack.Navigator>
      </BottomSheetModalProvider>
    </NavigationContainer>
  );
};
