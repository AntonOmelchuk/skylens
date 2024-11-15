import { Dimensions } from 'react-native';

export const API_KEY = '6556f068a076ea6f0511e685ec24c016'; // Keep it here just for test purposes
export const WEATHER_BASE_API = 'https://api.openweathermap.org';
export const WEATHER_CURRENT_API = `${WEATHER_BASE_API}/data/2.5/weather`;
export const FORECAST_API = `${WEATHER_BASE_API}/data/2.5/forecast`;

export const SCREEN_WIDTH = Dimensions.get('window').width;

export enum WeatherTypes {
  Sun = 'Sun',
  Clear = 'Clear',
  Clouds = 'Clouds',
  Rain = 'Rain',
}

export enum TemperatureUnits {
  Celsius = 'metric',
  Fahrenheit = 'imperial',
}
