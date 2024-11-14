import { StyleSheet } from 'react-native';

import type { ColorSchemeName } from 'react-native/Libraries/Utilities/Appearance';

import Colors from '@/constants/Colors';
import { SCREEN_WIDTH } from '@/constants/General';

const getStyles = ({ theme }:{ theme?: ColorSchemeName }) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors[theme ?? 'light'].background,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  infoText: {
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
  },
  buttonWrapper: {
    width: SCREEN_WIDTH - 64,
    alignItems: 'center',
    marginTop: 16,
  },
});

export default getStyles;
