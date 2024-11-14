import { ActivityIndicator, View } from 'react-native';

import getStyles from './styles';

import { useAppSelector } from '@/store/hooks/useApp';
import selectCurrentTheme from '@/store/slices/theme/selectors';

export default function Loader() {
  const theme = useAppSelector(selectCurrentTheme);
  const styles = getStyles({ theme });

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
}
