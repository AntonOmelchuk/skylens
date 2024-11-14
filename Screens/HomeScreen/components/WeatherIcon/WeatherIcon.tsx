import { useRef } from 'react';
import LottieView from 'lottie-react-native';

import getStyles from './styles';

import type { ViewStyle } from 'react-native';

import { WeatherTypes } from '@/constants/General';

const sun = require('@/assets/lottie/sun.json');
const cloud = require('@/assets/lottie/cloud.json');
const rain = require('@/assets/lottie/rain.json');

interface IWeatherIcon {
  type: WeatherTypes,
  style?: ViewStyle,
}

export default function WeatherIcon({ type, style }: IWeatherIcon) {
  const animation = useRef<LottieView>(null);

  const styles = getStyles();

  const getIcon = () => {
    switch (type) {
      case WeatherTypes.Sun:
        return sun;
      case WeatherTypes.Clouds:
        return cloud;
      case WeatherTypes.Rain:
        return rain;
      default:
        return sun;
    }
  };

  return (
    <LottieView
      autoPlay
      ref={animation}
      style={[styles.lottie, style]}
      source={getIcon()}
    />
  );
}
