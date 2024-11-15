import { Text, TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import WeatherIcon from '../WeatherIcon/WeatherIcon';
import getStyles from './styles';

import type { IWeatherData } from '@/interfaces/IWeatherData';

import Loader from '@/components/Loader/Loader';

interface IWeatherInfo {
  weatherData: IWeatherData,
  loading: boolean,
  onPress?: () => void,
}

export default function WeatherInfo({ weatherData, loading, onPress }: IWeatherInfo) {
  const {
    location, temperature, type, shortDescription,
  } = weatherData;

  const { t } = useTranslation();

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

          <TouchableOpacity onPress={onPress}>
            <Text style={styles.linkText}>{t('home.moreDetails')}</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}
