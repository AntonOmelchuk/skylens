import { StyleSheet } from 'react-native';

import type { ColorSchemeName } from 'react-native/Libraries/Utilities/Appearance';

import Colors from '@/constants/Colors';

const getStyles = ({ theme }:{ theme?: ColorSchemeName }) => StyleSheet.create({
  listContainer: {
    gap: 24,
  },
  itemContainer: {
    flexDirection: 'row',
    gap: 24,
  },
  item: {
    width: 20,
    height: 20,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: Colors[theme ?? 'light'].baseBorderColor,
  },
  itemActive: {
    backgroundColor: Colors[theme ?? 'light'].green,
  },
});

export default getStyles;
