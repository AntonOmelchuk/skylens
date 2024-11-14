import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { API_KEY, WEATHER_API } from '@/constants/General';
import { parseWeatherData } from '@/utils/helpers';

interface IUseGetWeather {
  latitude?: 'number',
  longitude?: 'number',
}

export default function useGetWeather({ latitude, longitude } : IUseGetWeather) {
  const { t } = useTranslation();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const getWeather = async () => {
    setLoading(true);

    try {
      const response = await fetch(`${WEATHER_API}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
      const result = await response.json();

      setData(result);
    } catch (e) {
      setError(t('general.errorDefaultMsg'));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (latitude && longitude) {
      getWeather();
    }
  }, [latitude, longitude]);

  return {
    data: parseWeatherData(data),
    loading,
    error,
  };
}
