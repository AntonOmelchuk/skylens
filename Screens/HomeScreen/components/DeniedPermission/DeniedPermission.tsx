import React, { useCallback } from 'react';
import { Linking } from 'react-native';
import { useTranslation } from 'react-i18next';

import getStyles from './styles';

import AppText from '@/components/AppText/AppText';
import Button, { ButtonTypes } from '@/components/Button/Button';

export default function DeniedPermission() {
  const { t } = useTranslation();

  const styles = getStyles();

  const onButtonPressHandler = useCallback(() => {
    Linking.openSettings();
  }, []);

  return (
    <>
      <AppText style={styles.infoText}>
        {t('general.permissionDenied')}
      </AppText>
      <Button
        title={t('general.goToSettings')}
        type={ButtonTypes.outline}
        onPress={onButtonPressHandler}
        style={styles.button}
      />
    </>
  );
}
