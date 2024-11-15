import { ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs';

import DetailsItem from './components/DetailsItem';
import getStyles from './styles';

import type { IWeatherDetails } from '@/interfaces/IWeatherDetails';

import { useAppSelector } from '@/store/hooks/useApp';
import selectCurrentTheme from '@/store/slices/theme/selectors';

interface IWeatherDetailsProps {
  data: IWeatherDetails,
}

export default function WeatherDetails({ data }: IWeatherDetailsProps) {
  const {
    humidity, pressure, wind, sunrise, sunset, feelsLike, tempMin, tempMax,
  } = data;

  const { t } = useTranslation();

  const theme = useAppSelector(selectCurrentTheme);

  const styles = getStyles({ theme });

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <DetailsItem title={t('home.humidity')} value={`${humidity}%`} />
      <DetailsItem title={t('home.sunset')} value={dayjs(sunset * 1000).format('HH:mm')} />
      <DetailsItem title={t('home.sunrise')} value={dayjs(sunrise * 1000).format('HH:mm')} />
      <DetailsItem title={t('home.pressure')} value={`${pressure} hPa`} />
      <DetailsItem title={t('home.wind')} value={`${wind} m/s`} />
      <DetailsItem title={t('home.feelsLike')} value={`${feelsLike}°`} />
      <DetailsItem title={t('home.minTemperature')} value={`${tempMin}°`} />
      <DetailsItem title={t('home.maxTemperature')} value={`${tempMax}°`} />

    </ScrollView>
  );
}
