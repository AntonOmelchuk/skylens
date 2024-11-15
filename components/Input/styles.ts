import { StyleSheet } from 'react-native';

import { SCREEN_WIDTH } from '@/constants/General';

const getStyles = () => StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  input: {
    width: SCREEN_WIDTH - 32,
    backgroundColor: 'white',
    borderRadius: 22,
    height: 48,
    paddingVertical: 12,
    paddingLeft: 16,
    paddingRight: 54,
    fontSize: 16,
    lineHeight: 20,
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 20,
    padding: 10,
    right: 8,
  },
});

export default getStyles;
