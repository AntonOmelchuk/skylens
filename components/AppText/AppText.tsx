import { Text } from 'react-native';

import getStyles from './styles';

import type { TextProps } from 'react-native/Libraries/Text/Text';

import { useAppSelector } from '@/store/hooks/useApp';
import selectCurrentTheme from '@/store/slices/theme/selectors';

function AppText({ children, style }:TextProps) {
  const theme = useAppSelector(selectCurrentTheme);
  const styles = getStyles({ theme });

  return (
    <Text style={[styles.base, style]}>
      {children}
    </Text>
  );
}

export default AppText;
