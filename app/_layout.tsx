import 'react-native-reanimated';

import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import App from '@/Screens/App';
import { store } from '@/store/store';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    InterRegular: require('../assets/fonts/Inter-Regular.ttf'),
    UbuntuRegular: require('../assets/fonts/Ubuntu-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
