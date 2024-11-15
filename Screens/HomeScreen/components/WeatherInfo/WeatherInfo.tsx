import { Text, View } from 'react-native';

import WeatherIcon from '../WeatherIcon/WeatherIcon';
import getStyles from './styles';

import type { IWeatherData } from '@/interfaces/IWeatherData';

import Loader from '@/components/Loader/Loader';

interface IWeatherInfo {
  weatherData: IWeatherData,
  loading: boolean,
}

export default function WeatherInfo({ weatherData, loading }: IWeatherInfo) {
  const {
    location, temperature, type, shortDescription,
  } = weatherData;

  const styles = getStyles({ type });

  return (
    <View style={styles.container}>
      {loading ? <Loader style={styles.loader} /> : (
        <>
          <View style={styles.locationContainer}>
            <Text style={styles.countryTitle}>
              {location}
            </Text>
          </View>

          <Text style={styles.temperatureText}>
            {Math.round(temperature)}
            &#176;
          </Text>

          <WeatherIcon type={type} />

          <Text style={styles.shortDescriptionText}>
            {shortDescription}
          </Text>
        </>
      )}
    </View>
  );
}
