import { ActivityIndicator, View } from 'react-native';

import getStyles from './styles';

import Colors from '@/constants/Colors';
import { useAppSelector } from '@/store/hooks/useApp';
import selectCurrentTheme from '@/store/slices/theme/selectors';

export default function ListLoader() {
  const theme = useAppSelector(selectCurrentTheme);
  const styles = getStyles();

  return (
    <View style={styles.loader}>
      <ActivityIndicator size="large" color={Colors[theme].text} />
    </View>
  );
}
