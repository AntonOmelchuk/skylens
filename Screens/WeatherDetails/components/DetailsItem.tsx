import { View } from 'react-native';

import getStyles from './styles';

import AppText from '@/components/AppText/AppText';
import { useAppSelector } from '@/store/hooks/useApp';
import selectCurrentTheme from '@/store/slices/theme/selectors';

interface IDetailsItem {
  title: string,
  value: string,
}

export default function DetailsItem({ title, value }: IDetailsItem) {
  const theme = useAppSelector(selectCurrentTheme);
  const styles = getStyles({ theme });

  return (
    <View style={styles.container}>
      <AppText style={styles.title}>{title}</AppText>
      <AppText style={styles.textInfo}>{value}</AppText>
    </View>
  );
}
