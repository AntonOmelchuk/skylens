import { View } from 'react-native';
import { useTranslation } from 'react-i18next';

import getStyles from './styles';

import AppText from '@/components/AppText/AppText';
import { useAppSelector } from '@/store/hooks/useApp';
import selectCurrentTheme from '@/store/slices/theme/selectors';

export default function HomeScreen() {
  const { t } = useTranslation();
  const theme = useAppSelector(selectCurrentTheme);
  const styles = getStyles({ theme });

  return (
    <View style={styles.container}>
      <AppText>
        {`${t('home.pageTitle')}`}
      </AppText>
    </View>
  );
}
