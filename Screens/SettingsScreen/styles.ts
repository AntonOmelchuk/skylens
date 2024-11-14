import { StyleSheet } from 'react-native';

import type { ColorSchemeName } from 'react-native/Libraries/Utilities/Appearance';

import Colors from '@/constants/Colors';

const getStyles = ({ theme, top }:{ theme?: ColorSchemeName, top?: number }) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors[theme ?? 'light'].background,
    padding: 12,
    gap: 24,
    paddingTop: top,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: Colors[theme ?? 'light'].background,
  },
});

export default getStyles;
