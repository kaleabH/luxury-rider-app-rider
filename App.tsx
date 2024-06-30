import React from 'react';
// import { AppLoading } from 'expo';
import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_300Light,
  OpenSans_700Bold,
} from '@expo-google-fonts/open-sans';

import { Text, View } from 'react-native';
import Index from './src/index';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_300Light,
    OpenSans_700Bold,
  });

  if (!fontsLoaded) {
    // return <AppLoading />;
    return null;
  }

  return <Index />;
  // return (
  //   <View>
  //     <Text> index</Text>
  //   </View>
  // );
};

export default App;
