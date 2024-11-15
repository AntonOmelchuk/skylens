import { ActivityIndicator, View } from 'react-native';

import getStyles from './styles';

import type { ViewStyle } from 'react-native';

interface ILoader {
  style?: ViewStyle,
}

export default function Loader({ style }: ILoader) {
  const styles = getStyles();

  return (
    <View style={[styles.container, style]}>
      <ActivityIndicator size="large" color="#fff" />
    </View>
  );
}
