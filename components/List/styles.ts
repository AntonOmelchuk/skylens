import { StyleSheet } from 'react-native';

import { SCREEN_WIDTH } from '@/constants/General';

const getStyles = () => StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
  },
  loader: {
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});

export default getStyles;
