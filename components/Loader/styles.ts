import { StyleSheet } from 'react-native';

import type { ColorSchemeName } from 'react-native/Libraries/Utilities/Appearance';

import Colors from '@/constants/Colors';

const getStyles = ({ theme }:{ theme?: ColorSchemeName }) => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors[theme ?? 'light'].background,
  },
});

export default getStyles;
