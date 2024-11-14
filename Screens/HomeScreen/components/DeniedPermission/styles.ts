import { StyleSheet } from 'react-native';

import { SCREEN_WIDTH } from '@/constants/General';

const getStyles = () => StyleSheet.create({
  infoText: {
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
    color: '#11181C',
  },
  button: {
    marginTop: 16,
    marginHorizontal: 16,
    width: SCREEN_WIDTH - 32,
  },
});

export default getStyles;
