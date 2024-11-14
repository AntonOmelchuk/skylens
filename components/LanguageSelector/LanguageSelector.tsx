import { FlatList, TouchableOpacity, View } from 'react-native';

import getStyles from './styles';

import AppText from '@/components/AppText/AppText';
import LanguageList from '@/constants/LanguageList';
import { useAppDispatch, useAppSelector } from '@/store/hooks/useApp';
import selectCurrentTheme from '@/store/slices/theme/selectors';
import selectLocale from '@/store/slices/translates/selectors';
import { setLocale } from '@/store/slices/translates/slice';

function LanguageSelector() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectCurrentTheme);
  const styles = getStyles({ theme });
  const locale = useAppSelector(selectLocale);

  const onItemClick = (lng: string) => {
    dispatch(setLocale(lng));
  };

  return (
    <FlatList
      data={LanguageList}
      contentContainerStyle={styles.listContainer}
      renderItem={
        ({ item }:any) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => onItemClick(item?.value)}
          >
            <View style={{
              ...styles.item,
              ...locale === item?.value && styles.itemActive,
            }}
            />
            <AppText>
              {item?.title}
            </AppText>
          </TouchableOpacity>
        )
      }
    />
  );
}

export default LanguageSelector;
