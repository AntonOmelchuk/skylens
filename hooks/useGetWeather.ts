import { useEffect, useState } from 'react';

import type { IForecastData } from '@/interfaces/IForecastData';

import { API_KEY, FORECAST_API, WEATHER_CURRENT_API } from '@/constants/General';
import useActions from '@/store/hooks/useActions';
import { useAppSelector } from '@/store/hooks/useApp';
import selectCurrentUnits from '@/store/slices/general/selectors';
import { selectCurrentCity } from '@/store/slices/searchResults/selectors';
import selectLocale from '@/store/slices/translates/selectors';
import getErrorMsg from '@/utils/errors';
import { alert, parseWeatherData } from '@/utils/helpers';

interface IUseGetWeather {
  latitude?: number,
  longitude?: number,
  search?: string,
}

export default function useGetWeather({ latitude, longitude, search } : IUseGetWeather) {
  const units = useAppSelector(selectCurrentUnits);
  const currentCity = useAppSelector(selectCurrentCity);
  const language = useAppSelector(selectLocale);

  const { addResult } = useActions();

  const [data, setData] = useState(null);
  const [forecastData, setForecastData] = useState<Array<IForecastData> | null>(null);
  const [loading, setLoading] = useState(false);

  const getWeather = async (city?: string) => {
    const CURRENT_WEATHER_URL = city
      ? `${WEATHER_CURRENT_API}?q=${city}`
      : `${WEATHER_CURRENT_API}?lat=${latitude}&lon=${longitude}`;

    const FORECAST_URL = city
      ? `${FORECAST_API}?q=${city}`
      : `${FORECAST_API}?lat=${latitude}&lon=${longitude}`;

    setLoading(true);

    try {
      const response = await fetch(`${CURRENT_WEATHER_URL}&appid=${API_KEY}&units=${units}&lang=${language}`);
      const result = await response.json();

      if (!result.main && result.message) {
        alert(result.message);
        return;
      }

      const forecastResponse = await fetch(`${FORECAST_URL}&appid=${API_KEY}&units=${units}&lang=${language}`);

      const forecastResult = await forecastResponse.json();

      setData(result);
      setForecastData(forecastResult.list);
      addResult(result.name);
    } catch (e) {
      const errorMessage = getErrorMsg(e);

      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if ((latitude && longitude) || search || currentCity) {
      getWeather(search || currentCity);
    }
  }, [latitude, longitude, units, language, currentCity]);

  return {
    data: parseWeatherData(data),
    getWeather,
    forecastData,
    loading,
  };
}
