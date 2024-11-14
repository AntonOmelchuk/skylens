import { StyleSheet } from 'react-native';

import type { ColorSchemeName } from 'react-native/Libraries/Utilities/Appearance';

import Colors from '@/constants/Colors';

const getStyles = ({ theme }:{ theme?: ColorSchemeName }) => StyleSheet.create({
  container: {
    width: '100%',
    height: 48,
  },
  wrapper: {
    flex: 1,
  },
  button: {
    flex: 1,
    height: 48,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 22,
  },
  leftIcon: {
    marginRight: 8,
  },
  buttonSuccsessBg: {
    backgroundColor: Colors[theme ?? 'light'].buttonSuccessBg,
  },
  buttonSuccessText: {
    color: Colors[theme ?? 'light'].buttonLabel,
  },
  buttonOutlineBg: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors[theme ?? 'light'].neutral,
  },
  buttonDeleteBg: {
    backgroundColor: Colors[theme ?? 'light'].error,
  },
  buttonOutlineText: {
    color: Colors[theme ?? 'light'].neutral,
  },
  buttonGhostText: {
    color: Colors[theme ?? 'light'].info,
  },
  disabledButton: {
    opacity: 0.5,
  },
});

export default getStyles;
