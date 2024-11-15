import { StyleSheet } from 'react-native';

import type { WeatherTypes } from '@/constants/General';

import { getTextColorsByWeatherType } from '@/utils/helpers';

const getStyles = ({ type }: { type: WeatherTypes }) => StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countryTitle: {
    fontSize: 30,
    lineHeight: 30,
    fontWeight: '700',
    color: getTextColorsByWeatherType(type),
  },
  temperatureText: {
    marginTop: 16,
    fontSize: 84,
    lineHeight: 84,
    fontWeight: '700',
    color: getTextColorsByWeatherType(type),
  },
  shortDescriptionText: {
    marginTop: 8,
    fontSize: 20,
    lineHeight: 20,
    fontWeight: '600',
    textTransform: 'capitalize',
    color: getTextColorsByWeatherType(type),
  },
  loader: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
});

export default getStyles;
