import type { WeatherTypes } from '@/constants/General';

export interface IWeatherData {
  location: string,
  temperature: number,
  type: WeatherTypes,
  shortDescription: string,
}
