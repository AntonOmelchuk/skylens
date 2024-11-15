import { TouchableOpacity, View } from 'react-native';

import getStyles from './styles';

import AppText from '@/components/AppText/AppText';
import { useAppSelector } from '@/store/hooks/useApp';
import selectCurrentTheme from '@/store/slices/theme/selectors';

interface IResultsItem {
  result: string,
  onPress: () => void,
}

export default function ResultsItem({ result, onPress }: IResultsItem) {
  const theme = useAppSelector(selectCurrentTheme);
  const styles = getStyles({ theme });

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.2}>
      <View style={styles.itemContainer}>
        <AppText style={styles.text}>{result}</AppText>
      </View>
    </TouchableOpacity>
  );
}
