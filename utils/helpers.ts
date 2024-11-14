import type { IWeatherData } from '@/interfaces/IWeatherData';

export const parseWeatherLocationData = (location: string) => {
  const country = location.split('/')[0];
  const city = location.split('/')[1].replace('_', ' ');

  return { country, city };
};

export const parseWeatherData = (data: any): IWeatherData => {
  const { country, city } = parseWeatherLocationData(data.timezone);

  return {
    location: {
      country,
      city,
    },
    temperature: data.current.temp,
    type: data.current.weather[0].main,
  };
};
