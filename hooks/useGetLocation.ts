import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as Location from 'expo-location';

export default function useGetLocation() {
  const { t } = useTranslation();

  const [location, setLocation] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isDenied, setIsDenied] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        // Request location permissions
        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== Location.PermissionStatus.GRANTED) {
          setIsDenied(true);

          return;
        }

        // Get current position
        const loc = await Location.getCurrentPositionAsync({});
        setLocation(JSON.stringify(loc));
      } catch (e) {
        setError(t('general.errorDefaultMsg'));
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return {
    location,
    loading,
    error,
    isDenied,
  };
}
