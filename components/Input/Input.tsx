import { TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import getStyles from './styles';

interface IInput {
  placeholder: string,
  value: string,
  iconName: keyof typeof Ionicons.glyphMap,
  disabled?: boolean,
  onChangeText: (text: string) => void,
  onIconPress: () => void,
  onFocus?: () => void,
  onBlur?: () => void,
}

export default function Input({
  placeholder,
  value,
  iconName,
  disabled,
  onChangeText,
  onIconPress,
  onFocus,
  onBlur,
}: IInput) {
  const styles = getStyles();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="lightgrey"
        value={value}
        onChangeText={onChangeText}
        editable={!disabled}
        onFocus={onFocus}
        onBlur={onBlur}
        onSubmitEditing={onIconPress}
        enterKeyHint="search"
      />
      <TouchableOpacity style={styles.icon} disabled={!value || disabled} onPress={onIconPress} activeOpacity={0.8}>
        <Ionicons name={iconName} size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
}
