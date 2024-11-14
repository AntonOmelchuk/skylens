import { useCallback } from 'react';
import { Linking, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import getStyles from './styles';

import AppText from '@/components/AppText/AppText';
import Button, { ButtonTypes } from '@/components/Button/Button';
import Loader from '@/components/Loader/Loader';
import useGetLocation from '@/hooks/useGetLocation';
import { useAppSelector } from '@/store/hooks/useApp';
import selectCurrentTheme from '@/store/slices/theme/selectors';

export default function HomeScreen() {
  const { t } = useTranslation();

  const theme = useAppSelector(selectCurrentTheme);
  const styles = getStyles({ theme });

  const {
    loading, location, error, isDenied,
  } = useGetLocation();

  const onButtonPressHandler = useCallback(() => {
    Linking.openSettings();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? <Loader /> : (
        <>
          <AppText style={styles.infoText}>
            {location || error}
          </AppText>

          {isDenied ? (
            <View>
              <AppText style={styles.infoText}>
                {t('general.permissionDenied')}
              </AppText>
              <View style={styles.buttonWrapper}>
                <Button
                  title={t('general.goToSettings')}
                  type={ButtonTypes.outline}
                  onPress={onButtonPressHandler}
                />
              </View>
            </View>
          ) : null}
        </>
      )}
    </View>
  );
}
