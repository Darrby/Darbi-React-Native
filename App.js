import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config'; // Optional if you want to use default theme
import React from 'react';
import { useFonts } from 'expo-font';
import AppStacks from './components/AppStacks/AppStacks';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Avenir Arabic': require('./assets/fonts/AvenirArabic-Heavy.otf'),
    'Avenir Arabic Light': require('./assets/fonts/AvenirArabic-Medium.otf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <GluestackUIProvider config={config}>
      <AppStacks />
    </GluestackUIProvider>
  );
}
