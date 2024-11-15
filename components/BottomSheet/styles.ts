import { StyleSheet } from 'react-native';

import type { ColorSchemeName } from 'react-native/Libraries/Utilities/Appearance';

import Colors from '@/constants/Colors';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@/constants/General';

const getStyles = ({ theme, top }:{ theme: ColorSchemeName, top: number }) => StyleSheet.create({
  bottomSheetContainer: {
    height: SCREEN_HEIGHT - top,
    width: SCREEN_WIDTH,
    backgroundColor: Colors[theme ?? 'light'].background,
    position: 'absolute',
    zIndex: 100,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    bottom: -SCREEN_HEIGHT,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.1,
    shadowColor: 'black',
    elevation: 2,
  },
  line: {
    width: 150,
    height: 8,
    backgroundColor: Colors[theme ?? 'light'].neutral,
    alignSelf: 'center',
    marginVertical: 15,
    borderRadius: 8,
  },
});

export default getStyles;
