import { View } from 'react-native';

import DeniedPermission from './components/DeniedPermission/DeniedPermission';
import ForecastList from './components/ForecastList/ForecastList';
import WeatherInfo from './components/WeatherInfo/WeatherInfo';
import getStyles from './styles';

import type { IForecastData } from '@/interfaces/IForecastData';

import mockForecastData from '@/__mocks__/forecast_api_response';
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
    <GradientBackground weather={parsedWeatherData.type}>
      <View style={styles.container}>
        {loading ? <Loader /> : (
          <>
            {parsedWeatherData ? <WeatherInfo weatherData={parsedWeatherData} /> : null}
            {error ? <Error error={error} /> : null}
            {isDenied ? <DeniedPermission /> : null}

            <ForecastList data={mockForecastData.list as Array<IForecastData>} weatherType={parsedWeatherData.type} />
          </>
        )}
      </View>
    </GradientBackground>
  );
}
