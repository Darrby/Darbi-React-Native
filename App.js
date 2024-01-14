import { NavigationContainer } from '@react-navigation/native';
import Main from './Screens/Main/MainScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home/Home';
import SignIn from './Screens/SignIn/SignIn';
import ScreenOTP from './Screens/ScreenOTP/ScreenOTP';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config'; // Optional if you want to use default theme

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="main">
          <Stack.Screen
            name="main"
            component={Main}
            options={{ headerShown: false }}
          />
          {/* <Stack.Screen
          name="preloader"
          component={PreLoader}
          options={{ headerShown: false }}
        /> */}
          <Stack.Screen
            name="home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="signin"
            component={SignIn}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ScreenOTP"
            component={ScreenOTP}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
