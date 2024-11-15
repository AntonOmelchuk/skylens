import { StyleSheet } from 'react-native';

import type { ColorSchemeName } from 'react-native/Libraries/Utilities/Appearance';

import Colors from '@/constants/Colors';
import { SCREEN_WIDTH } from '@/constants/General';

const getStyles = ({ theme }: { theme?: ColorSchemeName }) => StyleSheet.create({
  container: {
    width: SCREEN_WIDTH - 32,
    position: 'absolute',
    top: 100,
    alignSelf: 'center',
    zIndex: 1000,
    marginTop: 12,
    padding: 16,
    borderRadius: 22,
    backgroundColor: Colors[theme ?? 'light'].background,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
  },
});

export default getStyles;
