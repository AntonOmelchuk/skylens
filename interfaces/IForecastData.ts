import type { WeatherTypes } from '@/constants/General';

export interface IForecastData {
  dt: number,
  main: {
    temp: number,
  },
  weather: Array<{
    main: WeatherTypes,
    description: string,
  }>,
}
