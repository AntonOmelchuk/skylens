import { useCallback, useRef, useState } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import WeatherDetails from '../WeatherDetails/WeatherDetails';
import DeniedPermission from './components/DeniedPermission/DeniedPermission';
import ForecastList from './components/ForecastList/ForecastList';
import Results from './components/Results/Results';
import WeatherInfo from './components/WeatherInfo/WeatherInfo';

import type { BottomSheetRefProps } from '@/components/BottomSheet/BottomSheet';

import BottomSheet from '@/components/BottomSheet/BottomSheet';
import Error from '@/components/Error/Error';
import GradientBackground from '@/components/GradientBackground/GradientBackground';
import Input from '@/components/Input/Input';
import Loader from '@/components/Loader/Loader';
import { SCREEN_HEIGHT } from '@/constants/General';
import useGetLocation from '@/hooks/useGetLocation';
import useGetWeather from '@/hooks/useGetWeather';
import useActions from '@/store/hooks/useActions';

export default function HomeScreen() {
  const ref = useRef<BottomSheetRefProps>(null);

  const { top, bottom } = useSafeAreaInsets();

  const { setCurrentCity } = useActions();

  const [searchValue, setSearchValue] = useState<string>('');
  const [showResults, setShowResults] = useState<boolean>(false);

  const { t } = useTranslation();

  const {
    location, loading, error, isDenied,
  } = useGetLocation();

  const {
    loading: weatherLoading, data, forecastData,
  } = useGetWeather({
    latitude: location?.latitude,
    longitude: location?.longitude,
    search: searchValue,
  });

  const onInputHandler = (value: string) => {
    setSearchValue(value);
  };

  const onIconPressHandler = () => {
    if (searchValue.length > 2 && !loading && !weatherLoading) {
      setShowResults(false);
      setCurrentCity(searchValue);
    }
  };

  const onPressHandler = useCallback(() => {
    ref?.current?.scrollTo(-(SCREEN_HEIGHT - bottom - top));
  }, []);

  return (
    <TouchableOpacity
      style={{ flex: 1 }}
      onPress={() => setShowResults(false)}
      activeOpacity={1}
      disabled={!showResults}
    >
      <GradientBackground weather={data.type}>
        {loading ? <Loader /> : null}
        <GestureHandlerRootView style={{ flex: 1 }}>
          <ScrollView contentContainerStyle={{
            flex: 1,
            justifyContent: 'space-between',
            paddingTop: top,
            paddingBottom: bottom,
          }}
          >
            <Input
              placeholder={t('home.searchCity')}
              iconName="search-outline"
              value={searchValue}
              onChangeText={onInputHandler}
              onIconPress={onIconPressHandler}
              onFocus={() => setShowResults(true)}
              disabled={loading || weatherLoading}
            />
            {showResults ? (
              <Results hideResultsCallback={(value: string) => {
                setShowResults(false);
                setSearchValue(value);
              }}
              />
            ) : null}
            {data?.location
              ? <WeatherInfo weatherData={data} loading={weatherLoading} onPress={onPressHandler} /> : null}
            {error ? <Error error={error} /> : null}
            {(isDenied && !data?.location) ? <DeniedPermission /> : null}

            <ForecastList data={forecastData} loading={weatherLoading} weatherType={data.type} />
          </ScrollView>
          <BottomSheet ref={ref}>
            <WeatherDetails data={data.details} />
          </BottomSheet>
        </GestureHandlerRootView>
      </GradientBackground>
    </TouchableOpacity>
  );
}
