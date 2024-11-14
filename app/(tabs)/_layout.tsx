import { useTranslation } from 'react-i18next';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';

import type IRenderIcon from '@/interfaces/IRendeIcon';

import Colors from '@/constants/Colors';
import { useAppSelector } from '@/store/hooks/useApp';
import selectCurrentTheme from '@/store/slices/theme/selectors';

export default function TabLayout() {
  const { t } = useTranslation();
  const theme = useAppSelector(selectCurrentTheme);

  const renderHomeIcon = ({ color, focused }:IRenderIcon) => (
    <Ionicons name={focused ? 'home' : 'home-outline'} color={color} size={24} />
  );
  const renderSettingIcon = ({ color, focused }:IRenderIcon) => (
    <Ionicons name={focused ? 'menu-outline' : 'menu'} color={color} size={24} />
  );

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[theme].tint,
        headerShown: true,
        headerStyle: {
          backgroundColor: Colors[theme].background,
        },
        tabBarStyle: {
          backgroundColor: Colors[theme].background,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: renderHomeIcon,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: `${t('settings.pageTitle')}`,
          tabBarIcon: renderSettingIcon,
        }}
      />
    </Tabs>
  );
}
