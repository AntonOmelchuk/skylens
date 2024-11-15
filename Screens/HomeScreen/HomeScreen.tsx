import { useState } from 'react';
import { useTranslation } from 'react-i18next';

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
  const [searchValue, setSearchValue] = useState<string>('');

  const { t } = useTranslation();

  const {
    location, loading, error, isDenied,
  } = useGetLocation();

  const {
    loading: weatherLoading, error: weatherError, data, forecastData,
  } = useGetWeather({
    latitude: location?.latitude,
    longitude: location?.longitude,
  });

  const onInputHandler = (value: string) => {
    setSearchValue(value);
  };

  return (
    <GradientBackground weather={data.type}>
      {loading ? <Loader /> : (
        <>
          <Input
            placeholder={t('home.searchCity')}
            iconName="search-outline"
            value={searchValue}
            onChangeText={onInputHandler}
          />
          {data ? <WeatherInfo weatherData={data} loading={weatherLoading} /> : null}
          {(error || weatherError) ? <Error error={error || weatherError} /> : null}
          {isDenied ? <DeniedPermission /> : null}

          <ForecastList data={forecastData} loading={weatherLoading} weatherType={data.type} />
        </>
      )}
    </GradientBackground>
  );
}
