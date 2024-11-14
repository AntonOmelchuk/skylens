import { View } from 'react-native';

import DeniedPermission from './components/DeniedPermission/DeniedPermission';
import WeatherInfo from './components/WeatherInfo/WeatherInfo';
import getStyles from './styles';

import mockData from '@/__mocks__/weather_api_response';
import Error from '@/components/Error/Error';
import GradientBackground from '@/components/GradientBackground/GradientBackground';
import Loader from '@/components/Loader/Loader';
import useGetLocation from '@/hooks/useGetLocation';
import { parseWeatherData } from '@/utils/helpers';

export default function HomeScreen() {
  const styles = getStyles();

  const {
    loading, error, isDenied,
  } = useGetLocation();

  const parsedWeatherData = parseWeatherData(mockData);

  return (
    <View style={styles.container}>
      <GradientBackground weather={parsedWeatherData.type}>
        {loading ? <Loader /> : (
          <>
            {parsedWeatherData ? <WeatherInfo weatherData={parsedWeatherData} /> : null}
            {error ? <Error error={error} /> : null}
            {isDenied ? <DeniedPermission /> : null}
          </>
        )}
      </GradientBackground>
    </View>
  );
}
