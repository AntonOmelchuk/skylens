import { Alert } from 'react-native';
import dayjs from 'dayjs';

import type { IWeatherData } from '@/interfaces/IWeatherData';

import Colors from '@/constants/Colors';
import { WeatherTypes } from '@/constants/General';

export const parseWeatherData = (data: any): IWeatherData => ({
  location: data?.name,
  temperature: data?.main.temp,
  type: data?.weather[0].main,
  shortDescription: data?.weather[0].description,
});

export const formatDate = (date: number): string => dayjs(date * 1000).format('ddd ha');

export const getTextColorsByWeatherType = (type: WeatherTypes) => {
  switch (type) {
    case WeatherTypes.Rain:
    case WeatherTypes.Clear:
      return Colors.dark.text;
    case WeatherTypes.Clouds:
    case WeatherTypes.Sun:
      return Colors.dark.info;
    case WeatherTypes.Snow:
      return Colors.dark.darkBlue;
    default:
      return Colors.dark.text;
  }
};

export const alert = (msg: string) => (
  Alert.alert(
    '',
    msg.toUpperCase(),
    [
      { text: 'OK' },
    ],
  )
);
