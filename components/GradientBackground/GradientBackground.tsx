import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

import getStyles from './styles';

import { WeatherTypes } from '@/constants/General';

interface GradientBackgroundProps {
  weather: WeatherTypes,
  children: React.ReactNode,
}

export default function GradientBackground({ weather, children }: GradientBackgroundProps) {
  const { top } = useSafeAreaInsets();

  const styles = getStyles({ top });

  // Gradient colors based on the weather
  const gradientColors = {
    [WeatherTypes.Sun]: ['#FFDD89', '#FFC980'],
    [WeatherTypes.Clouds]: ['#D3D3D3', '#8E9EAB'],
    [WeatherTypes.Rain]: ['#4A5A6D', '#1C1F24'],
    [WeatherTypes.Clear]: ['#2C3E50', '#4CA1AF'],
  };

  // Determine colors based on the current weather
  const colors = gradientColors[weather] || gradientColors[WeatherTypes.Sun]; // Default sunny

  return (
    <LinearGradient colors={colors} style={styles.container}>
      {children}
    </LinearGradient>
  );
}
