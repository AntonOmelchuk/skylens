import { StyleSheet } from 'react-native';

import type { WeatherTypes } from '@/constants/General';

import Colors from '@/constants/Colors';
import { getTextColorsByWeatherType } from '@/utils/helpers';

const getStyles = ({ type }: { type: WeatherTypes }) => StyleSheet.create({
  container: {
    marginBottom: 'auto',
    height: 150,
    gap: 8,
  },
  itemContainer: {
    backgroundColor: `${Colors.dark.info}10`,
    borderRadius: 12,
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
  },
  temperatureText: {
    fontSize: 30,
    lineHeight: 30,
    fontWeight: '600',
    color: getTextColorsByWeatherType(type),
  },
  dateText: {
    marginTop: 16,
    fontSize: 16,
    lineHeight: 16,
    fontWeight: '400',
    color: getTextColorsByWeatherType(type),
  },
  shortDescription: {
    height: 28,
    marginTop: 12,
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '400',
    textAlign: 'center',
    textTransform: 'capitalize',
    color: getTextColorsByWeatherType(type),
  },
});

export default getStyles;
