import dayjs from 'dayjs';

import type { IWeatherData } from '@/interfaces/IWeatherData';

import Colors from '@/constants/Colors';
import { WeatherTypes } from '@/constants/General';
// Sun = 'Sun',
//   Clear = 'Clear',
//   Clouds = 'Clouds',
//   Rain = 'Rain',
export const parseWeatherData = (data: any): IWeatherData => ({
  location: data?.name,
  temperature: data?.main.temp,
  type: data?.weather[0].main,
  shortDescription: data?.weather[0].description,
});

export const formatDate = (date: number): string => dayjs(date * 1000).format('ddd ha');

export const getTextColorsByWeatherType = (
  type: WeatherTypes,
) => ((type === WeatherTypes.Rain || type === WeatherTypes.Clear) ? Colors.dark.text : Colors.dark.info);
