import { FlatList } from 'react-native';

import ForecastListItem from './ForecastListItem';
import getStyles from './styles';

import type { WeatherTypes } from '@/constants/General';
import type { IForecastData } from '@/interfaces/IForecastData';

interface IForecastList {
  data: Array<IForecastData>,
  weatherType: WeatherTypes,
}

export default function ForecastList({ data, weatherType }: IForecastList) {
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
    />
  );
}
