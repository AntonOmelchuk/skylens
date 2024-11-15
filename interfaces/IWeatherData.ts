import type { WeatherTypes } from '@/constants/General';
import type { IWeatherDetails } from './IWeatherDetails';

export interface IWeatherData {
  location: string,
  temperature: number,
  type: WeatherTypes,
  shortDescription: string,
  details: IWeatherDetails,
}
