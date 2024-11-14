import { useEffect } from 'react';
import { Appearance } from 'react-native';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';

import { useAppSelector } from '@/store/hooks/useApp';
import selectCurrentTheme from '@/store/slices/theme/selectors';
import setColorScheme = Appearance.setColorScheme;
import i18n from 'i18next';

import selectLocale from '@/store/slices/translates/selectors';

function App() {
  const theme = useAppSelector(selectCurrentTheme);
  const locale = useAppSelector(selectLocale);

  useEffect(() => {
    setColorScheme?.(theme);
    i18n.changeLanguage(locale);
  }, [theme, locale]);

  return (
    <ThemeProvider value={theme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}

export default App;
