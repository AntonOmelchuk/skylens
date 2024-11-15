import { View } from 'react-native';

import getStyles from './styles';

import AppText from '@/components/AppText/AppText';
import { useAppSelector } from '@/store/hooks/useApp';
import selectCurrentTheme from '@/store/slices/theme/selectors';

interface IResultsItem {
  result: string,
}

export default function ResultsItem({ result }: IResultsItem) {
  const theme = useAppSelector(selectCurrentTheme);
  const styles = getStyles({ theme });

  return (
    <View style={styles.itemContainer}>
      <AppText style={styles.text}>{result}</AppText>
    </View>
  );
}