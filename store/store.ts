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

import general, { actions as generalActions } from './slices/general/slice';
import searchResults, { actions as searchResultsActions } from './slices/searchResults/slice';
import theme, { actions as themeActions } from './slices/theme/slice';
import translates, { setLocale } from './slices/translates/slice';

export const rootActions = {
  ...generalActions,
  ...searchResultsActions,
  ...themeActions,
  setLocale,
};

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  whitelist: ['theme', 'translates', 'general', searchResults],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    theme,
    translates,
    general,
    searchResults,
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
