import { StyleSheet } from 'react-native';

import type { ColorSchemeName } from 'react-native/Libraries/Utilities/Appearance';

import Colors from '@/constants/Colors';

const getStyles = ({ theme }:{ theme?: ColorSchemeName }) => StyleSheet.create({
  base: {
    fontFamily: 'UbuntuRegular',
    fontSize: 16,
    color: Colors[theme ?? 'light'].text,
  },
});

export default getStyles;
