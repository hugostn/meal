import React, { useState } from 'react';
import { AppLoading } from 'expo';
import MealsNavigator from './navigation/MealsNavigator'
import * as Font from 'expo-font';
import { enableScreens } from 'react-native-screens'

enableScreens();


let customFonts = {
  'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
  'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
};


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  (async () => {
    await Font.loadAsync(customFonts);
    setFontsLoaded(true);
  })();

  console.log(fontsLoaded)
  if (!fontsLoaded) {
    console.log('carregando fonte');
    return (
      <AppLoading />
    );
  } else {
    console.log('fontes carregadas')
    return <MealsNavigator />;
  }

}
