import { StyleSheet } from 'react-native';

import type { ColorSchemeName } from 'react-native/Libraries/Utilities/Appearance';

import Colors from '@/constants/Colors';

const getStyles = ({ theme }:{ theme?: ColorSchemeName }) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors[theme ?? 'light'].background,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default getStyles;
