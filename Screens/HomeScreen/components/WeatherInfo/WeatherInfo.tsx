import { Text, View } from 'react-native';

import getStyles from './styles';

import type { IWeatherData } from '@/interfaces/IWeatherData';

interface IWeatherInfo {
  weatherData: IWeatherData,
}

export default function WeatherInfo({ weatherData }: IWeatherInfo) {
  const { location: { country, city }, temperature, type } = weatherData;

  const styles = getStyles({ type });

  return (
    <>
      <View style={styles.locationContainer}>
        <Text style={styles.countryTitle}>
          {country}
          ,
        </Text>
        <Text style={styles.cityTitle}>
          {' '}
          {city}
        </Text>
      </View>

      <Text style={styles.temperatureText}>
        {temperature}
        &#176;
      </Text>
    </>
  );
}
