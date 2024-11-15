import { useState } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import DeniedPermission from './components/DeniedPermission/DeniedPermission';
import ForecastList from './components/ForecastList/ForecastList';
import WeatherInfo from './components/WeatherInfo/WeatherInfo';

import Error from '@/components/Error/Error';
import GradientBackground from '@/components/GradientBackground/GradientBackground';
import Input from '@/components/Input/Input';
import Loader from '@/components/Loader/Loader';
import useGetLocation from '@/hooks/useGetLocation';
import useGetWeather from '@/hooks/useGetWeather';

export default function HomeScreen() {
  const { top } = useSafeAreaInsets();

  const [searchValue, setSearchValue] = useState<string>('');

  const { t } = useTranslation();

  const {
    location, loading, error, isDenied,
  } = useGetLocation();

  const {
    loading: weatherLoading, data, forecastData, getWeather,
  } = useGetWeather({
    latitude: location?.latitude,
    longitude: location?.longitude,
  });

  const onInputHandler = (value: string) => {
    setSearchValue(value);
  };

  const onIconPressHandler = () => {
    if (searchValue.length > 2 && !loading && !weatherLoading) {
      getWeather(searchValue);
    }
  };

  return (
    <GradientBackground weather={data.type}>
      {loading ? <Loader /> : (
        <View style={{
          flex: 1,
          justifyContent: 'space-between',
          paddingTop: top,
        }}
        >
          <Input
            placeholder={t('home.searchCity')}
            iconName="search-outline"
            value={searchValue}
            onChangeText={onInputHandler}
            onIconPress={onIconPressHandler}
            disabled={loading || weatherLoading}
          />
          {data ? <WeatherInfo weatherData={data} loading={weatherLoading} /> : null}
          {error ? <Error error={error} /> : null}
          {(isDenied && !data) ? <DeniedPermission /> : null}

          <ForecastList data={forecastData} loading={weatherLoading} weatherType={data.type} />
        </View>
      )}
    </GradientBackground>
  );
}
