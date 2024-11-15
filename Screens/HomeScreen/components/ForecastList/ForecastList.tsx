import { FlatList } from 'react-native';

import ForecastListItem from './ForecastListItem';
import getStyles from './styles';

import type { WeatherTypes } from '@/constants/General';
import type { IForecastData } from '@/interfaces/IForecastData';

import ListEmptyComponent from '@/components/List/ListEmptyComponent';
import ListLoader from '@/components/List/ListLoader';
import { useAppSelector } from '@/store/hooks/useApp';
import selectLocale from '@/store/slices/translates/selectors';
import { formatDate } from '@/utils/helpers';

interface IForecastList {
  data: Array<IForecastData> | null,
  weatherType: WeatherTypes,
  loading: boolean,
}

export default function ForecastList({ data, weatherType, loading }: IForecastList) {
  const locale = useAppSelector(selectLocale);

  const styles = getStyles({ type: weatherType });

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.dt.toString()}
      style={{ flexGrow: 0 }}
      contentContainerStyle={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <ForecastListItem
          temperature={item.main.temp}
          date={formatDate(item.dt, locale)}
          weatherType={weatherType}
          currentWeather={item.weather[0].main}
          shortDescription={item.weather[0].description}
        />
      )}
      ListEmptyComponent={<ListEmptyComponent isLoading={loading} />}
      ListFooterComponent={loading ? <ListLoader /> : null}
    />
  );
}
