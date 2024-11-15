import { TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import getStyles from './styles';

interface IInput {
  placeholder: string,
  value: string,
  iconName: keyof typeof Ionicons.glyphMap,
  onChangeText: (text: string) => void,
}

export default function Input({
  placeholder, value, iconName, onChangeText,
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

      />
      <TouchableOpacity style={styles.icon}>
        <Ionicons name={iconName} size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
}
