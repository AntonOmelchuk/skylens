import { useCallback, useEffect, useState } from 'react';
import { Appearance, View } from 'react-native';

import getStyles from './styles';

import AppSwitch from '@/components/AppSwitch/AppSwitch';
import AppText from '@/components/AppText/AppText';
import setColorScheme = Appearance.setColorScheme;
import { useTranslation } from 'react-i18next';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Selector from '@/components/Selector/Selector';
import Title from '@/components/Title/Title';
import LanguageList from '@/constants/LanguageList';
import UnitsList from '@/constants/UnitsList';
import useActions from '@/store/hooks/useActions';
import { useAppSelector } from '@/store/hooks/useApp';
import selectCurrentUnits from '@/store/slices/general/selectors';
import selectCurrentTheme from '@/store/slices/theme/selectors';
import selectLocale from '@/store/slices/translates/selectors';

export default function SettingsScreen() {
  const { top } = useSafeAreaInsets();

  const theme = useAppSelector(selectCurrentTheme);
  const units = useAppSelector(selectCurrentUnits);
  const locale = useAppSelector(selectLocale);

  const { toggleUnits, toggleTheme, setLocale } = useActions();

  const { t } = useTranslation();

  const [isEnabled, setIsEnabled] = useState(false);
  const styles = getStyles({ theme, top });

  useEffect(() => {
    setColorScheme?.(isEnabled ? 'dark' : 'light');
  }, [isEnabled]);

  const onClickUnitsHandler = useCallback(() => {
    toggleUnits();
  }, []);

  const onClickLocaleHandler = useCallback((lng: string) => {
    setLocale(lng);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.switchContainer}>
        <AppSwitch
          toggleSwitch={(prop) => {
            setIsEnabled(prop);
            toggleTheme();
          }}
          isEnabled={theme === 'dark'}
        />
        <AppText>{t('settings.darkMode')}</AppText>
      </View>

      <Title title={t('general.language')} />
      <Selector data={LanguageList} onClickHandler={onClickLocaleHandler} activeItem={locale} />
      <Title title={t('general.units')} />
      <Selector data={UnitsList} onClickHandler={onClickUnitsHandler} activeItem={units} />
    </View>
  );
}
