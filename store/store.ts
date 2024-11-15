import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

import general from './slices/general/slice';
import searchResuts from './slices/searchResults/slice';
import theme from './slices/theme/slice';
import translates from './slices/translates/slice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  whitelist: ['theme', 'translates', 'general', searchResuts],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    theme,
    translates,
    general,
    searchResuts,
  }),
);

export function makeStore() {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  });
}

export const store = makeStore();

setupListeners(store.dispatch);

export const persistor = persistStore(store);
