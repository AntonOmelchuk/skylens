import type { WeatherTypes } from '@/constants/General';

export interface IWeatherData {
  location: {
    country: string,
    city: string,
  },
  temperature: number,
  type: WeatherTypes,
}
