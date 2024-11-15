import { View } from 'react-native';
import { useTranslation } from 'react-i18next';

import AppText from '../AppText/AppText';
import getStyles from './styles';

interface IListEmptyComponent {
  isLoading: boolean,
}

export default function ListEmptyComponent({ isLoading }: IListEmptyComponent) {
  const { t } = useTranslation();

  const styles = getStyles();

  if (isLoading) {
    return null;
  }

  return (
    <View style={styles.container}>
      <AppText>{t('general.noResultsFound')}</AppText>
    </View>
  );
}
