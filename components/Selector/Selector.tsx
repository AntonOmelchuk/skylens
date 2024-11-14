import { FlatList, TouchableOpacity, View } from 'react-native';

import getStyles from './styles';

import AppText from '@/components/AppText/AppText';
import { useAppSelector } from '@/store/hooks/useApp';
import selectCurrentTheme from '@/store/slices/theme/selectors';

interface ISelector {
  data: Array<{
    id: number,
    title: string,
    value: string,
  }>,
  onClickHandler: (value: string) => void,
  activeItem: string,
}

export default function Selector({ data, onClickHandler, activeItem }: ISelector) {
  const theme = useAppSelector(selectCurrentTheme);
  const styles = getStyles({ theme });

  return (
    <FlatList
      data={data}
      style={{ flexGrow: 0 }}
      contentContainerStyle={styles.listContainer}
      keyExtractor={(item) => item.id.toString()}
      renderItem={
        ({ item }:any) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => onClickHandler(item?.value)}
          >
            <View style={{
              ...styles.item,
              ...activeItem === item?.value && styles.itemActive,
            }}
            />
            <AppText>
              {item.title}
            </AppText>
          </TouchableOpacity>
        )
      }
    />
  );
}
