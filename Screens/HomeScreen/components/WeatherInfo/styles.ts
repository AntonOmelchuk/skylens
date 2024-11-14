import { StyleSheet } from 'react-native';

import Colors from '@/constants/Colors';
import { WeatherTypes } from '@/constants/General';

const getStyles = ({ type }: { type: WeatherTypes }) => StyleSheet.create({
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countryTitle: {
    fontSize: 30,
    lineHeight: 30,
    fontWeight: '700',
  },
  cityTitle: {
    fontSize: 27,
    lineHeight: 30,
    fontWeight: '500',
  },
  temperatureText: {
    marginTop: 16,
    fontSize: 40,
    lineHeight: 40,
    fontWeight: '700',
    color: type === WeatherTypes.Rain ? Colors.dark.text : Colors.dark.info,
  },
});

export default getStyles;
