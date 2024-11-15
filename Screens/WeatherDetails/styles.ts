import { StyleSheet } from 'react-native';

import type { ColorSchemeName } from 'react-native/Libraries/Utilities/Appearance';

import Colors from '@/constants/Colors';

const getStyles = ({ theme }: { theme: ColorSchemeName }) => StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: Colors[theme ?? 'light'].background,
    padding: 16,
  },
});

export default getStyles;
