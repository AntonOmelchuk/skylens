import { Switch } from 'react-native';

import Colors from '@/constants/Colors';
import { useAppSelector } from '@/store/hooks/useApp';
import selectCurrentTheme from '@/store/slices/theme/selectors';

interface IAppSwitch {
  isEnabled: boolean,
  toggleSwitch: (state:boolean) => void,
}
function AppSwitch({ isEnabled, toggleSwitch }:IAppSwitch) {
  const theme = useAppSelector(selectCurrentTheme);

  return (
    <Switch
      trackColor={Colors[theme].Switch.trackColor}
      thumbColor={Colors[theme].Switch.thumbColor}
      ios_backgroundColor="#3e3e3e"
      onValueChange={(val:boolean) => toggleSwitch(val)}
      value={isEnabled}
    />
  );
}

export default AppSwitch;
