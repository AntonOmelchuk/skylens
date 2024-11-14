import { useEffect, useState } from 'react';
import { Appearance, View } from 'react-native';

import getStyles from './styles';

import AppSwitch from '@/components/AppSwitch/AppSwitch';
import AppText from '@/components/AppText/AppText';
import setColorScheme = Appearance.setColorScheme;
import { useTranslation } from 'react-i18next';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import LanguageSelector from '@/components/LanguageSelector/LanguageSelector';
import { useAppDispatch, useAppSelector } from '@/store/hooks/useApp';
import selectCurrentTheme from '@/store/slices/theme/selectors';
import { toggleTheme } from '@/store/slices/theme/slice';

export default function SettingsScreen() {
  const { top } = useSafeAreaInsets();

  const theme = useAppSelector(selectCurrentTheme);
  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  const [isEnabled, setIsEnabled] = useState(false);
  const styles = getStyles({ theme, top });

  useEffect(() => {
    setColorScheme?.(isEnabled ? 'dark' : 'light');
  }, [isEnabled]);

  return (
    <View style={styles.container}>
      <View style={styles.switchContainer}>
        <AppSwitch
          toggleSwitch={(prop) => {
            setIsEnabled(prop);
            dispatch(toggleTheme());
          }}
          isEnabled={theme === 'dark'}
        />
        <AppText>{t('settings.darkMode')}</AppText>
      </View>
      <LanguageSelector />
    </View>
  );
}
