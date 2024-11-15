import { FlatList } from 'react-native';

import ForecastListItem from './ForecastListItem';
import getStyles from './styles';

import type { WeatherTypes } from '@/constants/General';
import type { IForecastData } from '@/interfaces/IForecastData';

import ListEmptyComponent from '@/components/List/ListEmptyComponent';
import ListLoader from '@/components/List/ListLoader';

interface IForecastList {
  data: Array<IForecastData> | null,
  weatherType: WeatherTypes,
  loading: boolean,
}

export default function ForecastList({ data, weatherType, loading }: IForecastList) {
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
          date={item.dt}
          weatherType={weatherType}
          currentWeather={item.weather[0].main}
          shortDescription={item.weather[0].description}
        />
      )}
      ListEmptyComponent={ListEmptyComponent}
      ListFooterComponent={loading ? <ListLoader /> : null}
    />
  );
}
