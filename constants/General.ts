import { Dimensions } from 'react-native';

export const API_KEY = '6556f068a076ea6f0511e685ec24c016'; // Keep it here just for test purposes
export const WEATHER_API = 'https://api.openweathermap.org/data/3.0/onecall';

export const SCREEN_WIDTH = Dimensions.get('window').width;

export enum WeatherTypes {
  Sun = 'Sun',
  Clear = 'Clear',
  Clouds = 'Clouds',
  Rain = 'Rain',
}
