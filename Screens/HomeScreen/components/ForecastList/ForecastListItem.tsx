import { Text, View } from 'react-native';

import WeatherIcon from '../WeatherIcon/WeatherIcon';
import getStyles from './styles';

import type { WeatherTypes } from '@/constants/General';

import { formatDate } from '@/utils/helpers';

interface IForecastListItem {
  temperature: number,
  date: number,
  weatherType: WeatherTypes,
  currentWeather: WeatherTypes,
  shortDescription: string,
}

export default function ForecastListItem({
  temperature, date, weatherType, currentWeather, shortDescription,
}: IForecastListItem) {
  const styles = getStyles({ type: weatherType });

  return (
    <View style={styles.itemContainer}>
      <WeatherIcon
        type={currentWeather}
        style={{
          width: 25,
          height: 25,
          position: 'absolute',
          top: 4,
          right: 4,
        }}
      />
      <Text style={styles.temperatureText}>
        {Math.round(temperature)}
        &#176;
      </Text>
      <Text style={styles.dateText}>{formatDate(date)}</Text>
      <Text style={styles.shortDescription}>{shortDescription}</Text>
    </View>
  );
}
