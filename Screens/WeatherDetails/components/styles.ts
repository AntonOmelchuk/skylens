import { StyleSheet } from 'react-native';

import type { ColorSchemeName } from 'react-native/Libraries/Utilities/Appearance';

import Colors from '@/constants/Colors';
import { SCREEN_WIDTH } from '@/constants/General';

const getStyles = ({ theme }: { theme: ColorSchemeName }) => StyleSheet.create({
  container: {
    width: (SCREEN_WIDTH / 2) - 32,
    height: 100,
    backgroundColor: Colors[theme ?? 'light'].cardBackground,
    marginVertical: 8,
    padding: 16,
    borderRadius: 16,
    shadowColor: Colors[theme ?? 'light'].shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontWeight: '700',
    fontSize: 16,
    marginBottom: 16,
  },
  textInfo: {
    fontWeight: '600',
    fontSize: 25,
  },
});

export default getStyles;
