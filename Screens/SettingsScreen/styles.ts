import { StyleSheet } from 'react-native';

import type { ColorSchemeName } from 'react-native/Libraries/Utilities/Appearance';

import Colors from '@/constants/Colors';

const getStyles = ({ theme }:{ theme?: ColorSchemeName }) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors[theme ?? 'light'].background,
    padding: 12,
    gap: 24,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: Colors[theme ?? 'light'].background,
  },
});

export default getStyles;
