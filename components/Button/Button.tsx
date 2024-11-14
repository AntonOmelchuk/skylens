import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import AppText from '../AppText/AppText';
import getStyles from './styles';

import type { StyleProp, ViewStyle } from 'react-native/types';

import { useAppSelector } from '@/store/hooks/useApp';
import selectCurrentTheme from '@/store/slices/theme/selectors';

export enum ButtonTypes {
  success = 'success',
  outline = 'outline',
  ghost = 'ghost',
  delete = 'delete',
}

export interface IButton {
  title: React.ReactNode,
  onPress: () => void,
  isLoading?: boolean,
  disabled?: boolean,
  type?: ButtonTypes,
  style?: StyleProp<ViewStyle>,
}

export default function Button({
  title,
  onPress,
  type = ButtonTypes.success,
  disabled = false,
  isLoading = false,
  style,
}: IButton) {
  const theme = useAppSelector(selectCurrentTheme);
  const styles = getStyles({ theme });

  return (
    <View style={StyleSheet.flatten([styles.container, style])}>
      <TouchableOpacity style={styles.wrapper} onPress={onPress} disabled={disabled || isLoading}>
        <View
          style={StyleSheet.flatten([
            type === ButtonTypes.success && styles.buttonSuccsessBg,
            type === ButtonTypes.outline && styles.buttonOutlineBg,
            type === ButtonTypes.delete && styles.buttonDeleteBg,
            disabled && styles.disabledButton,
            styles.button,
          ])}
        >
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <AppText
              style={StyleSheet.flatten([
                styles.text,
                type === ButtonTypes.success && styles.buttonSuccessText,
                type === ButtonTypes.outline && styles.buttonOutlineText,
                type === ButtonTypes.ghost && styles.buttonGhostText,
              ])}
            >
              {title}
            </AppText>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}
